import { BRAND_NAME, BRAND_TAGLINE } from '../data/brand';

export default function BrandMark({ variant = 'header' }) {
  return (
    <span className={`brand-mark brand-mark--${variant}`}>
      <CocoaIcon />
      <span className="brand-mark-text">
        <span className="brand-mark-name">{BRAND_NAME}</span>
        <span className="brand-mark-tagline">{BRAND_TAGLINE}</span>
      </span>
    </span>
  );
}

function CocoaIcon() {
  return (
    <svg className="brand-mark-icon" viewBox="0 0 32 40" fill="none" aria-hidden="true">
      <path
        d="M16 2c-4 6-8 10-8 16a8 8 0 1016 0c0-6-4-10-8-16z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path d="M16 8v24M12 14c2 1 4 1 8 0M12 22c2 1 4 1 8 0" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
    </svg>
  );
}
