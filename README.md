Task Manager API
A robust REST API for task management, built with a layered architecture to ensure scalability and maintainability.

🚀 Tech Stack
Runtime: Node.js

Framework: Express

Language: JavaScript

Tooling: Nodemon (Development)

📂 Project Structure
Bash
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
└── utils/            # Reusable helper functions
🛣️ API Endpoints
Health Check
GET /api/health - Check server status.

Tasks
GET /api/tasks - Retrieve all tasks.

GET /api/tasks/:id - Retrieve a task by ID.

POST /api/tasks - Create a new task.

PUT /api/tasks/:id - Update an entire task.

PATCH /api/tasks/:id/status - Update only the task status.

DELETE /api/tasks/:id - Remove a task.

📋 Task Model
JSON
{
  "id": "17123456789",
  "title": "Learn Express",
  "description": "Build a REST API project",
  "status": "pending", // [pending, in_progress, done]
  "priority": "high",  // [low, medium, high]
  "createdAt": "2026-03-28T20:00:00.000Z",
  "updatedAt": "2026-03-28T20:00:00.000Z"
}
🛠️ Getting Started
1. Clone the repository
Bash
git clone <your-repository-url>
cd task-manager-api
2. Install dependencies
Bash
npm install
3. Run the project
Development Mode: npm run dev

Production Mode: npm start

The server runs on: http://localhost:3000

🏛️ Architecture Decisions
This project follows a layered architecture to separate responsibilities:

Routes: Define the available endpoints.

Controllers: Handle the HTTP request/response flow.

Services: Contain the core application logic.

Middlewares: Validate requests and centralize error handling.

⚠️ Current Limitations
Data is stored in memory (lost when the server restarts).

No authentication or authorization.

No database integration yet.

No automated tests yet.

🔮 Future Improvements
[ ] Add persistent storage with MongoDB or PostgreSQL.

[ ] Add Auth (JWT).

[ ] Add automated tests with Playwright or Supertest.

[ ] Add Swagger/OpenAPI documentation.

[ ] Dockerize the application.

## Roadmap

- [x] Build initial Express server
- [x] Add task CRUD operations
- [x] Add filtering by status and priority
- [x] Add request validation
- [x] Add centralized error handling
- [ ] Add automated tests
- [ ] Add persistent database
- [ ] Add authentication
- [ ] Add API documentation

🧠 What I Practiced
REST API design.

CRUD operations.

Layered backend architecture.

Request validation & Error handling.

Clean code practices and Git with atomic commits.

Author: David Sancez Tabarez