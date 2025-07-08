# PERN-TODO

```markdown

```

# 🛠️ PERN Stack Todo App

This is a full-stack **PERN** (PostgreSQL, Express, React, Node.js) app that allows users to create, view, update, and delete todo items.

The goal of this project is to get hands-on experience with connecting a React frontend to a PostgreSQL database via a Node/Express backend, using modern tooling and best practices.

---

## 📦 Technologies Used

- **PostgreSQL** – relational database
- **pgAdmin** – GUI for PostgreSQL setup and management
- **Express** – backend server and API layer
- **React** – frontend framework for UI
- **Node.js** – JavaScript runtime

---

## 🚀 Getting Started

Follow the steps below to get the application running on your machine.

---

## 1. 🧰 Install Required Tools

Make sure the following are installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)
- **pgAdmin** (typically bundled with PostgreSQL)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## 2. 🗄️ Set Up the PostgreSQL Database Using pgAdmin

### ▶ Launch pgAdmin:

- Open **pgAdmin 4** from your Start Menu or Apps list.
- Log in with your PostgreSQL master password.

### ▶ Create the `todo_app` database:

1. In the left sidebar, expand:

Servers → PostgreSQL → Databases

2. Right-click **Databases** → **Create → Database**
3. Set the **Name** to: `todo_app`
4. Click **Save**

### ▶ Create the `todos` table:

1. Expand:

```

Databases → todo_app → Schemas → public → Tables

```

2. Right-click **Tables** → **Create → Table**
3. Set the **Table name** to: `todos`

4. In the **Columns** tab:

- Click **+** and add:
  - **Name**: `todo_id`
  - **Data type**: `serial`
  - Check **Primary Key**
- Click **+** again and add:
  - **Name**: `description`
  - **Data type**: `varchar(255)`

5. Click **Save**

---

## 3. 🖥️ Set Up the Backend (Express + Node.js)

### ▶ Initialize the backend:

```bash
mkdir server
cd server
npm init -y
npm install express pg cors
```

### ▶ Create your server entry file (e.g., `index.js` or `server.js`):

```js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'postgres',
  password: 'yourPassword',
  host: 'localhost',
  port: 5432,
  database: 'todo_app',
});

app.use(cors());
app.use(express.json());

// Example route
app.get('/todos', async (req, res) => {
  const todos = await pool.query('SELECT * FROM todos');
  res.json(todos.rows);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
```

---

## 4. 🌐 Set Up the Frontend (React)

### ▶ Create the React app:

```bash
npx create-react-app client
cd client
npm install
```

### ▶ Build React components:

- `InputTodo.js` – for adding new todos
- `ListTodos.js` – for displaying todos
- `EditTodo.js` – for updating them

Use `fetch` or `axios` to connect the React app to your Express backend at `http://localhost:5000`.

---

## 5. 🔄 Run the App

### ▶ Start the backend:

```bash
cd server
node index.js
```

### ▶ Start the frontend:

```bash
cd client
npm start
```

Open your browser at `http://localhost:3000`.

---

## ✅ Features

- Add a new todo
- View all todos
- Edit a todo
- Delete a todo

Data is fully persistent using PostgreSQL on the backend.

---

## 📌 Notes

- Make sure the PostgreSQL service is running.
- If you see a password error, double-check the credentials and database name in your backend connection config.
- You can inspect or modify your database using pgAdmin at any time.

---

## 🙌 Author

Created by Suru Afariogun — as part of a full-stack practice project to integrate backend and frontend using PostgreSQL and modern JavaScript tools.
