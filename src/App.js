import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <ScrollToHash />
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