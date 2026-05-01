import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const icons = {
  dashboard: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="11" rx="2"/>
      <rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="18" width="7" height="3" rx="1.5"/>
    </svg>
  ),
  projects: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  tasks: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 12l3 3 5-6"/>
    </svg>
  ),
  users: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-5 8-5s8 1 8 5"/>
      <path d="M18 8a3 3 0 0 1 0 6" opacity="0.5"/><path d="M21 20c0-2-1-3-3-4" opacity="0.5"/>
    </svg>
  ),
  logout: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5"/><polyline points="17 16 21 12 17 8"/><line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  ),
  settings: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
};

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: icons.dashboard },
    { to: "/projects",  label: "Projects",  icon: icons.projects },
    { to: "/tasks",     label: "My Tasks",  icon: icons.tasks },
    { to: "/settings",  label: "Settings",  icon: icons.settings },
    ...(user?.role === "admin" ? [{ to: "/users", label: "Users", icon: icons.users }] : []),
  ];

  return (
    <aside style={{
      width: 260, flexShrink: 0,
      background: "var(--surface)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRight: "1px solid var(--border)",
      display: "flex", flexDirection: "column",
      height: "100vh", position: "sticky", top: 0,
      zIndex: 10,
    }}>
      {/* Logo */}
      <div style={{ padding: "32px 24px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 36, height: 36, background: "transparent",
            borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "var(--shadow-glow)", overflow: "hidden", border: "1px solid var(--border)"
          }}>
            <img src="/logo.png" alt="Nexora Logo" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "invert(1)" }} />
          </div>
          <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-.03em" }} className="gradient-text">
            Nexora
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "0 16px", display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ padding: "12px 12px 4px", fontSize: 12, fontWeight: 600, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Menu</div>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} style={({ isActive }) => ({
            display: "flex", alignItems: "center", gap: 12,
            padding: "10px 14px", borderRadius: "var(--radius)",
            fontSize: 14, fontWeight: 500,
            color: isActive ? "#fff" : "var(--text2)",
            background: isActive ? "rgba(255, 255, 255, 0.06)" : "transparent",
            border: isActive ? "1px solid var(--border)" : "1px solid transparent",
            transition: "var(--transition)",
          })}
          onMouseEnter={e => { if (!e.currentTarget.style.color.includes("fff")) e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { if (e.currentTarget.style.background === "transparent") e.currentTarget.style.color = "var(--text2)"; }}
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* User & Theme Toggle */}
      <div style={{ padding: "20px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px", borderRadius: "var(--radius)", background: "var(--bg)", border: "1px solid var(--border)" }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "var(--accent)", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 14,
            flexShrink: 0,
          }}>
            {user?.name?.[0]?.toUpperCase()}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "#fff" }}>{user?.name}</div>
            <div style={{ fontSize: 12, color: "var(--text3)", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>{user?.role}</div>
          </div>
        </div>
        <button onClick={() => { logout(); navigate("/login"); }} className="btn btn-ghost"
          style={{ width: "100%", marginTop: 12, justifyContent: "center", fontSize: 13, height: 40 }}>
          {icons.logout} Sign out
        </button>
      </div>
    </aside>
  );
}
