🚀 Internship Assignment — Full Stack Application

Author: Deep Bendale

Role Applied: Backend Developer Intern

Tech Stack:
Spring Boot · PostgreSQL · React (Vite) · TailwindCSS · JWT · Axios · Swagger


📌 1. Project Overview

This project is a fully functional Full Stack Task Management Application featuring:

    -User Registration & Login
    
    -JWT Authentication & Role-Based Access (USER / ADMIN)
    
    -CRUD Operations for Tasks
    
    -PostgreSQL Database Integration
    
    -Data Validation & Centralized Error Handling
    
    -API Documentation via Swagger
    
    -React Frontend with TailwindCSS
    
    -Protected Dashboard (token-based access)
    
📁 2. Project Structure

          internship-assignment/
          │── backend/      # Spring Boot (API, JWT, PostgreSQL)
          │── frontend/     # React + Vite + TailwindCSS
          │── README.md
          │── SCALABILITY.md
          │── postman_collection.json

⚙️ 3. How to Run the Project (Local Setup)

    🧩 Backend Setup (Spring Boot + PostgreSQL)
    Requirements
    
    Java 17+
    PostgreSQL installed
    Maven (or use included wrapper)

    Step A: Configure PostgreSQL Database
      Edit the file:
      backend/src/main/resources/application.properties
    
      spring.datasource.url=jdbc:postgresql://localhost:5432/<your_db>
      spring.datasource.username=postgres
      spring.datasource.password=<your_password>
      spring.jpa.hibernate.ddl-auto=update
      spring.jpa.show-sql=true

    Step B: Start the Backend
      From project root:
        cd backend
        ./mvnw spring-boot:run
    
    
      Windows:
    
      mvnw.cmd spring-boot:run
    
    
    Backend Starts at:
    http://localhost:8080
    API Docs (Swagger):
    http://localhost:8080/swagger-ui.html


    🖥️ Frontend Setup (React + Vite + TailwindCSS)
        Requirements
        Node.js 18+
        npm
        
        Step A: Install Dependencies
          cd frontend
          npm install
    
    Step B: Start Development Server
      npm run dev
      
    Frontend runs at:
    http://localhost:5173

✅ 4. Features Implemented

    -Authentication
    -User Registration
    -User Login
    -JWT-based authentication
    -Password hashing using BCrypt
    
    🔑 Role-Based Access

          -ADMIN → can view all tasks
          -USER → can view only their tasks
          -Secured endpoints via Spring Security

🗂️ Task Management (CRUD)

        POST	/api/auth/register	Register user
        POST	/api/auth/login	Login user & receive JWT token
        GET	/api/tasks	Get tasks (USER: own, ADMIN: all)
        POST	/api/tasks	Create a new task
        GET	/api/tasks/{id}	Get task by ID
        PUT	/api/tasks/{id}	Update a task
        DELETE	/api/tasks/{id}	Delete a task

📘 5. API Documentation

    ✔️ Swagger UI
    http://localhost:8080/swagger-ui.html
    
👤 Author

Deep Bendale

    📧 Email: bendaledeep956@gmail.com
    🐙 GitHub: https://github.com/deepbendale
    🔗 LinkedIn: https://www.linkedin.com/in/deep-bendale-24433b251/
    
ThankYou!

🎯 This assignment implements all required features professionally, cleanly, and with industry-standard practices.
