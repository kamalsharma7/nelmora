import { WHATSAPP_NUMBER } from '../data/products';

function formatLine(item, linePrice) {
  const sizeLabel = item.boxSize ? `${item.boxSize} pcs` : 'size not set';
  return `${item.name} (${sizeLabel}) × ${item.qty} — ₹${(linePrice * item.qty).toLocaleString('en-IN')}`;
}

export function buildOrderMessage(items, total, deliveryAddress, customerNote = '', linePrice) {
  const lines = [
    'Hello Nelmora! I would like to place an order:',
    '',
    ...items.map((item, index) =>
      `${index + 1}. ${formatLine(item, linePrice(item))}`
    ),
    '',
    `*Total: ₹${total.toLocaleString('en-IN')}*`,
    '',
    '*Delivery address:*',
    deliveryAddress.trim(),
  ];

  if (customerNote.trim()) {
    lines.push('', `Note: ${customerNote.trim()}`);
  }

  return lines.join('\n');
}

export function openWhatsAppOrder(items, total, deliveryAddress, customerNote = '', linePrice) {
  const address = deliveryAddress?.trim() ?? '';
  if (!address) return;

  const text = buildOrderMessage(items, total, address, customerNote, linePrice);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
