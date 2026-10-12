const items = [
  'Hand-tempered',
  'Small-batch',
  'Gift-ready packaging',
  'Festive collections',
  'WhatsApp ordering',
  'The Art of Chocolate',
];

export default function LuxuryMarquee() {
  const track = items.concat(items);

  return (
    <div className="luxury-marquee" aria-hidden="true">
      <div className="luxury-marquee-track">
        {track.map((text, i) => (
          <span key={`${text}-${i}`} className="luxury-marquee-item">
            <span className="luxury-marquee-dot" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
