import { createContext, useContext, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

export function cartLineId(productId, boxSize) {
  return `${productId}-${boxSize}`;
}

function linePrice(item) {
  return item.prices[item.boxSize] ?? 0;
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, boxSize } = action;
      const id = cartLineId(product.id, boxSize);
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            id,
            productId: product.id,
            name: product.name,
            image: product.image,
            prices: product.prices,
            boxSize,
            qty: 1,
          },
        ],
      };
    }
    case 'REMOVE':
      return { items: state.items.filter((i) => i.id !== action.id) };
    case 'SET_QTY': {
      if (action.qty < 1) {
        return { items: state.items.filter((i) => i.id !== action.id) };
      }
      return {
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: action.qty } : i
        ),
      };
    }
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const value = useMemo(() => {
    const count = state.items.reduce((sum, i) => sum + i.qty, 0);
    const total = state.items.reduce((sum, i) => sum + linePrice(i) * i.qty, 0);
    return {
      items: state.items,
      count,
      total,
      add: (product, boxSize) => dispatch({ type: 'ADD', product, boxSize }),
      remove: (id) => dispatch({ type: 'REMOVE', id }),
      setQty: (id, qty) => dispatch({ type: 'SET_QTY', id, qty }),
      clear: () => dispatch({ type: 'CLEAR' }),
      linePrice,
    };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
