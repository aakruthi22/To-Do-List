import React from "react";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (!tasks.length) {
    return (
      <div className="emptyState">
        <div className="emptyIcon">☐✓</div>
        <h3>No tasks yet</h3>
        <p>Get started by adding your first task above!</p>
      </div>
    );
  }

  return (
    <div className="taskList">
      {tasks.map((t) => (
        <TaskCard key={t._id} task={t} onToggle={() => onToggle(t)} onDelete={() => onDelete(t._id)} onEdit={onEdit} />
      ))}
    </div>
  );
}
