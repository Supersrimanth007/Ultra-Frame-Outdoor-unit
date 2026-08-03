import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { BRAND } from "../../data/site";

export function DiscountPopup({
  eyebrow = "Limited offer",
  headline = "25% off all equipment",
  description = "For film students, indie and short filmmakers — verify your student ID or project to claim.",
  ctaLabel = BRAND.phone,
  onCtaClick,
  delay = 1.6,
}) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
        exit={{ 
          opacity: 0, scale: 0.9,transition: { delay: 0, duration: 0.3, ease: "easeInOut" } 
        }}
        style={{
          position: "absolute",   
                                   
          top: "50%",            
          left: "50%",           
          transform: "translate(-50%, -50%)", 
          width: "400px",        
          zIndex: 5,              
          padding: "32px",      
          borderRadius: "24px",
          background: "rgba(15, 23, 34, 0.8)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 30px 60px -12px rgba(0,0,0,0.8)",
        }}
      >
          <button
            onClick={() => setVisible(false)}
            aria-label="Dismiss offer"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "24px",
              height: "24px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              border: "none",
              color: "rgba(255,255,255,0.7)",
              cursor: "pointer",
            }}
          >
            <X size={13} />
          </button>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--crimson, #C8102E)",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--crimson, #C8102E)",
              }}
            />
            {eyebrow}
          </div>

          <div
        style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontStyle: "italic",
            fontSize: "48px",        // Increased from 30px
            lineHeight: 1.0,
            color: "var(--white, #ffffff)",
            marginBottom: "16px",
            maxWidth: "100%",        // Now allows full width
        }}
        >
        25<span style={{ color: "var(--crimson, #C8102E)" }}>%</span> off
        <br />
        all equipment
        </div>

          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.55,
              color: "var(--ash, rgba(255,255,255,0.65))",
              marginBottom: "16px",
            }}
          >
            {description}
          </p>

          <button
            onClick={onCtaClick}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.35)",
              color: "var(--white, #ffffff)",
              fontSize: "12.5px",
              fontWeight: 600,
              letterSpacing: "0.01em",
              padding: "10px 16px",
              borderRadius: "999px",
              cursor: "pointer",
              transition: "background 200ms ease, border-color 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
            }}
          >
            {ctaLabel}
            <ArrowUpRight size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}