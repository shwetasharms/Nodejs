# Contact Manager App

A full-featured **Contact Manager App** built using **Node.js**, **Express**, **MongoDB**, and **Mongoose** with complete **authentication**, **authorization**, and **CRUD operations**.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* Thunder Client / Postman

---

## 📌 Project Roadmap

1. Express Project Setup
2. Create Express Server
3. Thunder Client Testing
4. Express Router Setup
5. Error Handling & Async Middleware
6. Express Middleware
7. MongoDB Setup
8. Mongoose Schema
9. CRUD API
10. User Authentication
11. Registration & Login API
12. Controller & DB Operations
13. Password Hashing & Comparing
14. Sign/Verify JWT Tokens
15. Handle Mongoose Relationships
16. Protected Routes
17. User Authorization
18. API Testing

---

## 📂 Project Setup

### 1. Initialize Project

```bash
npm init -y
```

### 2. Install Dependencies

```bash
npm install express mongoose dotenv bcryptjs jsonwebtoken
npm install --save-dev nodemon
```

### 3. Update `package.json` Scripts

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### 4. Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Basic Server Setup in `server.js`

```js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 6. Run the App

```bash
npm run dev
```

Here is your content formatted into a proper `README.md` file:

---

````md
# Contact Manager App

## Roadmap

1. Express Project setup  
2. Create Express Server  
3. Thunder Client Server  
4. Express Router Setup  
5. Error Handling, Async Handler  
6. Express Middleware  
7. MongoDB  
8. I use the Thunder Client for API testing

---

## Thunder Client

Thunder Client is a lightweight and user-friendly REST API client extension for Visual Studio Code.  
It allows developers to test HTTP requests directly inside the editor without switching to another app like Postman.

---

## Basic API Setup in `server.js`

```js
const express = require('express');
const app = express();
const PORT = 5000;

// Basic GET route for API
app.get('/api/contacts', (req, res) => {
  res.send("message");
  res.json({ message: "Hello world" });
  res.status(200).json({ message: "Hello world" });
});

// Use route middleware (to be added later)
app.use();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
````

---

## Creating Routes Folder Structure

```
project-root/
│
├── routes/
│   └── contactRoutes.js
```

---

## `contactRoutes.js`

```js
const express = require('express');
const router = express.Router();

router.route('/api/contacts').get((req, res) => {
  res.send("message");
  res.json({ message: "Hello world" });
  res.status(200).json({ message: "Hello world" });
});

router.route('/').post((req, res) => {
  res.send("message");
  res.json({ message: "Hello world" });
  res.status(200).json({ message: "Create new contact" });
});

router.route('/:id').get((req, res) => {
  res.send("message");
  res.json({ message: "Hello world" });
  res.status(200).json({ message: "Get contacts for id {req.params.id}" });
});

router.route('/:id').put((req, res) => {
  res.send("message");
  res.json({ message: "Hello world" });
  res.status(200).json({ message: "Update contacts for id {req.params.id}" });
});

router.route('/:id').delete((req, res) => {
  res.send("message");
  res.json({ message: "Hello world" });
  res.status(200).json({ message: "Delete contact for id {req.params.id}" });
});

module.exports = router;
```
OR 

```js
const express = require('express');
const router = express.Router();

// GET request for /api/contacts
router.route('/api/contacts').get((req, res) => {
  // Only one response can be sent, so use one method below:
  res.status(200).json({ message: "Hello world" });
});

module.exports = router;
```

---

> 🔄 **Next Step:**
> Don't forget to import and use the `contactRoutes` in your `server.js` using:

```js
const contactRoutes = require('./routes/contactRoutes');
app.use(contactRoutes);
```

---

```

Let me know if you also want this structured in a real project layout with actual files or folder structure!
```


---

## 📁 Folder Structure

```
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── server.js
├── .env
└── package.json
```

---

## ✅ Features

* User Registration & Login
* Password Hashing using bcrypt
* JWT Token Authentication
* Protected Routes with Middleware
* CRUD APIs for managing contacts
* MongoDB with Mongoose Schema & Relationships

---

## 🔌 API Testing

Use **Thunder Client** or **Postman** to test all API routes (auth, contacts, etc.).

---

## 🔐 Authentication & Authorization

* JWT-based Authentication Middleware
* Role-based Authorization Support

---

## 🛠️ To-Do Enhancements

* Input validation with Joi or express-validator
* Pagination & Search Filters
* Swagger API Documentation
* CI/CD Setup

---

## 📃 License

MIT License
