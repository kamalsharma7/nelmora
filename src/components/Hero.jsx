import { HERO_IMAGE } from '../data/products';

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero-visual hero-banner">
        <img
          src={HERO_IMAGE}
          alt="Nelmora — The Art of Chocolate. Discover our handcrafted masterpieces."
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-banner-actions">
          <a href="#shop" className="btn btn-gold hero-shop-btn">Shop now</a>
        </div>
      </div>
    </section>
  );
}
