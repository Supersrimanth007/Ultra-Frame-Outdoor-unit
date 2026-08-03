import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "../data/site";
import { GlitchBlink } from "../components/ui/GlitchBlink";
import { DiscountPopup } from "../components/ui/DiscountPopup"; 

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.15]);

  return (
    <section className="hero" ref={ref} data-testid="hero-section">
      <motion.div className="hero-bg" style={{ y, scale, opacity }} />

      <div className="hero-meta">
        <span className="rec">
          <span className="rec-dot" />
          Rec · Scene 01 · Take 24
        </span>
        <span style={{ letterSpacing: "0.3em" }}>Chennai · 18° 10′ 25″ N</span>
        <span>Aperture ƒ/1.8 · 24fps</span>
      </div>

      <DiscountPopup
        onCtaClick={() => {
          window.location.href = "#contact";
        }}
      />

      <h1 className="hero-title" data-testid="hero-title">
        <span className="line">
          <GlitchBlink text="Equipping" color="var(--crimson)" />
        </span>
        <span className="line">
          <em>unforgettable</em>
        </span>
        <span className="line">
          mo<span className="accent">m</span>ents.
        </span>
      </h1>

      <div className="hero-lower">
        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 1.15 }}
        >
          A rental house built for <strong>feature films, commercials and
          live spectacle</strong>. Lights, cranes and LED walls dispatched
          across India — booked in a single phone call.
        </motion.p>

        <motion.a
          href={BRAND.phoneHref}
          className="hero-cta"
          data-testid="hero-call-btn"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 1.25 }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
            e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
          }}
        >
          Call to Rent · {BRAND.phone}
          <span className="arrow"><ArrowUpRight size={16} /></span>
        </motion.a>

        <motion.div
          className="hero-stat"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 1.35 }}
        >
          <div><b>420+</b>Productions</div>
          <div><b>13yrs</b>On Set</div>
          <div><b>24/7</b>Dispatch</div>
        </motion.div>
      </div>
    </section>
  );
}