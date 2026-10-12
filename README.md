# Nelmora — Handmade Chocolates

React storefront for a handmade chocolate business. Customers add items to a cart and send the order to WhatsApp.

## Run locally

```bash
npm install
npm run dev:backend   # API on http://localhost:3001
npm run dev:frontend  # Store on http://localhost:5174
```

Or `npm run dev` for the frontend only (port 5174 by default).

## Build for production

```bash
npm run build
npm run preview
```

## Customize

- **Products & prices:** edit `src/data/products.js`
- **WhatsApp number:** `WHATSAPP_NUMBER` in `src/data/products.js` (country code + number, no `+`)
- **Branding & copy:** components in `src/components/` and styles in `src/App.css`
