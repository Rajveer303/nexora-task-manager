import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const features = [
  {
    title: "Lightning Fast",
    desc: "Built on modern web technologies to ensure every interaction feels instantaneous.",
    icon: "⚡️"
  },
  {
    title: "Zero Clutter",
    desc: "A distraction-free interface designed to keep your focus on what actually matters.",
    icon: "🎯"
  },
  {
    title: "Developer First",
    desc: "Keyboard shortcuts, command palettes, and an API built for builders.",
    icon: "💻"
  }
];

export default function Landing() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
      <Navbar />
      
      {/* Background grid specifically for landing to add depth */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "100vh", opacity: .04,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <main style={{ position: "relative", zIndex: 1 }}>
        {/* HERO SECTION */}
        <section style={{ 
          display: "flex", flexDirection: "column", alignItems: "center", 
          padding: "120px 20px 0", textAlign: "center"
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ maxWidth: 900 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ 
                display: "inline-block", padding: "6px 16px", background: "rgba(255, 59, 59, 0.1)", 
                border: "1px solid rgba(255, 59, 59, 0.2)", borderRadius: "999px",
                color: "var(--accent)", fontSize: 14, fontWeight: 600, marginBottom: 24,
              }}
            >
              Introducing Nexora 2.0 ✨
            </motion.div>

            <h1 className="hero-heading" style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 800 }}>
              <span className="gradient-text" style={{ background: "linear-gradient(to right, #fff, #a1a1aa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Manage tasks.</span><br/>
              Move at the speed of light.
            </h1>
            
            <p className="hero-subheading" style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--text2)", maxWidth: 600, margin: "24px auto 40px", lineHeight: 1.6 }}>
              Nexora brings clarity to your team's workflow. Minimalist design, powerful features, and zero friction. Built for modern product teams.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/signup" className="btn btn-primary" style={{ padding: "14px 32px", fontSize: 16, fontWeight: 600 }}>
                  Start for free
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/login" className="btn btn-ghost" style={{ padding: "14px 32px", fontSize: 16, border: "1px solid var(--border2)" }}>
                  Book a demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Dashboard preview mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              marginTop: 80, width: "100%", maxWidth: 1000, height: 400,
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "24px 24px 0 0", borderBottom: "none",
              boxShadow: "0 24px 48px rgba(0,0,0,0.8), 0 0 80px rgba(255, 59, 59, 0.08)",
              overflow: "hidden", position: "relative"
            }}
          >
            <div style={{ height: 40, borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", padding: "0 16px", gap: 8, background: "rgba(0,0,0,0.4)" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(239, 68, 68, 0.8)" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(245, 158, 11, 0.8)" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(16, 185, 129, 0.8)" }} />
            </div>
            <div style={{ padding: 32, display: "flex", gap: 24, opacity: 0.9 }}>
              {/* Sidebar Mockup */}
              <div style={{ width: 200, borderRadius: 16, background: "var(--bg)", border: "1px solid var(--border)", padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, border: "1px solid var(--border2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 12, height: 12, background: "var(--text)", borderRadius: 2 }} />
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>Nexora</span>
                </div>
                {["Dashboard", "Projects", "Tasks", "Team"].map((item, i) => (
                  <div key={item} style={{ fontSize: 13, color: i === 0 ? "var(--accent)" : "var(--text2)", fontWeight: i === 0 ? 600 : 500, padding: "8px 12px", background: i === 0 ? "rgba(255, 59, 59, 0.1)" : "transparent", borderRadius: 8 }}>
                    {item}
                  </div>
                ))}
              </div>

              {/* Main Content Mockup */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Header */}
                <div style={{ height: 40, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>Dashboard</span>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--border2)" }} />
                </div>
                
                {/* Stats Cards */}
                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ flex: 1, padding: 20, borderRadius: 16, background: "var(--bg)", border: "1px solid var(--border)" }}>
                    <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 8, fontWeight: 500 }}>Total Tasks</div>
                    <div style={{ fontSize: 28, fontWeight: 800, color: "var(--text)" }}>124</div>
                  </div>
                  <div style={{ flex: 1, padding: 20, borderRadius: 16, background: "var(--bg)", border: "1px solid var(--border)" }}>
                    <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 8, fontWeight: 500 }}>Completed</div>
                    <div style={{ fontSize: 28, fontWeight: 800, color: "var(--text)" }}>89</div>
                  </div>
                  <div style={{ flex: 1, padding: 20, borderRadius: 16, background: "var(--bg)", border: "1px solid var(--border)" }}>
                    <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 8, fontWeight: 500 }}>In Progress</div>
                    <div style={{ fontSize: 28, fontWeight: 800, color: "var(--accent)" }}>35</div>
                  </div>
                </div>

                {/* Task List */}
                <div style={{ padding: 20, borderRadius: 16, background: "var(--bg)", border: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 12 }}>
                   <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.01em" }}>Recent Tasks</div>
                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "var(--surface)", borderRadius: 8, border: "1px solid var(--border)" }}>
                     <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                       <div style={{ width: 16, height: 16, borderRadius: 4, border: "1px solid var(--border2)" }} />
                       <span style={{ fontSize: 14, color: "var(--text)", fontWeight: 500 }}>Design landing page mockup</span>
                     </div>
                     <span style={{ fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 999, background: "rgba(255, 59, 59, 0.1)", color: "var(--accent)" }}>High</span>
                   </div>
                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "var(--surface)", borderRadius: 8, border: "1px solid var(--border)" }}>
                     <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                       <div style={{ width: 16, height: 16, borderRadius: 4, border: "1px solid var(--border2)" }} />
                       <span style={{ fontSize: 14, color: "var(--text)", fontWeight: 500 }}>Implement API rate limiting</span>
                     </div>
                     <span style={{ fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 999, background: "rgba(255, 255, 255, 0.05)", color: "var(--text2)" }}>Medium</span>
                   </div>
                </div>
              </div>
            </div>
            {/* Fading gradient overlay */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
              background: "linear-gradient(transparent, var(--bg))"
            }} />
          </motion.div>
        </section>

        {/* LOGOS SECTION */}
        <section style={{ padding: "60px 20px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.01)", textAlign: "center" }}>
          <p style={{ color: "var(--text3)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 32 }}>Trusted by innovative teams worldwide</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(30px, 8vw, 80px)", flexWrap: "wrap", opacity: 0.4, filter: "grayscale(100%)" }}>
            {["Acme Corp", "GlobalTech", "Quantum", "Nexus", "Starlight"].map(name => (
              <div key={name} style={{ fontSize: 20, fontWeight: 800, fontFamily: "var(--font-family)" }}>{name}</div>
            ))}
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section style={{ padding: "120px 20px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>Everything you need. Nothing you don't.</h2>
            <p style={{ color: "var(--text2)", fontSize: 18, maxWidth: 600, margin: "0 auto" }}>Designed to stay out of your way so you can focus on building.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            {features.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, borderColor: "var(--border2)" }}
                style={{ 
                  background: "var(--surface)", border: "1px solid var(--border)", 
                  borderRadius: 24, padding: 40, transition: "all 0.3s ease" 
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 20, background: "rgba(255,59,59,0.1)", width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ color: "var(--text2)", lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={{ padding: "120px 20px", textAlign: "center", background: "linear-gradient(to bottom, var(--bg), rgba(255,59,59,0.03))" }}>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 24 }}>Ready to experience the future?</h2>
          <p style={{ color: "var(--text2)", fontSize: 18, marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" }}>Join thousands of developers and teams already using Nexora to ship faster.</p>
          <Link to="/signup" className="btn btn-primary" style={{ padding: "16px 40px", fontSize: 18, fontWeight: 600, borderRadius: 999 }}>
            Get Started Now
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "60px 40px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 40 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
             <div style={{ width: 24, height: 24, borderRadius: 6, border: "1px solid var(--border2)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <img src="/logo.png" alt="Logo" style={{ width: "100%", height: "100%", filter: "invert(1)", objectFit: "contain" }} />
             </div>
             <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em" }}>Nexora</span>
          </div>
          <p style={{ color: "var(--text3)", fontSize: 14 }}>© {new Date().getFullYear()} Nexora Inc. All rights reserved.</p>
        </div>
        <div style={{ display: "flex", gap: 60 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <strong style={{ fontSize: 14 }}>Product</strong>
            {["Features", "Integrations", "Pricing", "Changelog"].map(l => <Link key={l} to="/" style={{ color: "var(--text2)", fontSize: 14, textDecoration: "none" }}>{l}</Link>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <strong style={{ fontSize: 14 }}>Company</strong>
            {["About Us", "Careers", "Blog", "Contact"].map(l => <Link key={l} to="/" style={{ color: "var(--text2)", fontSize: 14, textDecoration: "none" }}>{l}</Link>)}
          </div>
        </div>
      </footer>
    </div>
  );
}
