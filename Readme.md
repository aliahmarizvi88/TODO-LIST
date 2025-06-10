# TODO LIST (MERN Stack)

A full-featured TODO List application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, task management, and a modern UI.

---

## Features

- **User Authentication:** Sign up, log in, and log out securely with hashed passwords and JWT-based sessions.
- **Personalized Tasks:** Each user sees only their own tasks.
- **CRUD Operations:** Add, update, complete, delete, and restore tasks.
- **Task Status:** Tasks can be marked as Pending, Complete, or Deleted.
- **Task Priority:** Set priority as Low, Medium, or High.
- **Search & Filter:** Universal search bar for filtering tasks in all views.
- **Responsive UI:** Clean, modern interface with Tailwind CSS.
- **Confirmation Dialogs:** For destructive actions like deleting all tasks.
- **Protected Routes:** Only authenticated users can access task management.

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios, Formik, Yup, React Router
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT, Argon2, cookie-parser, CORS

---

## Folder Structure

```
TODO LIST/
├── backend/
│   ├── controllers/
│   │   ├── listController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── userMiddleware.js
│   ├── models/
│   │   ├── list.js
│   │   └── user.js
│   ├── routes/
│   │   ├── listRouter.js
│   │   └── userRouter.js
│   ├── Services/
│   │   └── UserService.js
│   ├── config/
│   │   └── connection.js
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTask.jsx
│   │   │   ├── UpdateTask.jsx
│   │   │   ├── List.jsx
│   │   │   ├── Deleted.jsx
│   │   │   ├── Completed.jsx
│   │   │   ├── Pending.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Nav.jsx
│   │   │   └── Search.jsx
│   │   ├── context/
│   │   │   ├── userContext.jsx
│   │   │   └── ListContext.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   └── SignUp.jsx
│   │   └── App.jsx
│   └── ...
├── .env
├── package.json
└── Readme.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-list-mern.git
cd todo-list-mern
```

### 2. Backend Setup

```bash
cd backend
npm install
# Create a .env file with your MongoDB URI and JWT_SECRET
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 4. Environment Variables

Create a `.env` file in `/backend`:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Usage

- **Sign Up:** Register a new account.
- **Login:** Access your personal task dashboard.
- **Add Task:** Create new tasks with a name, date, and priority.
- **Update Task:** Edit any task using the update (pencil) button.
- **Complete Task:** Mark tasks as complete with the checkbox.
- **Delete Task:** Soft-delete tasks (move to Deleted).
- **Restore Task:** Restore deleted tasks from the Deleted tab.
- **Delete All:** Permanently remove all deleted tasks with confirmation.
- **Search:** Use the search bar to filter tasks by name.

---

## API Endpoints

### User

- `POST /user/signup` – Register a new user
- `POST /user/login` – Login and receive a JWT cookie
- `POST /user/logout` – Logout and clear cookie

### Tasks

- `GET /displayTask` – Get all tasks for the logged-in user
- `POST /addTask` – Add a new task
- `PATCH /updateTask` – Update a task
- `DELETE /deleteTask` – Delete all tasks with status "Deleted"

---

## Security

- Passwords are hashed with Argon2.
- JWT tokens are stored in HTTP-only cookies.
- All task routes are protected and require authentication.

---

## Customization

- You can easily add more fields to tasks or users.
- The universal Search component can be reused in any list view.
- Tailwind CSS makes UI customization easy.

---
