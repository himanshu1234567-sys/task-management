import React from "react";

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "#ff4d4f";
    case "Medium":
      return "#faad14";
    case "Low":
      return "#52c41a";
    default:
      return "#ccc";
  }
};

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div
      className="task"
      style={{ borderLeft: `6px solid ${getPriorityColor(task.priority)}` }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <small>📅 {task.dueDate}</small><br />
      <small>🔥 {task.priority} Priority</small>
      <div className="task-buttons">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete} className="danger">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
