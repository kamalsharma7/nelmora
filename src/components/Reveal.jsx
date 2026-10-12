import { useInView } from '../hooks/useInView';

export default function Reveal({
  children,
  className = '',
  as = 'div',
  delay = 0,
  variant = 'up',
  ...rest
}) {
  const [ref, inView] = useInView({ once: true, threshold: 0.12 });
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? 'reveal--visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
