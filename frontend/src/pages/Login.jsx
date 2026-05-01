import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      await login(form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "var(--bg)", padding: 20,
    }}>
      {/* Background grid */}
      <div style={{
        position: "fixed", inset: 0, opacity: .04,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        pointerEvents: "none",
        animation: "gridDrift 20s linear infinite",
      }} />

      <motion.div 
        className="card" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ 
          scale: 1.02, 
          boxShadow: "0 24px 48px rgba(0,0,0,0.6), 0 0 24px rgba(255, 255, 255, 0.15)",
          borderColor: "rgba(255, 255, 255, 0.2)"
        }}
        style={{ width: "100%", maxWidth: 400, padding: 36, position: "relative" }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div className="floating-icon" style={{
            width: 48, height: 48, background: "transparent", borderRadius: 12, border: "1px solid var(--border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 14px",
            boxShadow: "0 0 24px rgba(255, 255, 255, 0.1)", overflow: "hidden"
          }}>
            <img src="/logo.png" alt="Nexora Logo" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "invert(1)" }} />
          </div>
          <h1 style={{ fontFamily: "var(--font-family)", fontWeight: 800, fontSize: 26, letterSpacing: "-.02em" }}>
            Nexora
          </h1>
          <p style={{ color: "var(--text2)", fontSize: 14, marginTop: 4 }}>Sign in to your workspace</p>
        </div>

        {error && (
          <div style={{
            background: "rgba(255,59,59,.1)", border: "1px solid rgba(255,59,59,.2)",
            borderRadius: "var(--radius)", padding: "10px 14px", marginBottom: 18,
            fontSize: 14, color: "var(--accent)",
          }}>{error}</div>
        )}

        <form onSubmit={submit}>
          <div className="form-group">
            <label className="label">Email</label>
            <motion.input className="input" type="email" value={form.email}
              onChange={e => set("email", e.target.value)}
              placeholder="you@company.com" required 
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px var(--accent-glow)", borderColor: "var(--accent)" }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <motion.input className="input" type="password" value={form.password}
              onChange={e => set("password", e.target.value)}
              placeholder="••••••••" required 
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px var(--accent-glow)", borderColor: "var(--accent)" }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <motion.button type="submit" className="btn btn-primary" disabled={loading}
            whileHover={{ scale: 1.02, boxShadow: "0 0 32px var(--accent-glow)" }}
            whileTap={{ scale: 0.97 }}
            style={{ width: "100%", justifyContent: "center", padding: "12px", marginTop: 4, fontSize: 15 }}>
            {loading ? <span className="spinner" style={{ width: 16, height: 16 }} /> : "Sign In"}
          </motion.button>
        </form>

        <p style={{ textAlign: "center", marginTop: 22, fontSize: 14, color: "var(--text2)" }}>
          No account?{" "}
          <Link to="/signup" style={{ color: "var(--accent)", fontWeight: 600 }}>Create one</Link>
        </p>

        {/* Demo hint */}
        <div style={{
          marginTop: 20, padding: "10px 14px",
          background: "rgba(245,158,11,.06)", border: "1px solid rgba(245,158,11,.15)",
          borderRadius: "var(--radius)", fontSize: 12, color: "var(--text2)",
        }}>
          <strong style={{ color: "var(--accent)" }}>Demo:</strong> Sign up with role <code style={{ fontFamily: "var(--font-mono)" }}>admin</code> to unlock full access.
        </div>
      </motion.div>
    </div>
  );
}
