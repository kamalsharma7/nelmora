export const products = [
  {
    id: 'butterscotch',
    name: 'Butterscotch Chocolates',
    description:
      'A rich and creamy Nelmora butterscotch chocolate, featuring crunchy bits and sweet butterscotch pieces.',
    prices: { 6: 359, 9: 499 },
    tag: 'Bestseller',
    image: '/images/products/butterscotch.jpg',
  },
  {
    id: 'caramel',
    name: 'Caramel Sea Salt Chocolates',
    description:
      'A rich and creamy Nelmora caramel chocolate, featuring crunchy bits, gooey caramel, and a touch of sea salt.',
    prices: { 6: 349, 9: 489 },
    tag: 'New',
    image: '/images/products/caramel.jpg',
  },
  {
    id: 'white-oreo',
    name: 'White Oreo Chocolates',
    description:
      'A rich and creamy Nelmora white Oreo chocolate, featuring decadent white chocolate packed with crunchy cookie pieces.',
    prices: { 6: 369, 9: 499 },
    tag: null,
    image: '/images/products/white-oreo.jpg',
  },
  {
    id: 'dark-oreo',
    name: 'Dark Oreo Chocolates',
    description:
      'A rich, crunchy, and indulgent Nelmora dark Oreo chocolate, featuring decadent dark chocolate packed with crushed cookies.',
    prices: { 6: 359, 9: 489 },
    tag: null,
    image: '/images/products/dark-oreo.jpg',
  },
  {
    id: 'rice-balls',
    name: 'Rice Balls Chocolates',
    description:
      'A rich and crispy Nelmora rice balls chocolate, featuring decadent chocolate packed with crunchy puffed rice.',
    prices: { 6: 349, 9: 499 },
    tag: null,
    image: '/images/products/rice-balls.jpg',
  },
  {
    id: 'rainbow',
    name: 'Rainbow Cake Chocolates',
    description:
      'A rich, creamy, and indulgent Nelmora rainbow chocolate, featuring decadent chocolate packed with crumbled cake pieces and colorful sprinkles.',
    prices: { 6: 369, 9: 489 },
    tag: 'Festive',
    image: '/images/products/rainbow.jpg',
  },
  {
    id: 'dry-fruit',
    name: 'Dry Fruit Chocolates',
    description:
      'A rich, nutty, and indulgent Nelmora dry fruit chocolate, packed with an assortment of premium nuts and dried fruits.',
    prices: { 6: 399, 9: 549 },
    tag: 'Premium',
    image: '/images/products/dry-fruit.jpg',
  },
];

export const HERO_IMAGE = '/images/hero-main.png';
export const SHOWCASE_IMAGE = '/images/showcase.jpg';

export const WHATSAPP_NUMBER = '917015574924';

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
