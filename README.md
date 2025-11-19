Internship Assignment — Full Stack Application

Author: Deep Bendale
Role Applied: Backend Developer Intern
Tech Stack: Spring Boot · PostgreSQL · React (Vite) · TailwindCSS · JWT · Axios · Swagger

1. Project Overview

This assignment implements a scalable REST API with:
  -User Registration & Login.
  -JWT Authentication & Role-based Access (USER / ADMIN).
  -CRUD for Tasks (secondary entity).
  -Database integration (PostgreSQL).
  -Proper Validation & Error Handling.
  -Swagger API Documentation.
  -Simple React Frontend to test all APIs.
  -Protected Dashboard (JWT required).

2. Frontend and backend are placed in separate folders:
    internship-assignment/
    │── backend/   → Spring Boot (API, JWT, DB)
    │── frontend/  → React + Vite + Tailwind UI
    │── README.md
    │── SCALABILITY.md
    │── postman_collection.json

3. How to Run the Project (Local Setup)
   Backend Setup (Spring Boot + PostgreSQL)
   Requirements:
    → Java 17+
    → PostgreSQL installed
    → Maven installed (or wrapper included)

   a. Configure Database
      Update backend/src/main/resources/application.properties:
      spring.datasource.url=jdbc:postgresql://localhost:5432/<your_db>
      spring.datasource.username=postgres
      spring.datasource.password=<your_password>
      
      spring.jpa.hibernate.ddl-auto=update
      spring.jpa.show-sql=true
   
   b. Start Backend
    From project root:
    cd backend
    ./mvnw spring-boot:run
    # Windows:
    mvnw.cmd spring-boot:run
    
    Backend starts on:
    🔗 http://localhost:8080
    
    API Documentation (Swagger UI):
    🔗 http://localhost:8080/swagger-ui.html

   c. Frontend Setup (React + Vite + TailwindCSS)

      Requirements:
      → Node 18+
      → npm
      
      1. Install dependencies
      cd frontend
      npm install
      
      2. Start frontend
      npm run dev
      
      Frontend runs on:
      🔗 http://localhost:5173

4. Features Implemented
   a. Authentication
      -Register new users
      -Login users
      -JWT-based session (stored client-side)
      -Password hashing (BCrypt)

   b. Role-based Access
      -ADMIN can see all tasks
      -USER can see only their own tasks
      -Protected endpoints using Spring Security

5. Task CRUD
   | Method | Endpoint | Description |
   |--------|----------|-------------|
   | POST | /api/auth/register | Register new user |
   | POST | /api/auth/login | Login user & get JWT token |
   | GET | /api/tasks | Get tasks (USER: own, ADMIN: all) |
   | POST | /api/tasks | Create new task |
   | GET | /api/tasks/{id} | Get task by ID |
   | PUT | /api/tasks/{id} | Update task |
   | DELETE | /api/tasks/{id} | Delete task |
   
6. API Documentation
   a. Swagger UI
      http://localhost:8080/swagger-ui.html
   
   b. Postman Collection
      Available as:
      postman_collection.json (included in repo)

Author: Deep Bendale
  Email : bendaledeep956@gmail.com 
  GitHub : https://github.com/deepbendale
  LinkedIn : https://www.linkedin.com/in/deep-bendale-24433b251/

Thank You!
This assignment implements all required features professionally and cleanly.







