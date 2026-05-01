import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        zIndex: 100,
        background: scrolled ? "var(--surface)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s, backdrop-filter 0.3s, border-bottom 0.3s",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32, height: 32, background: "transparent", borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: "1px solid var(--border)"
        }}>
          <img src="/logo.png" alt="Nexora Logo" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "invert(1)" }} />
        </div>
        <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-.03em" }} className="gradient-text">
          Nexora
        </span>
      </Link>

      {/* Links */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <Link to="#" style={{ fontSize: 14, fontWeight: 500, color: "var(--text2)" }}>Product</Link>
        <Link to="#" style={{ fontSize: 14, fontWeight: 500, color: "var(--text2)" }}>Pricing</Link>
        <Link to="#" style={{ fontSize: 14, fontWeight: 500, color: "var(--text2)" }}>Resources</Link>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link to="/login" style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>Log in</Link>
        <div>
          <Link to="/signup" className="btn btn-primary" style={{ padding: "8px 20px" }}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
