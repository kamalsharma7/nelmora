import Reveal from './Reveal';

export default function EditorialBand() {
  return (
    <section className="editorial-band editorial-band--text" aria-labelledby="editorial-heading">
      <Reveal className="container editorial-band-inner" variant="fade">
        <p className="section-eyebrow">A legacy made in chocolate</p>
        <h2 id="editorial-heading">Unparalleled craft, shared with love</h2>
        <p>
          Every piece is tempered, filled, and finished by hand. We honour quality,
          craftsmanship, and the finest ingredients — so celebration feels timeless.
        </p>
        <a href="#about" className="btn btn-outline-light">Read our story</a>
      </Reveal>
    </section>
  );
}
