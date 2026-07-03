import React from "react";

export default function Stats({ tasks }) {
  const active = tasks.filter((t) => t.status === "Active").length;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const high = tasks.filter((t) => t.priority === "High").length;
  const completion = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  return (
    <div className="statsGrid">
      <div className="card">
        <div>
          <div className="cardLabel">Active</div>
          <div className="cardValue">{active}</div>
        </div>
        <div className="cardIcon">◯</div>
      </div>

      <div className="card">
        <div>
          <div className="cardLabel">Completed</div>
          <div className="cardValue">{completed}</div>
        </div>
        <div className="cardIcon">✓</div>
      </div>

      <div className="card">
        <div>
          <div className="cardLabel">High Priority</div>
          <div className="cardValue">{high}</div>
        </div>
        <div className="cardIcon">!</div>
      </div>

      <div className="card">
        <div>
          <div className="cardLabel">Completion</div>
          <div className="cardValue">{completion}%</div>
        </div>
        <div className="cardIcon">↗</div>
      </div>
    </div>
  );
}
