import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Reveal from './Reveal';

export default function ProductGrid({ onAdded }) {
  const { add } = useCart();

  function handleAdd(product, boxSize) {
    add(product, boxSize);
    onAdded?.(`${product.name} (${boxSize} pcs)`);
  }

  return (
    <section id="shop" className="section products-section">
      <div className="container">
        <Reveal className="section-header section-header-left">
          <h2>our chocolates</h2>
          <a href="#shop" className="text-link">shop all</a>
        </Reveal>
        <div className="product-grid">
          {products.map((product, index) => (
            <Reveal
              key={product.id}
              as="article"
              className="product-card"
              delay={index * 70}
              variant="scale"
            >
              <div className="product-visual">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.tag && <span className="product-tag">{product.tag}</span>}
                <div className="product-hover">
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="product-body">
                <h3>{product.name}</h3>
                <p className="price price-range">
                  6 pcs · ₹{product.prices[6].toLocaleString('en-IN')}
                  <span className="price-sep"> / </span>
                  9 pcs · ₹{product.prices[9].toLocaleString('en-IN')}
                </p>
                <div className="product-add-row">
                  <button
                    type="button"
                    className="btn-add"
                    onClick={() => handleAdd(product, 6)}
                  >
                    Add 6 pcs
                  </button>
                  <button
                    type="button"
                    className="btn-add btn-add--alt"
                    onClick={() => handleAdd(product, 9)}
                  >
                    Add 9 pcs
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="products-note" delay={200}>
          You can add both 6-piece and 9-piece boxes for the same chocolate — adjust quantities in your cart.
        </Reveal>
      </div>
    </section>
  );
}
