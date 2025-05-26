// src/utils/storage.js
const TASKS_KEY = "task_manager_tasks";

export const loadTasks = () => {
  const tasks = localStorage.getItem(TASKS_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  console.log("🧠 Tasks saved to localStorage:", tasks);
};
