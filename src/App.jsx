import { useState } from "react";

// ===================== MOCK DATA =====================
const MOCK_ITEMS = [
  {
    id: 1,
    title: "Buku Kimia Organik Fessenden",
    price: 65000,
    type: "jual",
    faculty: "FMIPA",
    subject: "Kimia Organik",
    condition: 85,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
    category: "Buku",
    seller: {
      name: "Rizky Aditya",
      major: "Kimia",
      year: "2021",
      avatar: "https://i.pravatar.cc/150?img=11",
      verified: true,
    },
  },
  {
    id: 2,
    title: "Jas Lab Ukuran M (Unisex)",
    price: 45000,
    type: "sewa",
    faculty: "FMIPA",
    subject: "Praktikum",
    condition: 90,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80",
    category: "Baju",
    seller: {
      name: "Sari Dewi",
      major: "Biologi",
      year: "2020",
      avatar: "https://i.pravatar.cc/150?img=5",
      verified: true,
    },
  },
  {
    id: 3,
    title: "Kalkulator Casio FX-991EX",
    price: 120000,
    type: "jual",
    faculty: "FT",
    subject: "Matematika",
    condition: 95,
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
    category: "Elektronik",
    seller: {
      name: "Budi Santoso",
      major: "Teknik Mesin",
      year: "2022",
      avatar: "https://i.pravatar.cc/150?img=12",
      verified: false,
    },
  },
  {
    id: 4,
    title: "Set Alat Gambar Teknik",
    price: 80000,
    type: "jual",
    faculty: "FT",
    subject: "Gambar Teknik",
    condition: 80,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    category: "Alat",
    seller: {
      name: "Putri Halimah",
      major: "Teknik Sipil",
      year: "2021",
      avatar: "https://i.pravatar.cc/150?img=9",
      verified: true,
    },
  },
  {
    id: 5,
    title: "Buku Algoritma & Pemrograman",
    price: 55000,
    type: "jual",
    faculty: "FILKOM",
    subject: "Algoritma",
    condition: 75,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
    category: "Buku",
    seller: {
      name: "Dimas Prasetyo",
      major: "Informatika",
      year: "2022",
      avatar: "https://i.pravatar.cc/150?img=15",
      verified: true,
    },
  },
  {
    id: 6,
    title: "Stetoskop 3M Littmann Classic",
    price: 35000,
    type: "sewa",
    faculty: "FK",
    subject: "Praktikum Klinik",
    condition: 92,
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80",
    category: "Alat",
    seller: {
      name: "Anisa Rahma",
      major: "Kedokteran",
      year: "2020",
      avatar: "https://i.pravatar.cc/150?img=44",
      verified: true,
    },
  },
];

const CATEGORIES = [
  { name: "Buku", icon: "📚", color: "#FFF3E0" },
  { name: "Alat", icon: "🔬", color: "#E8F5E9" },
  { name: "Baju", icon: "🥼", color: "#E3F2FD" },
  { name: "Elektronik", icon: "💻", color: "#FCE4EC" },
];

const FACULTIES = ["Semua", "FMIPA", "FT", "FK", "FILKOM", "FEB", "FH"];

// ===================== STYLE CONSTANTS =====================
const theme = {
  primary: "#0B6E6E",
  primaryLight: "#159494",
  primaryBg: "#E6F7F7",
  accent: "#FF6B35",
  accentDark: "#E4572E",
  text: "#1A1D1F",
  textSub: "#5E6A6E",
  bg: "#F7F6F2",
  card: "#FFFFFF",
  border: "#E6E2D8",
};

