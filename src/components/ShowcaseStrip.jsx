import { SHOWCASE_IMAGE } from '../data/products';
import Reveal from './Reveal';

export default function ShowcaseStrip() {
  return (
    <section className="showcase-strip" aria-label="Our chocolate range">
      <div className="container">
        <Reveal variant="scale">
          <figure className="showcase-figure">
            <img
              src={SHOWCASE_IMAGE}
              alt="Nelmora artisan chocolate bars and gift boxes — almond, rose, pistachio, hazelnut, and dark chocolate"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Reveal>
        <Reveal as="p" className="showcase-caption" delay={100}>
          Artisan bars &amp; gift boxes — crafted in small batches
        </Reveal>
      </div>
    </section>
  );
}
