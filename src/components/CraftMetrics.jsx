import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import Reveal from './Reveal';

const metrics = [
  { value: 100, suffix: '%', label: 'Handcrafted', detail: 'Every batch finished by hand' },
  { value: 6, suffix: '', label: 'Signature flavours', detail: 'Curated for gifting' },
  { value: 48, suffix: 'h', label: 'Fresh dispatch', detail: 'Made to order when possible' },
  { value: 5, suffix: '★', label: 'Gift experience', detail: 'Ribbon-ready presentation' },
];

function Metric({ metric, index }) {
  const [ref, inView] = useInView({ once: true, threshold: 0.4 });
  const count = useCountUp(metric.value, inView, 1200 + index * 120);

  return (
    <article ref={ref} className="craft-metric">
      <p className="craft-metric-value">
        <span className="craft-metric-number">{count}</span>
        <span className="craft-metric-suffix">{metric.suffix}</span>
      </p>
      <h3>{metric.label}</h3>
      <p>{metric.detail}</p>
    </article>
  );
}

export default function CraftMetrics() {
  return (
    <section className="craft-metrics" aria-labelledby="craft-metrics-heading">
      <div className="container">
        <Reveal className="craft-metrics-header">
          <p className="section-eyebrow">Craft in numbers</p>
          <h2 id="craft-metrics-heading">Precision you can taste</h2>
        </Reveal>
        <div className="craft-metrics-grid">
          {metrics.map((metric, i) => (
            <Metric key={metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
