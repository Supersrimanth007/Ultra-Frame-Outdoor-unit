import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { BRAND } from "../../data/site";
import "./DiscountPopup.css";

export function DiscountPopup({
  eyebrow = "Limited offer",
  headline = (
    <>
      25<span className="accent">%</span> off
      <br />
      all equipment
    </>
  ),
  description = "For film students, indie and short filmmakers — verify your student ID or project to claim.",
  ctaLabel = BRAND.phone,
  onCtaClick,
  delay = 1.6,
}) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {visible && (
        <div
          className="discount-popup-wrapper"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <motion.div
            className="discount-popup"
            style={{
              position: "relative",
              top: "auto",
              bottom: "auto",
              left: "auto",
              right: "auto",
              margin: 0,
              pointerEvents: "auto",
            }}
            drag
            dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <button
              className="discount-popup-close"
              onClick={() => setVisible(false)}
              aria-label="Dismiss offer"
            >
              <X size={13} />
            </button>

            <div className="discount-popup-eyebrow">
              <span className="eyebrow-dot" />
              {eyebrow}
            </div>

            <div className="discount-popup-headline">{headline}</div>

            <p className="discount-popup-desc">{description}</p>

            <button className="discount-popup-cta" onClick={onCtaClick}>
              {ctaLabel}
              <ArrowUpRight size={14} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}