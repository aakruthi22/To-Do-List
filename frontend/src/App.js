import React, { useEffect, useState } from "react";
import axios from "axios";
import Stats from "./components/Stats";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const API = "http://localhost:5000/tasks";

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (err) {
      console.error("Could not fetch tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      await axios.post(API, task);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const updateTask = async (id, updatedFields) => {
    try {
      await axios.put(`${API}/${id}`, updatedFields);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredTasks = tasks.filter((t) =>
    filter === "All" ? true : filter === "Active" ? t.status === "Active" : t.status === "Completed"
  );

  return (
    <div className="page">
      <div className="header">
        <h1>My To-Do List</h1>
      </div>

      <div className="container">
        <Stats tasks={tasks} />

        <TaskInput addTask={addTask} />

        <div className="tabs">
          {["All", "Active", "Completed"].map((t) => (
            <button
              key={t}
              className={`tab ${filter === t ? "activeTab" : ""}`}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggle={(task) =>
            updateTask(task._id, {
              status: task.status === "Active" ? "Completed" : "Active",
            })
          }
          onDelete={(id) => deleteTask(id)}
          onEdit={(id, fields) => updateTask(id, fields)}
        />
      </div>
    </div>
  );
}

export default App;
