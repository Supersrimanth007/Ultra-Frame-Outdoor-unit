import { BRAND } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer" data-testid="site-footer">
      <div>
        <div className="brand-lg">
          {BRAND.name}<em>.</em>{BRAND.suffix}
        </div>
        <p style={{ maxWidth: 320 }}>
          A cinematic gear rental house — lights, cranes and screens for
          feature films, commercials and live spectacle. Bookings handled
          directly, human-to-human.
        </p>
      </div>

      <div>
        <h5>Direct Booking</h5>
        <a href={BRAND.phoneHref} data-testid="footer-phone">☎ {BRAND.phone}</a>
        <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp">◉ WhatsApp · {BRAND.whatsapp}</a>
        <a href={BRAND.emailHref} data-testid="footer-email">✉ {BRAND.email}</a>
        <p style={{ marginTop: 12, color: "var(--ash)" }}>
          <em style={{ color: "var(--white)", fontStyle: "normal" }}>Note —</em>{" "}
          we don't run carts or online checkouts. Every rental is
          confirmed by a human on the phone.
        </p>
      </div>

      <div>
        <h5>Warehouse & Hours</h5>
        <p>{BRAND.address}</p>
        <p>{BRAND.hours}</p>
        <h5 style={{ marginTop: 24 }}>Coverage</h5>
        <p>Mumbai · Delhi · Hyderabad · Chennai · Bengaluru · Goa · Kolkata</p>
      </div>

      <div className="fine">
        <span>© {new Date().getFullYear()} {BRAND.name}.{BRAND.suffix}. All frames reserved.</span>
        <span>Bookings via phone · No online payments</span>
      </div>
    </footer>
  );
}