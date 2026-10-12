import { useState } from 'react';
import Reveal from './Reveal';

const notes = [
  {
    id: 'cocoa',
    title: 'Cocoa depth',
    hue: '#3d2818',
    text: 'Slow-melt dark chocolate with a clean, lingering finish.',
  },
  {
    id: 'nutty',
    title: 'Roasted nut',
    hue: '#6b4a2e',
    text: 'Toasted almonds and hazelnuts for warmth and crunch.',
  },
  {
    id: 'floral',
    title: 'Floral lift',
    hue: '#8b5a6b',
    text: 'Rose and fruit notes that brighten each bite.',
  },
  {
    id: 'caramel',
    title: 'Golden caramel',
    hue: '#a67c3d',
    text: 'Buttery sweetness balanced with a touch of sea salt.',
  },
];

export default function SensoryJourney() {
  const [active, setActive] = useState(notes[0].id);
  const current = notes.find((n) => n.id === active) ?? notes[0];

  return (
    <section className="sensory" aria-labelledby="sensory-heading">
      <div className="container sensory-inner">
        <Reveal className="sensory-copy">
          <p className="section-eyebrow">Interactive tasting map</p>
          <h2 id="sensory-heading">Follow the flavour arc</h2>
          <p>Hover or tap a note to explore how Nelmora layers texture, aroma, and taste.</p>
          <div className="sensory-active-card" style={{ '--note-color': current.hue }}>
            <h3>{current.title}</h3>
            <p>{current.text}</p>
          </div>
        </Reveal>
        <Reveal className="sensory-viz" delay={120}>
          <div className="sensory-orbit" role="list">
            {notes.map((note, i) => (
              <button
                key={note.id}
                type="button"
                role="listitem"
                className={`sensory-node ${active === note.id ? 'sensory-node--active' : ''}`}
                style={{
                  '--note-color': note.hue,
                  '--i': i,
                }}
                onMouseEnter={() => setActive(note.id)}
                onFocus={() => setActive(note.id)}
                onClick={() => setActive(note.id)}
              >
                <span className="sensory-node-ring" />
                <span className="sensory-node-core" />
                <span className="sensory-node-label">{note.title}</span>
              </button>
            ))}
            <div className="sensory-orbit-center" aria-hidden="true">
              <span>N</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
