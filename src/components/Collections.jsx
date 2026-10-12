import { products } from '../data/products';
import Reveal from './Reveal';

const collections = [
  {
    title: 'Classic bars',
    text: 'Butterscotch, caramel, and cookie-inspired favourites.',
    href: '#shop',
    image: products[0].image,
  },
  {
    title: 'Indulgent picks',
    text: 'Rainbow, dry fruit, and premium nut-filled bars.',
    href: '#shop',
    image: products[6].image,
  },
  {
    title: 'Crunch & crisp',
    text: 'Rice balls and Oreo bars for extra texture.',
    href: '#shop',
    image: products[3].image,
  },
];

export default function Collections() {
  return (
    <section className="collections" aria-labelledby="collections-heading">
      <div className="container">
        <Reveal>
          <h2 id="collections-heading" className="section-eyebrow">dive into our collections</h2>
        </Reveal>
        <div className="collections-grid">
          {collections.map((item, index) => (
            <Reveal
              key={item.title}
              as="a"
              href={item.href}
              className="collection-card"
              delay={index * 90}
              variant="up"
            >
              <div className="collection-card-visual">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <div className="collection-card-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="collection-link">Explore</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
