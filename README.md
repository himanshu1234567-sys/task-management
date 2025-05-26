npx create-react-app task-management

npm install

npm run

Task Manager SPA (React.js)
This is a Single Page Application (SPA) built using React.js that allows users to manage tasks with full CRUD functionality, priority levels, and drag-and-drop reordering. Data is persisted using the browser's localStorage.

🚀 Features
✅ Create, Read, Update, Delete (CRUD) tasks

✅ Set task priorities (High, Medium, Low)

✅ Drag-and-drop task reordering using react-beautiful-dnd

✅ Data is saved to localStorage

✅ Responsive and clean UI

✅ Logs task updates in browser console

📁 Folder Structure
pgsql
Copy
Edit
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   └── TaskList.jsx
├── utils/
│   └── storage.js
├── App.js
├── index.js
├── index.css
🛠️ Tech Stack
React.js

HTML5, CSS3

JavaScript (ES6+)

LocalStorage API

react-beautiful-dnd

