import { BRAND_TAGLINE } from '../data/brand';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="about">
      <Reveal className="container about-inner about-inner--centered" variant="fade">
        <p className="section-eyebrow">{BRAND_TAGLINE}</p>
        <h2>Our story</h2>
        <p>
          Nelmora started in a home kitchen with a simple idea: chocolate should taste like
          something real — not too sweet, never waxy, always made with care.
        </p>
        <p>
          We temper each batch by hand, experiment with seasonal flavours, and pack every order
          so it arrives looking as good as it tastes. When you order via WhatsApp, you&apos;re
          talking directly to us — no call centres, just real people who love what they do.
        </p>
        <a href="#shop" className="btn btn-outline btn-shimmer-dark">Shop chocolate</a>
      </Reveal>
    </section>
  );
}
