
# 🤫 Silent Voice: Anonymous Grievance Management System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

Silent Voice is a secure, full-stack platform designed to facilitate anonymous grievance submission, tracking, and resolution within institutional environments. Engineered with a focus on data integrity, scalable architecture, and efficient workflows, the system ensures that user concerns are routed and resolved securely.

## ✨ Core Features

*   **Secure Anonymity:** Implements advanced routing and database structuring to ensure complete user privacy during the reporting process.
*   **Role-Based Access Control (RBAC):** Secure JWT-based authentication and authorization handling distinct user tiers (Students/Staff vs. Administrators).
*   **Real-Time Status Tracking:** State-managed UI components for seamless updates on grievance lifecycles (Submitted ➔ In-Progress ➔ Resolved).
*   **RESTful API Architecture:** Modular controllers and optimized routing designed for efficient, stateless client-server communication.
*   **High-Performance Data Management:** Optimized MySQL relational queries ensuring fast retrieval, strict referential integrity, and long-term scalability.

## 🛠️ Technology Stack

**Frontend:**
*   **React.js:** Component-driven UI development.
*   **State Management:** React Context API / Custom Hooks.

**Backend:**
*   **Node.js & Express.js:** Scalable server architecture and REST API routing.
*   **Authentication:** JSON Web Tokens (JWT) & bcrypt for password hashing.

**Database:**
*   **MySQL:** Relational database optimized for structured grievance logging and secure user management.

## 🚀 Installation & Local Setup

### Prerequisites
*   [Node.js](https://nodejs.org/) (v14 or higher)
*   [MySQL Server](https://www.mysql.com/) installed and running locally

### 1. Clone the Repository
```bash
git clone [https://github.com/YourUsername/silent-voice.git](https://github.com/YourUsername/silent-voice.git)
cd silent-voice

```

### 2. Database Configuration

1. Open your MySQL CLI or Workbench.
2. Create a new database: `CREATE DATABASE silent_voice_db;`
3. Execute the SQL scripts located in the `/database/schema.sql` file to build the required tables.

### 3. Backend Setup

```bash
cd backend
npm install

```

Create a `.env` file in the root of the `backend` directory and configure the following variables:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=silent_voice_db
JWT_SECRET=your_super_secret_jwt_key

```

Start the backend development server:

```bash
npm run dev

```

### 4. Frontend Setup

Open a new terminal window:

```bash
cd frontend
npm install

```

Start the React development server:

```bash
npm start

```

The application will now be running at `http://localhost:3000`.

## 🔌 API Endpoints Reference

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| `POST` | `/api/auth/register` | Register a new admin/user | Public |
| `POST` | `/api/auth/login` | Authenticate and receive a JWT | Public |
| `POST` | `/api/grievances` | Submit a new anonymous grievance | Authenticated |
| `GET` | `/api/grievances/my-reports` | Retrieve user-specific tracking statuses | Authenticated |
| `GET` | `/api/admin/grievances` | Retrieve all institutional grievances | Admin Only |
| `PUT` | `/api/admin/grievances/:id` | Update the resolution status of a grievance | Admin Only |

## 🗄️ Core Database Schema

* **Users Table:** `id`, `username`, `password_hash`, `role`, `created_at`
* **Grievances Table:** `id`, `tracking_id`, `category_id`, `description`, `status`, `submitted_at`, `resolved_at`
* **Categories Table:** `id`, `department_name`, `assigned_admin_id`

## 📄 License

This project is licensed under the MIT License.

