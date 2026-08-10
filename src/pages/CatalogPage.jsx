import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, X,horizontal } from "lucide-react";
import { PRODUCTS, CATEGORIES, BRAND } from "../data/site";
import { GlitchBlink } from "../components/ui/GlitchBlink";


const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;
const MAX_PRICE = Math.max(...PRODUCTS.map((p) => p.price));

export default function CatalogPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const activeCategory = category || "all";

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [sortBy, setSortBy] = useState("popular");

  const selectCategory = (slug) => {
    navigate(slug === "all" ? "/catalog" : `/catalog/${slug}`);
  };

  const clearFilters = () => {
    setSearch("");
    setMaxPrice(MAX_PRICE);
    setSortBy("popular");
    navigate("/catalog");
  };

  const items = useMemo(() => {
    let list = PRODUCTS.filter((p) => activeCategory === "all" || p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    }
    list = list.filter((p) => p.price <= maxPrice);
    if (sortBy === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, search, maxPrice, sortBy]);

  const activeMeta = CATEGORIES.find((c) => c.slug === activeCategory);

  return (
    <section className="catalog catalog-page" data-testid="catalog-page">
      <div className="catalog-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>§ Full Inventory</div>
          <h2> <em>{activeMeta ? <GlitchBlink text={`${activeMeta.title}.`} color="var(--black)" /> :  <GlitchBlink text="All Gear." color="var(--black)" />}</em></h2>  </div>
      </div>

      <div className="catalog-layout">
        <aside className="catalog-sidebar" data-testid="catalog-sidebar">
          <div className="search-bar" data-testid="catalog-search">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search gear…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              data-testid="catalog-search-input"
            />
            {search && (
              <button className="clear-search" onClick={() => setSearch("")} aria-label="Clear search">
                <X size={14} />
              </button>
            )}
          </div>

          <h5>Category</h5>
          <div className="filter-list">
            <button
              className={activeCategory === "all" ? "filter-pill active" : "filter-pill"}
              onClick={() => selectCategory("all")}
              data-testid="filter-all"
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.slug}
                className={activeCategory === c.slug ? "filter-pill active" : "filter-pill"}
                onClick={() => selectCategory(c.slug)}
                data-testid={`filter-${c.slug}`}
              >
                {c.title}
              </button>
            ))}
          </div>

          <h5 style={{ marginTop: 24 }}>Max Price: {fmt(maxPrice)}</h5>
          <input
            type="range"
            min={0}
            max={MAX_PRICE}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="price-slider"
            data-testid="price-slider"
          />

          <h5 style={{ marginTop: 24 }}>Sort By</h5>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select" data-testid="sort-select">
            <option value="popular">Popular</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>

          <button className="clear-filters-btn" onClick={clearFilters} data-testid="clear-filters">
            Clear Filters
          </button>
        </aside>

        <div className="catalog-results">
          {items.length === 0 ? (
            <p style={{ color: "var(--ash)" }}>No gear matches those filters — try widening your search or price range.</p>
          ) : (
            <div className="product-grid compact" data-testid="catalog-product-grid">
              {items.map((p, i) => (
                <motion.a
                  key={p.id}
                  href={BRAND.phoneHref}
                  className="product-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                  data-testid={`item-card-${p.id}`}
                >
                  <div className="thumb">
                    <img src={p.img} alt={p.title} loading="lazy" />
                    <span className="tag">{p.tag}</span>
                  </div>
                  <div className="body">
                    <h4>{p.title}.</h4>
                    
                    <div className="row">
                      <div className="price">
                        from <b>{fmt(p.price)} <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ash-strong)", fontWeight: 500 }}>/ {p.unit}</span></b>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}