const style = {
  app: {
    fontFamily: "'Sora', 'Segoe UI', sans-serif",
    background: "transparent",
    minHeight: "100vh",
    color: theme.text,
  },
  // Header
  header: {
    background: "rgba(255,255,255,0.92)",
    borderBottom: `1.5px solid ${theme.border}`,
    position: "sticky",
    top: 0,
    zIndex: 100,
    padding: "0 1rem",
    backdropFilter: "blur(10px)",
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    height: 64,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    textDecoration: "none",
  },
  logoText: {
    fontSize: "1.2rem",
    fontWeight: 800,
    color: theme.primary,
    letterSpacing: "-0.03em",
  },
  logoSub: {
    fontSize: "0.65rem",
    color: theme.accent,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  searchWrap: { flex: 1, display: "flex", gap: "0.5rem" },
  searchInput: {
    flex: 1,
    padding: "0.6rem 1rem",
    borderRadius: 12,
    border: `1.5px solid ${theme.border}`,
    fontSize: "0.9rem",
    outline: "none",
    background: "#FFFEFB",
    boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
  },
  searchSelect: {
    padding: "0.6rem 0.75rem",
    borderRadius: 12,
    border: `1.5px solid ${theme.border}`,
    fontSize: "0.85rem",
    background: "#FFFEFB",
    cursor: "pointer",
  },
  searchBtn: {
    padding: "0.6rem 1.25rem",
    background: theme.primary,
    color: "#fff",
    border: "none",
    borderRadius: 12,
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  // Top Nav
  topNav: {
    position: "sticky",
    top: 64,
    zIndex: 90,
    background: "rgba(255,255,255,0.92)",
    borderBottom: `1.5px solid ${theme.border}`,
    backdropFilter: "blur(8px)",
  },
  topNavInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0.6rem 1rem",
    display: "flex",
    gap: "0.6rem",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  topNavBtn: (active) => ({
    flex: 1,
    minWidth: 120,
    border: active ? `2px solid ${theme.primary}` : `1.5px solid ${theme.border}`,
    background: active ? theme.primaryBg : "#fff",
    color: active ? theme.primary : theme.textSub,
    borderRadius: 14,
    padding: "0.55rem 0.75rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.45rem",
    fontWeight: active ? 800 : 600,
    fontSize: "0.82rem",
  }),
  // Hero
  hero: {
    background:
      "radial-gradient(1200px 400px at 50% -10%, rgba(255,255,255,0.35), transparent 70%), linear-gradient(135deg, #0B6E6E 0%, #159494 100%)",
    padding: "3.25rem 1rem 2.25rem",
    textAlign: "center",
  },
  heroTitle: {
    color: "#fff",
    fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
    fontWeight: 800,
    margin: 0,
    letterSpacing: "-0.04em",
    lineHeight: 1.15,
  },
  heroSub: {
    color: "rgba(255,255,255,0.82)",
    marginTop: "0.6rem",
    fontSize: "1rem",
  },
  heroBadge: {
    display: "inline-block",
    background: theme.accent,
    color: "#fff",
    fontSize: "0.75rem",
    fontWeight: 700,
    padding: "0.25rem 0.75rem",
    borderRadius: 20,
    marginBottom: "0.75rem",
    letterSpacing: "0.04em",
  },
  // Categories
  catWrap: { maxWidth: 1100, margin: "1.75rem auto", padding: "0 1rem" },
  catGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "0.75rem",
  },
  catCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.4rem",
    padding: "1rem 0.5rem",
    borderRadius: 14,
    cursor: "pointer",
    border: `1.5px solid ${theme.border}`,
    transition: "transform 0.15s, box-shadow 0.15s",
    background: theme.card,
  },
  catIcon: { fontSize: "1.75rem" },
  catName: { fontSize: "0.78rem", fontWeight: 600, color: theme.text },
  // Items
  itemsWrap: { maxWidth: 1100, margin: "0 auto", padding: "0 1rem 3rem" },
  sectionTitle: {
    fontSize: "1.15rem",
    fontWeight: 800,
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  filterRow: {
    display: "flex",
    gap: "0.5rem",
    marginBottom: "1.25rem",
    flexWrap: "wrap",
  },
  filterChip: (active) => ({
    padding: "0.35rem 0.9rem",
    borderRadius: 20,
    border: `1.5px solid ${active ? theme.primary : theme.border}`,
    background: active ? theme.primaryBg : "#fff",
    color: active ? theme.primary : theme.textSub,
    fontSize: "0.82rem",
    fontWeight: active ? 700 : 500,
    cursor: "pointer",
  }),
  itemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
  },
  itemCard: {
    background: theme.card,
    borderRadius: 16,
    overflow: "hidden",
    border: `1px solid ${theme.border}`,
    cursor: "pointer",
    transition: "transform 0.15s, box-shadow 0.15s",
  },
  itemImg: { width: "100%", height: 170, objectFit: "cover" },
  itemBody: { padding: "0.85rem" },
  itemTitle: {
    fontWeight: 700,
    fontSize: "0.9rem",
    marginBottom: "0.3rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  itemPrice: { color: theme.primary, fontWeight: 800, fontSize: "1rem" },
  itemMeta: {
    fontSize: "0.75rem",
    color: theme.textSub,
    marginTop: "0.3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  typeBadge: (type) => ({
    display: "inline-block",
    background: type === "sewa" ? "#FFF3E0" : "#D8F3DC",
    color: type === "sewa" ? "#E76F51" : "#2D6A4F",
    fontSize: "0.68rem",
    fontWeight: 700,
    padding: "0.15rem 0.5rem",
    borderRadius: 6,
    marginBottom: "0.3rem",
  }),
  condBar: {
    height: 4,
    borderRadius: 4,
    background: "#E5E7EB",
    marginTop: "0.5rem",
    overflow: "hidden",
  },
  condFill: (pct) => ({
    height: "100%",
    width: `${pct}%`,
    background:
      pct > 80
        ? theme.primaryLight
        : pct > 60
          ? theme.accent
          : theme.accentDark,
    borderRadius: 4,
  }),
  // Product Detail
  detailWrap: { maxWidth: 900, margin: "0 auto", padding: "1.5rem 1rem 3rem" },
  backBtn: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "none",
    border: "none",
    color: theme.primary,
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "0.9rem",
    marginBottom: "1.25rem",
  },
  detailGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" },
  detailImg: {
    width: "100%",
    borderRadius: 18,
    objectFit: "cover",
    aspectRatio: "4/3",
  },
  detailImgWrap: { position: "relative" },
  detailBadgeFl: {
    position: "absolute",
    top: 12,
    left: 12,
    background: theme.primary,
    color: "#fff",
    fontSize: "0.72rem",
    fontWeight: 700,
    padding: "0.2rem 0.65rem",
    borderRadius: 8,
  },
  detailRight: { display: "flex", flexDirection: "column", gap: "0.9rem" },
  detailType: (type) => ({
    display: "inline-block",
    background: type === "sewa" ? "#FFF3E0" : "#D8F3DC",
    color: type === "sewa" ? "#E76F51" : "#2D6A4F",
    fontSize: "0.78rem",
    fontWeight: 700,
    padding: "0.25rem 0.75rem",
    borderRadius: 8,
  }),
  detailTitle: {
    fontSize: "1.5rem",
    fontWeight: 800,
    margin: 0,
    letterSpacing: "-0.02em",
  },
  detailPrice: { fontSize: "1.75rem", fontWeight: 900, color: theme.primary },
  detailPriceNote: {
    fontSize: "0.8rem",
    color: theme.textSub,
    fontWeight: 500,
  },
  divider: {
    border: "none",
    borderTop: `1px solid ${theme.border}`,
    margin: "0.25rem 0",
  },
  condLabel: {
    fontSize: "0.85rem",
    fontWeight: 700,
    color: theme.text,
    marginBottom: "0.35rem",
  },
  condBarLg: {
    height: 8,
    borderRadius: 8,
    background: "#E5E7EB",
    overflow: "hidden",
  },
  condFillLg: (pct) => ({
    height: "100%",
    width: `${pct}%`,
    background: pct > 80 ? theme.primaryLight : theme.accent,
    borderRadius: 8,
  }),
  sellerCard: {
    background: theme.primaryBg,
    borderRadius: 14,
    padding: "0.85rem 1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.85rem",
  },
  sellerAvatar: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    objectFit: "cover",
    border: `2px solid ${theme.primary}`,
  },
  sellerName: { fontWeight: 800, fontSize: "0.95rem" },
  sellerSub: { fontSize: "0.78rem", color: theme.textSub },
  verifiedBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.2rem",
    background: theme.primary,
    color: "#fff",
    fontSize: "0.65rem",
    fontWeight: 700,
    padding: "0.1rem 0.5rem",
    borderRadius: 20,
    marginTop: "0.2rem",
  },
  chatBtn: {
    background: theme.primary,
    color: "#fff",
    border: "none",
    borderRadius: 14,
    padding: "0.9rem 1.5rem",
    fontWeight: 800,
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    letterSpacing: "-0.01em",
  },
  wishBtn: {
    background: "#fff",
    color: theme.text,
    border: `2px solid ${theme.border}`,
    borderRadius: 14,
    padding: "0.9rem 1rem",
    fontWeight: 700,
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  btnRow: { display: "flex", gap: "0.65rem" },
};

