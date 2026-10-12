import Reveal from './Reveal';

const items = [
  {
    title: 'Bold',
    text: 'Decisive flavours — from deep dark cocoa to bright fruit notes that linger.',
  },
  {
    title: 'Irresistible',
    text: 'Beautifully crafted pieces with a magnetic pull — one bite invites the next.',
  },
  {
    title: 'Generous',
    text: 'Thoughtful ribbons, perfect textures, and gift-ready boxes for every occasion.',
  },
  {
    title: 'Sensorial',
    text: 'Rich in taste and tone — chocolate felt through every sense, not just tasted.',
  },
];

export default function Features() {
  return (
    <section className="values" aria-labelledby="values-heading">
      <div className="container">
        <Reveal className="values-header">
          <h2 id="values-heading">The art of indulgence</h2>
          <p>Unwrap the care behind every Nelmora creation.</p>
        </Reveal>
        <div className="values-grid">
          {items.map((item, index) => (
            <Reveal key={item.title} as="article" className="value-card" delay={index * 80}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
