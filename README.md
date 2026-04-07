# Task Manager API

A robust REST API for task management, built with a layered architecture to ensure scalability and maintainability.

## Tech Stack

- Node.js
- Express
- JavaScript
- Nodemon (Development)

---

## Project Structure

```bash
src/
├── app.js            # Express configuration
├── server.js         # Server entry point
├── constants/        # Domain constant values
├── controllers/      # HTTP request/response handlers
├── data/             # Volatile storage (In-memory)
├── errors/           # Centralized error handling
├── middlewares/      # Validations and intermediate functions
├── routes/           # API route definitions
├── services/         # Business logic
└── utils/            # Reusable helper logic

```
---

## API Endpoints

### Health Check
- GET /api/health

### Tasks
- GET /api/tasks
- GET /api/tasks/:id
- POST /api/tasks
- PUT /api/tasks/:id
- PATCH /api/tasks/:id/status
- DELETE /api/tasks/:id

---


## Task Model

```bash
{
  "id": "17123456789",
  "title": "Learn Express",
  "description": "Build a REST API project",
  "status": "pending",
  "priority": "high",
  "createdAt": "2026-03-28T20:00:00.000Z",
  "updatedAt": "2026-03-28T20:00:00.000Z"
}

```
---

## Getting Started

### 1. Clone the repository
git clone <your-repository-url>
cd task-manager-api

### 2. Install dependencies
npm install

### 3. Run the project
- Development mode: npm run dev
- Production mode: npm start

> The server runs on: http://localhost:3000

---

## Architecture Decisions

This project follows a layered architecture to improve readability, maintainability, and separation of concerns:

- Routes: Define the available endpoints.
- Controllers: Handle HTTP request/response flow.
- Services: Contain the core application logic.
- Middlewares: Validate requests and centralize error handling.
- Constants: Centralize domain values.
- Utilities: Provide reusable helper logic.

---

## Current Limitations
- Data is stored in memory (lost when the server restarts).
- No authentication or authorization.
- No database integration yet.
- No automated tests yet.

## Future Improvements
- [ ] Add persistent storage with MongoDB or PostgreSQL.
- [ ] Add authentication and authorization.
- [ ] Add automated tests with Playwright or Supertest.
- [ ] Add pagination and sorting.
- [ ] Dockerize the application.

---

## What I Practiced
- REST API design and CRUD operations.
- Layered backend architecture.
- Request validation and Error handling.
- Clean code practices and Git with atomic commits.

Author: David Sancez Tabarez