// ===================== HEADER COMPONENT =====================
function Header({ onLogoClick }) {
  const [query, setQuery] = useState("");
  const [faculty, setFaculty] = useState("Semua");
  return (
    <header style={style.header}>
      <div style={style.headerInner}>
        <div style={style.logo} onClick={onLogoClick}>
          <div style={{ lineHeight: 1 }}>
            <div style={style.logoText}>WarisanKating</div>
            <div style={style.logoSub}>Marketplace Kampus</div>
          </div>
        </div>
        <div style={{ ...style.searchWrap, display: "flex" }}>
          <input
            style={style.searchInput}
            placeholder="Cari buku, alat, jas lab..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            style={style.searchSelect}
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
          >
            {FACULTIES.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
          <button style={style.searchBtn}>Cari</button>
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: "1.3rem",
              cursor: "pointer",
            }}
          >
            🔔
          </button>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: theme.primaryBg,
              border: `2px solid ${theme.primary}`,
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

// ===================== ITEM CARD =====================
function ItemCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...style.itemCard,
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.10)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(item)}
    >
      <div style={{ position: "relative" }}>
        <img src={item.image} alt={item.title} style={style.itemImg} />
        <span
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "rgba(255,255,255,0.92)",
            fontSize: "0.7rem",
            fontWeight: 700,
            color: theme.textSub,
            padding: "0.2rem 0.5rem",
            borderRadius: 8,
          }}
        >
          {item.faculty}
        </span>
      </div>
      <div style={style.itemBody}>
        <div style={style.typeBadge(item.type)}>
          {item.type === "sewa" ? "🔄 Sewa" : "🏷️ Jual"}
        </div>
        <div style={style.itemTitle}>{item.title}</div>
        <div style={style.itemPrice}>
          Rp {item.price.toLocaleString("id-ID")}
          {item.type === "sewa" ? "/hari" : ""}
        </div>
        <div style={style.itemMeta}>
          <span>📍 {item.seller.major}</span>
          <span style={{ fontWeight: 600 }}>{item.condition}% 👍</span>
        </div>
        <div style={style.condBar}>
          <div style={style.condFill(item.condition)} />
        </div>
      </div>
    </div>
  );
}

