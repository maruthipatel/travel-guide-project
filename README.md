Travel Diary Platform

the travel dairy platform is a web application backend API built node js, express js, and mongo db. It allows users to create, read, update, and delete dairy entries for their travel experiences. The project demonstrates skill in building a REST ful API using nodejs and express.js , integrating oops concepts and interacting a mongodb database

Technology Stack:
-node js
-express js
-mongo db
-mongoose (mongodb odm)
-bcrypt(password hashing)
-jsonwebtoken(jwt authentication)

Project Structure
The project follows a typical MVC (Model-View-Controller) architecture:

controllers: Contains controller logic for handling HTTP requests.
middleware: Contains authentication middleware.
models: Contains Mongoose models for defining data schema.
routes: Contains route definitions for different API endpoints.
index.js: Entry point of the application.
API Documentation
Authentication
POST /api/auth/register: Register a new user.

Request Body: { "username": "<username>", "password": "<password>" }
Response: { "message": "User registered successfully" }
POST /api/auth/login: Login with existing user credentials.

Request Body: { "username": "<username>", "password": "<password>" }
Response: { "token": "<jwt-token>" }
Diary Entries
POST /api/diary: Create a new diary entry.

Request Body: { "title": "<title>", "description": "<description>", "location": "<location>" }
Response: { "message": "Diary entry created successfully", "diaryEntry": { ... } }
GET /api/diary/:id: Read a specific diary entry.

Response: { ...diary entry details... }
PUT /api/diary/:id: Update a specific diary entry.
Request Body: { "title": "<new-title>", "description": "<new-description>", "location": "<new-location>" }
Response: { ...updated diary entry details... }
DELETE /api/diary/:id: Delete a specific diary entry.

Response: { "message": "Diary entry deleted successfully" }
Deployment
The API can be deployed to a cloud platform like Heroku or AWS for production use. Ensure that environment variables are set up correctly for the deployed environment.
