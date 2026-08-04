import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BRAND } from "../data/site";

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      data-testid="site-header"
    >
      <Link to="/" className="brand" data-testid="brand-logo">
        <span className="dot" />
        <span>
          {BRAND.name}
          <em style={{ color: "var(--crimson)", fontStyle: "italic" }}> </em>{BRAND.suffix}
        </span>
        <small>Est · 2015</small>
      </Link>

      <nav data-testid="site-nav">
        <Link to="/" data-testid="nav-home">Home</Link>
        <Link to="/catalog" data-testid="nav-catalog">Product</Link>
        <Link to="/#manifesto" data-testid="nav-manifesto">About us</Link>
        <Link to="/#contact" data-testid="nav-contact">Contact</Link>
      </nav>

      <div className="cta-group">
        <span className="phone desktop-only" data-testid="header-phone-text">
          <span style={{ color: "var(--ash)", marginRight: 6 }}>Direct →</span>
          {BRAND.phone}
        </span>
        <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" className="icon-btn wa desktop-only" data-testid="header-whatsapp-btn">
          <MessageCircle size={15} />
          WhatsApp
        </a>
        <a href={BRAND.phoneHref} className="icon-btn crimson" data-testid="header-call-btn">
          <Phone size={15} />
          <span className="desktop-only">Call to Rent</span>
          <span className="mobile-only">Call</span>
        </a>
      </div>
    </motion.header>
  );
}