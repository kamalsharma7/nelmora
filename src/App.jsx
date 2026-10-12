import { useCallback, useEffect, useState } from 'react';
import { CartProvider } from './context/CartContext';
import AmbientLayer from './components/AmbientLayer';
import ScrollProgress from './components/ScrollProgress';
import CursorAura from './components/CursorAura';
import PromoBar from './components/PromoBar';
import Header from './components/Header';
import Hero from './components/Hero';
import LuxuryMarquee from './components/LuxuryMarquee';
import ProductGrid from './components/ProductGrid';
import CraftMetrics from './components/CraftMetrics';
import ShowcaseStrip from './components/ShowcaseStrip';
import SensoryJourney from './components/SensoryJourney';
import Collections from './components/Collections';
import EditorialBand from './components/EditorialBand';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import './App.css';
import './luxury.css';

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast(message);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="app">
      <AmbientLayer />
      <ScrollProgress />
      <CursorAura />
      <PromoBar />
      <Header onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <LuxuryMarquee />
        <ProductGrid onAdded={(name) => showToast(`Added ${name} to cart`)} />
        <CraftMetrics />
        <ShowcaseStrip />
        <SensoryJourney />
        <Collections />
        <EditorialBand />
        <Features />
        <About />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      {toast && <div className="toast toast--luxury" role="status">{toast}</div>}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
