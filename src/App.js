import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Manifesto from './components/Manifesto';
import Catalog from './components/Catalog';
import Bulk from './components/Bulk';
import CallBand from './components/CallBand';
import Footer from './components/Footer';
import CatalogPage from './pages/CatalogPage';
import ScrollToHash from './components/ScrollToHash';

// Breakpoint below which we treat the device as mobile/tablet.
// Adjust if your design system uses a different tablet cutoff.
const MOBILE_TABLET_BREAKPOINT = 1024;

function MobileEntryRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only redirect on the very first load of the homepage itself —
    // never hijack someone who's already navigated somewhere on purpose.
    if (location.pathname !== '/') return;

    const isMobileOrTablet = window.innerWidth < MOBILE_TABLET_BREAKPOINT;

    if (isMobileOrTablet) {
      navigate('/catalog', { replace: true });
    }
    // eslint-disable-next-line
  }, []); // run once on mount only — resizing the window later shouldn't yank the user around

  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToHash />
      <MobileEntryRedirect />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Marquee />
              <Bulk />
              <Catalog />
              <Manifesto/>
              <CallBand />
            </>
          }
        />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:category" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;