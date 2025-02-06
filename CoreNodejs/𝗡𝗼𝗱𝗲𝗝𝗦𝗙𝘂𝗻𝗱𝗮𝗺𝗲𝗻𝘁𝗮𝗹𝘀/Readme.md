# Node.js Fundamentals - Getting Started

## 🚀 Let’s Learn Node.js!

### 📌 Table of Contents
1. [Introduction to Node.js](#introduction-to-nodejs)
2. [Node.js Versions](#nodejs-versions)
3. [The Node REPL](#the-node-repl)
4. [Node.js Modules](#nodejs-modules)

---

## 1️⃣ Introduction to Node.js
Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript outside the browser. It is widely used for building scalable network applications.

### ✨ Key Features of Node.js:
- Single-threaded, event-driven architecture
- Non-blocking I/O operations
- Built-in package manager (npm)
- Large ecosystem of libraries
- Ideal for building APIs and real-time applications

👉 [Learn More](https://nodejs.org/en/)

---

## 2️⃣ Node.js Versions
Node.js follows a release schedule that includes Long-Term Support (LTS) and Current versions. It is recommended to use an LTS version for production applications.

### 🔹 Checking Node.js Version:
Run the following command in your terminal to check your installed Node.js version:
```sh
node -v
```

### 🔹 Installing Node.js:
Visit the [official Node.js website](https://nodejs.org/en/download/) to download and install the latest version.

---

## 3️⃣ The Node REPL
REPL stands for **Read-Eval-Print Loop**, which allows you to interactively execute JavaScript code in the terminal.

### 🔹 Starting the REPL:
Open your terminal and type:
```sh
node
```
You should see a prompt (`>`), where you can enter JavaScript commands.

### 🔹 Example Usage:
```sh
> console.log("Hello, Node.js!");
Hello, Node.js!
```

### 🔹 Exiting the REPL:
Press `Ctrl + C` twice or type:
```sh
.exit
```

---

## 4️⃣ Node.js Modules
Modules are reusable pieces of code that help organize functionality into separate files. Node.js supports different types of modules:

### 🔹 Types of Modules:
- **Built-in Modules**: Provided by Node.js (e.g., `fs`, `http`, `path`)
- **Custom Modules**: User-defined modules
- **Third-party Modules**: Installed via npm (e.g., `express`, `lodash`)

### 🔹 Creating a Custom Module:
1. Create a file `math.js`:
```js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```
2. Import and use the module in another file:
```js
const math = require('./math');
console.log(math.add(5, 3)); // Output: 8
```

### 🔹 Real-World Project Problem:
**Project:** Building a Microservices-Based E-commerce Platform

**Problem:**
An e-commerce application requires multiple microservices (e.g., authentication, product catalog, payments). Instead of writing everything in one file, we need to modularize it:
- `auth.js` handles user authentication
- `products.js` manages product data
- `payments.js` handles transactions

By using modules, each service remains maintainable, reusable, and scalable.

🚀 Next, we will explore **File System (fs) Module**!

---

## 🎯 Next Steps
Now that you've set up Node.js and explored the REPL and modules, you're ready to dive deeper into:
- File System (fs) Module
- HTTP Server
- Asynchronous Programming

🚀 Happy Coding! 🎉
