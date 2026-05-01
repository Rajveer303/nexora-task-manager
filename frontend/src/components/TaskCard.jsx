import { api } from "../api";

const statusLabel = { todo: "To Do", in_progress: "In Progress", done: "Done", overdue: "Overdue" };
const statusClass = { todo: "badge-todo", in_progress: "badge-progress", done: "badge-done", overdue: "badge-overdue" };
const priorityClass = { low: "badge-low", medium: "badge-medium", high: "badge-high", critical: "badge-critical" };

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  const handleStatus = async (status) => {
    try {
      const d = await api.updateTask(task.id, { status });
      onStatusChange?.(d.task);
    } catch {}
  };

  const formatDate = (d) => {
    if (!d) return null;
    return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const isOverdue = task.due_date && task.status !== "done" &&
    new Date(task.due_date) < new Date();

  return (
    <div className="card fade-in" style={{
      padding: "14px 16px",
      borderLeft: `3px solid ${
        task.status === "done" ? "var(--text3)" :
        task.status === "overdue" || isOverdue ? "var(--accent)" :
        task.status === "in_progress" ? "var(--text2)" : "var(--border2)"
      }`,
      transition: "all .18s",
      cursor: "pointer",
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
    onMouseLeave={e => e.currentTarget.style.borderColor = task.status === "done" ? "var(--text3)" : task.status === "overdue" || isOverdue ? "var(--accent)" : task.status === "in_progress" ? "var(--text2)" : "var(--border2)"}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        {/* Checkbox */}
        <button style={{
          width: 18, height: 18, flexShrink: 0, marginTop: 2,
          borderRadius: 4, border: task.status === "done" ? "none" : "2px solid var(--border2)",
          background: task.status === "done" ? "var(--text3)" : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all .15s", cursor: "pointer",
        }}
        onClick={(e) => { e.stopPropagation(); handleStatus(task.status === "done" ? "todo" : "done"); }}>
          {task.status === "done" && (
            <svg width="10" height="10" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          )}
        </button>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{
              fontWeight: 600, fontSize: 14,
              textDecoration: task.status === "done" ? "line-through" : "none",
              color: task.status === "done" ? "var(--text3)" : "var(--text)",
            }}>{task.title}</span>
            <span className={`badge ${priorityClass[task.priority]}`}>{task.priority}</span>
          </div>

          {task.description && (
            <p style={{ fontSize: 13, color: "var(--text2)", marginTop: 4, overflow: "hidden",
              display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
              {task.description}
            </p>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
            <span className={`badge ${statusClass[task.status]}`}>{statusLabel[task.status]}</span>

            {task.project_name && (
              <span style={{
                display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--text2)",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: task.project_color, display: "inline-block" }}/>
                {task.project_name}
              </span>
            )}

            {task.assignee_name && (
              <span style={{ fontSize: 12, color: "var(--text2)", display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{
                  width: 20, height: 20, borderRadius: "50%",
                  background: "var(--accent)", color: "#0B0B0F",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 700, boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)"
                }}>{task.assignee_name[0]}</span>
                {task.assignee_name}
              </span>
            )}

            {task.due_date && (
              <span style={{ fontSize: 12, color: isOverdue ? "var(--accent)" : "var(--text2)", fontFamily: "var(--font-mono)" }}>
                {isOverdue ? "⚠ " : "📅 "}{formatDate(task.due_date)}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
          <button className="btn-icon" style={{ width: 28, height: 28 }}
            onClick={(e) => { e.stopPropagation(); onEdit?.(task); }}>
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </button>
          <button className="btn-icon" style={{ width: 28, height: 28, color: "var(--accent)", borderColor: "rgba(255,255,255,0.15)" }}
            onClick={(e) => { e.stopPropagation(); onDelete?.(task); }}>
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
