# js-dom-async-module

# Interactive To-Do List

This project is part of the `js-dom-async-module` and demonstrates a simple interactive To-Do list built using **HTML**, **CSS**, and **JavaScript**. It focuses on DOM manipulation, styling, and event handling.

## 📁 Folder Structure

js-dom-async-module/
│
├── README.md
│
├── tasks/
│ └── todo-interactive/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
└── assets/


## ✅ Features

- Displays a list of to-do items.
- Each item includes a hidden checkmark icon.
- Clicking on a task:
  - Toggles its completion state.
  - Changes its color from gray to blue.
  - Reveals the checkmark icon.
  - Clicking again reverts it back to incomplete.

## 🚀 Technologies Used

- **HTML**: For the structure.
- **CSS**: For the styling (default/incomplete and completed task states).
- **JavaScript**: For adding interactivity using `classList.toggle()`.

## 📌 How to Use

1. Open `index.html` in a browser.
2. Click on a to-do item to mark it as complete.
3. Click again to toggle it back to incomplete.

## 📤 Deployment Instructions

To push to GitHub:

```bash
git add .
git commit -m "Add interactive to-do list task"
git push origin main
