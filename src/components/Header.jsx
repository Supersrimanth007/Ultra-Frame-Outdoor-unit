import { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { BRAND } from "../data/site";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        {/* BRAND: Left side on both mobile and laptop */}
        <Link to="/" className="brand">
          <span className="dot" />
          <span>
            {BRAND.name}
            <em style={{ color: "var(--crimson)", fontStyle: "italic" }}> </em>
            <span className="brand-suffix">{BRAND.suffix}</span>
          </span>
          <small className="desktop-only">Est 2015</small> 
        </Link>

        {/* DESKTOP NAV: Hidden on mobile */}
        <nav className="desktop-only">
          <Link to="/">Home</Link>
          <Link to="/catalog">Product</Link>
          <Link to="/#manifesto">About us</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        {/* CTAs & HAMBURGER MENU: Pinned to the right */}
        <div className="cta-group" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="phone desktop-only">
            <span style={{ color: "var(--ash)", marginRight: 6 }}>Direct</span>
            {BRAND.phone}
          </span>
          
          {/* WhatsApp */}
          <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" className="icon-btn wa desktop-only">
            <MessageCircle size={15} />
            WhatsApp
          </a>
          <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" className="icon-btn wa mobile-only" style={{ padding: "8px 10px" }}>
            <MessageCircle size={16} />
          </a>

          {/* Call to Rent */}
          <a href={BRAND.phoneHref} className="icon-btn crimson">
            <Phone size={15} />
            <span className="desktop-only">Call to Rent</span>
            <span className="mobile-only">Call</span>
          </a>

          {/* MOBILE ONLY: 3-Dash Hamburger Menu (Right Side) */}
          <button 
            className="mobile-only mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} color="var(--white)" />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY: Full screen layout */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-header">
               <span className="brand-text">{BRAND.name}</span>
               <button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>
                 <X size={24} color="var(--white)" />
               </button>
            </div>
            
            <nav className="mobile-nav-links">
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/">Home</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/catalog">Product</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/#manifesto">About us</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/#contact">Contact</Link>
            </nav>

            <div className="mobile-menu-footer">
               <p style={{ color: "var(--ash)", fontSize: "14px", margin: "0 0 8px 0" }}>Direct Booking</p>
               <h3 style={{ margin: 0, fontFamily: "var(--font-display)" }}>{BRAND.phone}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}