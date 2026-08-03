import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "../data/site";

const MotionLink = motion(Link);

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.1 },
  }),
};

export default function Catalog() {
  return (
    <section className="catalog" id="catalog" data-testid="catalog-section">
      <div className="catalog-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>§ Product Categories</div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Access the <em>Inventory</em> <br  /> Filter your loadout.
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          Rates shown are per-day, ex-warehouse. Multi-day, weekly and
          bundled bookings unlock deeper pricing — a single call locks it in.
        </motion.p>
      </div>

      <div className="product-grid category-grid" data-testid="category-grid">
        {CATEGORIES.map((c, i) => (
          <MotionLink
            key={c.slug}
            to={`/catalog/${c.slug}`}
            className="product-card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariants}
            data-testid={`category-card-${c.slug}`}
          >
            <div className="thumb">
              <img src={c.img} alt={c.title} loading="lazy" />
              <span className="index">0{i + 1} / {String(CATEGORIES.length).padStart(2, "0")}</span>
            </div>
            <div className="body">
              <h4>{c.title}.</h4>
              <p className="desc">{c.desc}</p>
              <span className="arrow-out" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </MotionLink>
        ))}
      </div>
    </section>
  );
}