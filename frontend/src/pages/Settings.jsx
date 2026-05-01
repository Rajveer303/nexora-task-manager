import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  return (
    <div style={{ padding: "28px 32px", maxWidth: 800 }} className="fade-in">
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "var(--font-family)", fontWeight: 800, fontSize: 26, letterSpacing: "-.02em" }}>Settings</h1>
        <p style={{ color: "var(--text2)", fontSize: 14, marginTop: 2 }}>Manage your account and preferences.</p>
      </div>

      <div className="card" style={{ padding: 32, marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Profile</h2>
        <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "var(--accent)", color: "#0B0B0F",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, fontWeight: 800, flexShrink: 0,
          }}>{user?.name?.[0]?.toUpperCase()}</div>
          
          <div style={{ flex: 1, minWidth: 250 }}>
            <div className="form-group">
              <label className="label">Full Name</label>
              <input className="input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div className="form-group">
              <label className="label">Email Address</label>
              <input className="input" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} disabled style={{ opacity: 0.6 }} />
              <p style={{ fontSize: 12, color: "var(--text3)", marginTop: 6 }}>Email cannot be changed.</p>
            </div>
            
            <button className="btn btn-primary" style={{ marginTop: 10 }}>Save Changes</button>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Danger Zone</h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15, color: "var(--text)" }}>Delete Account</div>
            <div style={{ fontSize: 13, color: "var(--text2)", marginTop: 4 }}>Permanently remove your account and all its data.</div>
          </div>
          <button className="btn btn-danger">Delete Account</button>
        </div>
      </div>
    </div>
  );
}
