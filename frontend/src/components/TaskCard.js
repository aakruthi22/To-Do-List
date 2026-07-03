import React, { useState } from "react";

export default function TaskCard({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const save = () => {
    if (!title.trim()) return;
    onEdit(task._id, { title: title.trim() });
    setEditing(false);
  };

  return (
    <div className={`taskCard ${task.status === "Completed" ? "completed" : ""}`}>
      <div className="left">
        <button className="checkBtn" onClick={onToggle}>
          {task.status === "Completed" ? "✓" : "◻"}
        </button>

        {editing ? (
          <input
            className="editInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={save}
            onKeyDown={(e) => { if (e.key === "Enter") save(); }}
            autoFocus
          />
        ) : (
          <div className="taskTitle">{task.title}</div>
        )}
      </div>

      <div className="meta">
        {/* Pencil Edit Icon */}
        {!editing && (
          <button className="editIcon" onClick={() => setEditing(true)}>✏️</button>
        )}

        <div className="pill">{task.priority}</div>

        {task.dueDate && (
          <div className="due">
            {new Date(task.dueDate).toLocaleDateString()}
          </div>
        )}

        <button className="del" onClick={onDelete}>🗑</button>
      </div>
    </div>
  );
}
