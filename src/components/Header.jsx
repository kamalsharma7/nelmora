import { useCart } from '../context/CartContext';
import BrandMark from './BrandMark';

const INSTAGRAM_URL = 'https://www.instagram.com/nelmora.in';

export default function Header({ onOpenCart }) {
  const { count } = useCart();

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="Nelmora — The Art of Chocolate, home">
          <BrandMark variant="header" />
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#shop">Chocolate</a>
          <a href="#shop">Gifts</a>
          <a href="#about">Our story</a>
          <a
            href={INSTAGRAM_URL}
            className="nav-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Nelmora on Instagram"
          >
            <InstagramIcon />
          </a>
          <button type="button" className="cart-btn" onClick={onOpenCart} aria-label="Open cart">
            <span className="cart-label">Cart</span>
            {count > 0 && <span className="cart-badge">{count > 99 ? '99+' : count}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        fill="currentColor"
      />
    </svg>
  );
}
