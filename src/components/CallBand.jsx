import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { BRAND } from "../data/site";

export default function CallBand() {
  return (
    <section className="call-band" id="contact" data-testid="callband-section">
      <motion.div
        className="eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        § Direct Booking · No Cart · No Forms
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <em>Every booking</em> <br />
        starts with a <span className="accent">phone call.</span>
      </motion.h2>

      <motion.div
        className="call-actions"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <a href={BRAND.phoneHref} className="icon-btn crimson" style={{ padding: "18px 28px", fontSize: 14 }} data-testid="cta-call-btn">
          <Phone size={16} /> Call · {BRAND.phone}
        </a>
        <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" className="icon-btn wa" style={{ padding: "18px 28px", fontSize: 14 }} data-testid="cta-whatsapp-btn">
          <MessageCircle size={16} /> WhatsApp Us
        </a>
        <a href={BRAND.emailHref} className="icon-btn" style={{ padding: "18px 28px", fontSize: 14 }} data-testid="cta-email-btn">
          <Mail size={16} /> {BRAND.email}
        </a>
      </motion.div>
    </section>
  );
}