// ===================== HOME PAGE =====================
function HomePage({ onItemClick }) {
  const [activeFaculty, setActiveFaculty] = useState("Semua");
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = MOCK_ITEMS.filter((i) => {
    const fMatch = activeFaculty === "Semua" || i.faculty === activeFaculty;
    const cMatch = !activeCategory || i.category === activeCategory;
    return fMatch && cMatch;
  });

  return (
    <div>
      {/* Hero */}
      <section style={style.hero}>
        <div style={style.heroBadge}>🎓 Khusus Mahasiswa Terverifikasi</div>
        <h1 style={style.heroTitle}>
          Jual, Beli & Sewa
          <br />
          Perlengkapan Kuliah
        </h1>
        <p style={style.heroSub}>
          Transaksi aman antar mahasiswa kampus · COD langsung di kampus · Tanpa
          ribet ekspedisi
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            ["🏷️", "Harga Terjangkau"],
            ["🤝", "COD di Kampus"],
            ["✅", "Terverifikasi"],
          ].map(([icon, label]) => (
            <div
              key={label}
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.85rem",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <div style={style.catWrap}>
        <div style={{ ...style.sectionTitle, marginBottom: "0.75rem" }}>
          Kategori
        </div>
        <div style={style.catGrid}>
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              style={{
                ...style.catCard,
                background:
                  activeCategory === cat.name ? cat.color : theme.card,
                borderColor:
                  activeCategory === cat.name ? theme.primary : theme.border,
              }}
              onClick={() =>
                setActiveCategory(activeCategory === cat.name ? null : cat.name)
              }
            >
              <span style={style.catIcon}>{cat.icon}</span>
              <span
                style={{
                  ...style.catName,
                  color:
                    activeCategory === cat.name ? theme.primary : theme.text,
                }}
              >
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Items */}
      <div style={style.itemsWrap}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.75rem",
          }}
        >
          <div style={style.sectionTitle}>
            {activeCategory
              ? `${CATEGORIES.find((c) => c.name === activeCategory)?.icon} ${activeCategory}`
              : "🔥 Semua Barang"}{" "}
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                color: theme.textSub,
              }}
            >
              ({filtered.length} item)
            </span>
          </div>
        </div>
        <div style={style.filterRow}>
          {FACULTIES.map((f) => (
            <button
              key={f}
              style={style.filterChip(activeFaculty === f)}
              onClick={() => setActiveFaculty(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div style={style.itemGrid}>
          {filtered.map((item) => (
            <ItemCard key={item.id} item={item} onClick={onItemClick} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              color: theme.textSub,
            }}
          >
            <div style={{ fontSize: "3rem" }}>🔍</div>
            <div style={{ fontWeight: 700, marginTop: "0.5rem" }}>
              Belum ada barang di kategori ini
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ===================== PRODUCT DETAIL PAGE =====================
function ProductDetailPage({ item, onBack }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div style={style.detailWrap}>
      <button style={style.backBtn} onClick={onBack}>
        ← Kembali
      </button>

      <div style={{ ...style.detailGrid, gridTemplateColumns: "1fr 1fr" }}>
        {/* Left: Image */}
        <div style={style.detailImgWrap}>
          <img src={item.image} alt={item.title} style={style.detailImg} />
          <span style={style.detailBadgeFl}>
            {item.faculty} · {item.subject}
          </span>
        </div>

        {/* Right: Info */}
        <div style={style.detailRight}>
          <div>
            <span style={style.detailType(item.type)}>
              {item.type === "sewa" ? "🔄 Untuk Disewa" : "🏷️ Untuk Dijual"}
            </span>
          </div>
          <h1 style={style.detailTitle}>{item.title}</h1>
          <div>
            <span style={style.detailPrice}>
              Rp {item.price.toLocaleString("id-ID")}
            </span>
            <span style={style.detailPriceNote}>
              {" "}
              {item.type === "sewa" ? "/ hari" : "(nego)"}
            </span>
          </div>

          <hr style={style.divider} />

          {/* Condition */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.4rem",
              }}
            >
              <span style={style.condLabel}>Kondisi Barang</span>
              <span
                style={{
                  fontWeight: 800,
                  color: item.condition > 80 ? theme.primary : theme.accent,
                }}
              >
                {item.condition}%
              </span>
            </div>
            <div style={style.condBarLg}>
              <div style={style.condFillLg(item.condition)} />
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                color: theme.textSub,
                marginTop: "0.4rem",
              }}
            >
              {item.condition >= 90
                ? "Hampir seperti baru, sangat terawat."
                : item.condition >= 80
                  ? "Kondisi sangat baik, ada sedikit bekas pakai."
                  : "Ada bekas pemakaian normal, masih layak digunakan."}
            </p>
          </div>

          <hr style={style.divider} />

          {/* Seller */}
          <div>
            <div
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: theme.textSub,
                marginBottom: "0.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              Profil Penjual
            </div>
            <div style={style.sellerCard}>
              <img
                src={item.seller.avatar}
                alt={item.seller.name}
                style={style.sellerAvatar}
              />
              <div>
                <div style={style.sellerName}>{item.seller.name}</div>
                <div style={style.sellerSub}>
                  {item.seller.major} · Angkatan {item.seller.year}
                </div>
                {item.seller.verified && (
                  <div style={style.verifiedBadge}>
                    ✅ Mahasiswa Terverifikasi
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={style.btnRow}>
            <button style={{ ...style.chatBtn, flex: 1 }}>
              💬 Chat Penjual
            </button>
            <button
              style={{
                ...style.wishBtn,
                color: wishlisted ? "#E76F51" : theme.textSub,
              }}
              onClick={() => setWishlisted(!wishlisted)}
            >
              {wishlisted ? "❤️" : "🤍"}
            </button>
          </div>

          {/* COD info */}
          <div
            style={{
              background: "#FFFBEB",
              border: "1.5px solid #FDE68A",
              borderRadius: 12,
              padding: "0.75rem 1rem",
              fontSize: "0.82rem",
              color: "#92400E",
            }}
          >
            📍 <strong>Transaksi COD di Kampus</strong> — Sepakati titik temu di
            chat. Tidak ada kurir, tidak ada ongkir.
          </div>
        </div>
      </div>

      {/* More from seller */}
      <div style={{ marginTop: "2.5rem" }}>
        <div style={style.sectionTitle}>
          📦 Barang Lain dari {item.seller.name}
        </div>
        <div style={style.itemGrid}>
          {MOCK_ITEMS.filter(
            (i) => i.id !== item.id && i.seller.name === item.seller.name,
          )
            .slice(0, 3)
            .map((i) => (
              <ItemCard key={i.id} item={i} onClick={() => {}} />
            ))}
          {MOCK_ITEMS.filter((i) => i.id !== item.id)
            .slice(0, 3)
            .map((i) => (
              <ItemCard key={i.id} item={i} onClick={() => {}} />
            ))}
        </div>
      </div>
    </div>
  );
}

// ===================== CHAT PAGE =====================
function ChatPage({ item, onBack }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "seller",
      text: "Halo! Ada yang bisa dibantu?",
      time: "09.01",
    },
    {
      id: 2,
      from: "me",
      text: "Kak, apakah barang ini masih available?",
      time: "09.03",
    },
    {
      id: 3,
      from: "seller",
      text: `Masih ada kak! ${item?.title} kondisinya masih bagus kok 😊`,
      time: "09.05",
    },
  ]);
  const [input, setInput] = useState("");
  const [showCOD, setShowCOD] = useState(false);
  const COD_SPOTS = [
    "📚 Perpustakaan Pusat",
    "🍽️ Kantin FT",
    "🏛️ Gedung Rektorat",
    "⚗️ Lab Kimia FMIPA",
    "🏥 Lobby FK",
  ];

  const send = (text) => {
    if (!text.trim()) return;
    setMessages((m) => [
      ...m,
      {
        id: Date.now(),
        from: "me",
        text,
        time: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: Date.now() + 1,
          from: "seller",
          text: "Oke kak, siap! 👍",
          time: new Date().toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 800);
  };

  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 80px)",
      }}
    >
      <button style={style.backBtn} onClick={onBack}>
        ← Kembali
      </button>
      {/* Chat header */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "0.75rem 1rem",
          marginBottom: "0.75rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          border: `1px solid ${theme.border}`,
        }}
      >
        <img
          src={item?.seller?.avatar || "https://i.pravatar.cc/150?img=11"}
          alt=""
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div>
          <div style={{ fontWeight: 800 }}>
            {item?.seller?.name || "Penjual"}
          </div>
          <div style={{ fontSize: "0.75rem", color: "#22C55E" }}>● Online</div>
        </div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: "0.78rem",
            background: theme.primaryBg,
            color: theme.primary,
            padding: "0.3rem 0.7rem",
            borderRadius: 8,
            fontWeight: 700,
          }}
        >
          {item?.title?.slice(0, 18)}...
        </div>
      </div>
      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          paddingBottom: "0.5rem",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              justifyContent: msg.from === "me" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                background: msg.from === "me" ? theme.primary : "#fff",
                color: msg.from === "me" ? "#fff" : theme.text,
                padding: "0.6rem 0.9rem",
                borderRadius:
                  msg.from === "me"
                    ? "14px 14px 4px 14px"
                    : "14px 14px 14px 4px",
                border:
                  msg.from !== "me" ? `1px solid ${theme.border}` : "none",
                fontSize: "0.9rem",
              }}
            >
              {msg.text}
              <div
                style={{
                  fontSize: "0.65rem",
                  marginTop: "0.2rem",
                  opacity: 0.6,
                  textAlign: "right",
                }}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* COD Picker */}
      {showCOD && (
        <div
          style={{
            background: "#fff",
            border: `1.5px solid ${theme.primary}`,
            borderRadius: 14,
            padding: "0.85rem",
            marginBottom: "0.5rem",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "0.85rem",
              marginBottom: "0.5rem",
              color: theme.primary,
            }}
          >
            📍 Pilih Titik Temu COD
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {COD_SPOTS.map((spot) => (
              <button
                key={spot}
                onClick={() => {
                  send(`Saya ajukan titik temu COD di: ${spot}`);
                  setShowCOD(false);
                }}
                style={{
                  background: theme.primaryBg,
                  border: "none",
                  borderRadius: 20,
                  padding: "0.35rem 0.75rem",
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  fontWeight: 600,
                  color: theme.primary,
                }}
              >
                {spot}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Input */}
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-end" }}>
        <button
          onClick={() => setShowCOD(!showCOD)}
          style={{
            background: showCOD ? theme.primary : theme.primaryBg,
            color: showCOD ? "#fff" : theme.primary,
            border: "none",
            borderRadius: 12,
            padding: "0.7rem 0.85rem",
            fontWeight: 700,
            fontSize: "0.78rem",
            cursor: "pointer",
            whiteSpace: "nowrap",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          📍 Ajukan
          <br />
          Titik COD
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder="Tulis pesan..."
          style={{ ...style.searchInput, flex: 1, padding: "0.75rem 1rem" }}
        />
        <button
          onClick={() => send(input)}
          style={{
            ...style.chatBtn,
            padding: "0.75rem 1.1rem",
            borderRadius: 12,
            fontSize: "1.1rem",
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}

// ===================== RENTAL DASHBOARD =====================
function RentalDashboard({ onBack }) {
  const rentals = [
    {
      id: 1,
      item: MOCK_ITEMS[1],
      startDate: "2025-06-01",
      endDate: "2025-06-08",
      daysLeft: 2,
    },
    {
      id: 2,
      item: MOCK_ITEMS[5],
      startDate: "2025-06-03",
      endDate: "2025-06-10",
      daysLeft: 5,
    },
  ];
  return (
    <div
      style={{ maxWidth: 700, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}
    >
      <button style={style.backBtn} onClick={onBack}>
        ← Kembali
      </button>
      <div style={style.sectionTitle}>📋 Dashboard Sewa Aktif</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {rentals.map((r) => {
          const urgent = r.daysLeft <= 2;
          return (
            <div
              key={r.id}
              style={{
                background: "#fff",
                borderRadius: 16,
                border: `2px solid ${urgent ? "#FCA5A5" : theme.border}`,
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <img
                  src={r.item.image}
                  alt=""
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 10,
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800 }}>{r.item.title}</div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: theme.textSub,
                      marginTop: "0.2rem",
                    }}
                  >
                    dari {r.item.seller.name}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "0.6rem",
                    }}
                  >
                    {[
                      ["Mulai", r.startDate],
                      ["Selesai", r.endDate],
                    ].map(([label, val]) => (
                      <div key={label} style={{ fontSize: "0.78rem" }}>
                        <div style={{ color: theme.textSub }}>{label}</div>
                        <div style={{ fontWeight: 700 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: urgent ? "#FEF2F2" : theme.primaryBg,
                  padding: "0.6rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.78rem",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: urgent ? "#DC2626" : theme.primary,
                      }}
                    >
                      {urgent ? "⚠️ Hampir Berakhir!" : "✅ Berjalan"} —{" "}
                      {r.daysLeft} hari lagi
                    </span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      background: "#E5E7EB",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${((7 - r.daysLeft) / 7) * 100}%`,
                        background: urgent ? "#EF4444" : theme.primaryLight,
                        borderRadius: 4,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ===================== USER PROFILE PAGE =====================
function UserProfilePage({ onBack, onItemClick }) {
  const [tab, setTab] = useState("dijual");
  const user = {
    name: "Rizky Aditya",
    major: "Kimia",
    year: "2021",
    faculty: "FMIPA",
    avatar: "https://i.pravatar.cc/150?img=11",
    verified: true,
    sold: 12,
    rating: 4.9,
  };
  const myItems = MOCK_ITEMS.filter((i) => i.seller.name === user.name);
  return (
    <div
      style={{ maxWidth: 700, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}
    >
      <button style={style.backBtn} onClick={onBack}>
        ← Kembali
      </button>
      {/* Profile Card */}
      <div
        style={{
          background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryLight})`,
          borderRadius: 20,
          padding: "2rem 1.5rem",
          textAlign: "center",
          color: "#fff",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src={user.avatar}
            alt=""
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: "3px solid #fff",
              objectFit: "cover",
            }}
          />
          {user.verified && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                background: "#22C55E",
                borderRadius: "50%",
                width: 22,
                height: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.7rem",
                border: "2px solid #fff",
              }}
            >
              ✓
            </div>
          )}
        </div>
        <div
          style={{ fontWeight: 800, fontSize: "1.2rem", marginTop: "0.75rem" }}
        >
          {user.name}
        </div>
        <div style={{ opacity: 0.85, fontSize: "0.85rem" }}>
          {user.major} · Angkatan {user.year} · {user.faculty}
        </div>
        {user.verified && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              background: "rgba(255,255,255,0.2)",
              borderRadius: 20,
              padding: "0.3rem 0.85rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              marginTop: "0.6rem",
            }}
          >
            🎓 Mahasiswa Terverifikasi
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "1.25rem",
          }}
        >
          {[
            [user.sold, "Terjual"],
            [`⭐ ${user.rating}`, "Rating"],
            [myItems.length, "Etalase"],
          ].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>{val}</div>
              <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Tabs */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem" }}>
        {[
          ["dijual", "🏷️ Sedang Dijual"],
          ["disewa", "🔄 Untuk Disewa"],
        ].map(([key, label]) => (
          <button
            key={key}
            style={{
              flex: 1,
              padding: "0.65rem",
              borderRadius: 12,
              border: `2px solid ${tab === key ? theme.primary : theme.border}`,
              background: tab === key ? theme.primaryBg : "#fff",
              color: tab === key ? theme.primary : theme.textSub,
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "0.88rem",
            }}
            onClick={() => setTab(key)}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Items */}
      <div style={style.itemGrid}>
        {myItems
          .filter((i) =>
            tab === "dijual" ? i.type === "jual" : i.type === "sewa",
          )
          .map((item) => (
            <ItemCard key={item.id} item={item} onClick={onItemClick} />
          ))}
      </div>
      {myItems.filter((i) =>
        tab === "dijual" ? i.type === "jual" : i.type === "sewa",
      ).length === 0 && (
        <div
          style={{ textAlign: "center", padding: "2rem", color: theme.textSub }}
        >
          <div style={{ fontSize: "2.5rem" }}>📭</div>
          <div style={{ fontWeight: 600, marginTop: "0.5rem" }}>
            Belum ada barang di kategori ini
          </div>
        </div>
      )}
    </div>
  );
}

// ===================== BOTTOM NAV =====================
function TopNav({ page, setPage }) {
  const tabs = [
    { key: "home", icon: "🏠", label: "Beranda" },
    { key: "rental", icon: "📋", label: "Sewa Saya" },
    { key: "chat", icon: "💬", label: "Chat" },
    { key: "profile", icon: "👤", label: "Profil" },
  ];
  return (
    <nav style={style.topNav}>
      <div style={style.topNavInner}>
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setPage(t.key)}
            style={style.topNavBtn(page === t.key)}
          >
            <span style={{ fontSize: "1rem" }}>{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

// ===================== ROOT APP =====================
export default function App() {
  const [page, setPage] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setPage("detail");
  };
  const handleBack = () => {
    setPage("home");
    setSelectedItem(null);
  };

  return (
    <div style={style.app}>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Header
        onLogoClick={() => {
          setPage("home");
          setSelectedItem(null);
        }}
      />
      <TopNav page={page} setPage={setPage} />
      <main style={{ paddingBottom: 24 }}>
        {page === "home" && <HomePage onItemClick={handleItemClick} />}
        {page === "detail" && selectedItem && (
          <ProductDetailPage item={selectedItem} onBack={handleBack} />
        )}
        {page === "chat" && (
          <ChatPage item={selectedItem || MOCK_ITEMS[0]} onBack={handleBack} />
        )}
        {page === "rental" && <RentalDashboard onBack={handleBack} />}
        {page === "profile" && (
          <UserProfilePage onBack={handleBack} onItemClick={handleItemClick} />
        )}
      </main>
    </div>
  );
}
