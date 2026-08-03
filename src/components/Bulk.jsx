import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { BRAND } from "../data/site";

export default function Bulk() {
  return (
    <motion.section
      className="bulk"
      id="bulk"
      data-testid="bulk-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="badge">
        15<sup>%</sup>
      </div>
      <div className="txt">
        <div className="eyebrow" style={{ marginBottom: 10 }}>§ Bulk Deal · Producer Rate</div>
        <h3>Flat 15% off on orders above ₹1,00,000 <br/>or 5+ days on rental.</h3>
        <p>
          Bundled discount stacks automatically on your invoice. Long-form
          shoots, multi-city productions and post-schedule extensions are
          negotiable on the phone — no forms, no waiting.
        </p>
      </div>
      <a href={BRAND.phoneHref} className="cta" data-testid="bulk-cta-btn">
        Lock the Rate
        <ArrowUpRight size={16} />
      </a>
    </motion.section>
  );
}