import React, { useEffect, useState } from "react";

const TaskForm = ({ onAdd, onUpdate, editingTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDesc(editingTask.description);
      setDueDate(editingTask.dueDate);
      setPriority(editingTask.priority);
    } else {
      setTitle("");
      setDesc("");
      setDueDate("");
      setPriority("Medium");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) {
      alert("Title and Due Date are required!");
      return;
    }

    const task = {
      title,
      description,
      dueDate,
      priority,
      id: editingTask?.id || Date.now(),
    };

    editingTask ? onUpdate(task) : onAdd(task);
    setTitle("");
    setDesc("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDesc(e.target.value)} placeholder="Description"></textarea>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
