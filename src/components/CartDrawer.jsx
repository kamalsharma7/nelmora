import { useMemo, useState } from 'react';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';
import { openWhatsAppOrder } from '../utils/whatsapp';

function groupCartItems(items) {
  const groups = new Map();
  for (const item of items) {
    if (!groups.has(item.productId)) {
      groups.set(item.productId, { productId: item.productId, lines: [] });
    }
    groups.get(item.productId).lines.push(item);
  }
  return [...groups.values()];
}

export default function CartDrawer({ open, onClose }) {
  const { items, total, setQty, add, remove, clear, linePrice } = useCart();
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const groups = useMemo(() => groupCartItems(items), [items]);

  if (!open) return null;

  const addressReady = address.trim().length >= 10;
  const canSend = items.length > 0 && addressReady;

  function handleWhatsApp() {
    if (!canSend) return;
    openWhatsAppOrder(items, total, address, note, linePrice);
  }

  function hasLine(productId, boxSize) {
    return items.some((i) => i.productId === productId && i.boxSize === boxSize);
  }

  return (
    <>
      <div className="overlay" onClick={onClose} aria-hidden="true" />
      <aside className="drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="drawer-header">
          <h2 id="cart-title">Your cart</h2>
          <button type="button" className="close-btn" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </div>
        <div className="drawer-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <span>🛒</span>
              <p>Your cart is empty. Pick something sweet from the shop.</p>
            </div>
          ) : (
            <>
              {groups.map((group) => {
                const product = getProductById(group.productId);
                const firstLine = group.lines[0];
                return (
                  <div key={group.productId} className="cart-product-group">
                    <div className="cart-product-group-header">
                      <div className="cart-item-thumb">
                        <img src={firstLine.image} alt="" />
                      </div>
                      <h4 className="cart-product-group-title">{firstLine.name}</h4>
                    </div>
                    {group.lines.map((item) => {
                      const unit = linePrice(item);
                      return (
                        <div key={item.id} className="cart-line">
                          <p className="cart-line-size">
                            {item.boxSize}-piece box · ₹{unit.toLocaleString('en-IN')} each
                          </p>
                          <p className="line-price">
                            ₹{unit.toLocaleString('en-IN')} × {item.qty} = ₹
                            {(unit * item.qty).toLocaleString('en-IN')}
                          </p>
                          <div className="qty-controls">
                            <button
                              type="button"
                              onClick={() => setQty(item.id, item.qty - 1)}
                              aria-label={`Decrease ${item.name} ${item.boxSize} pcs`}
                            >
                              −
                            </button>
                            <span>{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => setQty(item.id, item.qty + 1)}
                              aria-label={`Increase ${item.name} ${item.boxSize} pcs`}
                            >
                              +
                            </button>
                          </div>
                          <button type="button" className="remove-link" onClick={() => remove(item.id)}>
                            Remove this line
                          </button>
                        </div>
                      );
                    })}
                    {product && (
                      <div className="cart-add-size-row">
                        {!hasLine(group.productId, 6) && (
                          <button
                            type="button"
                            className="box-size-btn"
                            onClick={() => add(product, 6)}
                          >
                            + Add 6-piece box
                          </button>
                        )}
                        {!hasLine(group.productId, 9) && (
                          <button
                            type="button"
                            className="box-size-btn"
                            onClick={() => add(product, 9)}
                          >
                            + Add 9-piece box
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="drawer-note">
                <label htmlFor="delivery-address">
                  Delivery address <span className="label-required">(required)</span>
                </label>
                <textarea
                  id="delivery-address"
                  className={!addressReady && address.length > 0 ? 'field-incomplete' : ''}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Full name, phone, house no., street, city, pin code..."
                  rows={4}
                  required
                  autoComplete="street-address"
                />
                {!addressReady && address.length > 0 && (
                  <p className="field-hint">Please enter a complete delivery address (at least 10 characters).</p>
                )}
              </div>
              <div className="drawer-note">
                <label htmlFor="order-note">Special request (optional)</label>
                <textarea
                  id="order-note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Gift message, preferred delivery date, etc."
                  rows={3}
                />
              </div>
            </>
          )}
        </div>
        <div className="drawer-footer">
          <div className="total-row">
            <span>Total</span>
            <strong>₹{total.toLocaleString('en-IN')}</strong>
          </div>
          <button
            type="button"
            className="btn-whatsapp"
            disabled={!canSend}
            onClick={handleWhatsApp}
            title={!addressReady ? 'Add your delivery address to continue' : undefined}
          >
            <span aria-hidden="true">📱</span>
            Send order on WhatsApp
          </button>
          {items.length > 0 && !addressReady && (
            <p className="drawer-footer-hint">Add your delivery address above to send the order.</p>
          )}
          {items.length > 0 && (
            <button
              type="button"
              className="remove-link"
              style={{ display: 'block', margin: '0.75rem auto 0', textAlign: 'center' }}
              onClick={clear}
            >
              Clear cart
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
