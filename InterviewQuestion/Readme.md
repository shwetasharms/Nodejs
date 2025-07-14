# Node.js Interview Preparation Guide

Welcome to the Node.js Interview Preparation Guide! This README covers important concepts such as Node.js fundamentals, asynchronous programming, the event loop, modules, file systems, and streams. Click on any topic in the Table of Contents to explore the detailed answers, and use the "Back to top" button after each section to navigate back easily.

---

## Table of Contents

1. [Node.js Fundamentals](#nodejs-fundamentals)
2. [Asynchronous Programming](#asynchronous-programming)
3. [Event Loop](#event-loop)
4. [Modules and Packages](#modules-and-packages)
5. [File System and Streams](#file-system-and-streams)

---

# 1️⃣ Node.js Fundamentals

### What is Node.js, and how does it work?

Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows JavaScript to be executed server-side, enabling full-stack development with one language. Node.js uses an event-driven, non-blocking I/O model, making it efficient for handling real-time applications and heavy I/O operations.

[Read more about Node.js](https://nodejs.org/en/docs)

[Back to top](#table-of-contents)

---

### What is Runtime Enviroment ?
The Nodejs runtime environment is the software stack responsible for  installing your  web services code and  its dependencies and running  your services 

[Read more about Node.js](https://nodejs.org/en/docs)

[Back to top](#table-of-contents)

---

### How is it different from JavaScript in the browser??

ode.js is a runtime environment that allows JavaScript to be executed on the server-side. Unlike browser JavaScript, which interacts with the DOM and handles UI, Node.js can access the file system, network, and OS using built-in modules.

[Read more about Node.js](https://nodejs.org/en/docs)

[Back to top](#table-of-contents)

---

### Explain the event-driven, non-blocking I/O model in Node.js.

In Node.js, an event-driven architecture means actions (like HTTP requests) trigger events, and the event loop handles them asynchronously. The non-blocking I/O model ensures that operations, such as reading from a file, don't block the execution of the rest of the code. Instead, callbacks are used to handle the result once the operation completes.

[Read more about Event-driven I/O](https://nodejs.org/en/docs)

[Back to top](#table-of-contents)

---

### How does Node.js differ from traditional web servers like Apache or Nginx?

Traditional web servers like Apache and Nginx are multi-threaded, meaning each request spawns a new thread. In contrast, Node.js is single-threaded and handles multiple requests via its event loop. This architecture allows Node.js to handle high volumes of concurrent connections with lower resource overhead.

[Read more about Node.js vs. Apache](https://nodejs.org/en/docs)

[Back to top](#table-of-contents)

---

### How does the V8 engine work in Node.js?

The V8 engine is Google's open-source JavaScript engine that powers Node.js. It compiles JavaScript code directly into machine code, enabling faster execution. Node.js uses the V8 engine to execute JavaScript code on the server side.

[Read more about V8 engine](https://v8.dev/)

[Back to top](#table-of-contents)

---

### What is the role of the package.json file in a Node.js project?

The `package.json` file is the manifest of a Node.js project. It includes important metadata like the project name, version, dependencies, and scripts. This file is essential for managing project dependencies via npm or yarn.

[Read more about package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

[Back to top](#table-of-contents)

---

### Explain the purpose and use of npm (Node Package Manager).

npm is the default package manager for Node.js, allowing developers to install, update, and manage project dependencies. It also serves as a platform for publishing and sharing reusable code packages.

[Read more about npm](https://www.npmjs.com/)

[Back to top](#table-of-contents)

---

### What is the difference between require() and import?

require() is used in CommonJS modules (default in Node.js).
import is used in ES Modules (ESM). Requires "type": "module" in package.json.

[Read more about npm](https://www.npmjs.com/)

[Back to top](#table-of-contents)

---

### What are the global objects in Node.js?

Examples include:

- __dirname, __filename
- process
- global
- Buffer
- setTimeout, setInterval

[Read more about npm](https://www.npmjs.com/)

[Back to top](#table-of-contents)

---

### What is the use of __dirname and __filename?

Examples include:

- __dirname: Directory path of the current module.

- __filename: Full path of the current module.

[Read more about npm](https://www.npmjs.com/)

[Back to top](#table-of-contents)

---

### Is Node.js single-threaded?

 Yes, Node.js runs on a single-threaded event loop architecture using non-blocking I/O operations. However, it can utilize multiple threads internally through the libuv library for tasks like file I/O and cryptography.

[Read more about npm](https://www.npmjs.com/)

[Back to top](#table-of-contents)

---

### What kind of API function is supported by Node.js?

 Node.js supports asynchronous, non-blocking APIs, typically using callbacks, promises, or async/await syntax.

[Read more about npm](https://www.npmjs.com/)

[Back to top](#table-of-contents)

---

### How does Node.js handle concurrency despite being single-threaded?

 It uses an event-driven architecture and non-blocking I/O via the event loop. Background tasks are delegated to worker threads or the thread pool (libuv), and callbacks are registered to execute when tasks complete.

[Read more about npm](https://www.npmjs.com/)

[Back to top](#table-of-contents)

---

### What is control flow in Node.js?

 Control flow refers to how code execution is managed in asynchronous operations—commonly handled using callbacks, promises, or async/await to control execution order and handle errors.

[Read more about npm](https://www.npmjs.com/)

[Back to top](#table-of-contents)

---

### What is body-parser in Node.js?

 body-parser is middleware that parses incoming request bodies (JSON, URL-encoded, etc.) before the handlers access them, making req.body available.

[Read more about npm](https://www.npmjs.com/)

[Back to top](#table-of-contents)

---

### What is CORS in Node.js?

 CORS (Cross-Origin Resource Sharing) is a mechanism to allow or restrict resources on a web server to be requested from another domain. The cors middleware handles this configuration in Node.js.

[Read more about npm](https://www.npmjs.com/)

[Back to top](#table-of-contents)

---

# 2️⃣ Asynchronous Programming

### How do you handle asynchronous code in Node.js?

Asynchronous code in Node.js is primarily handled using callbacks, Promises, and `async/await`. These methods ensure that long-running operations (e.g., reading files or making HTTP requests) don’t block the execution of other code.

[Read more about asynchronous programming](https://nodejs.org/en/docs)

[Back to top](#table-of-contents)

---

### What is the difference between synchronous and asynchronous functions?

- Synchronous: Executes line by line and blocks further execution.

- Asynchronous: Non-blocking and handles tasks like API calls or file reads using callbacks, promises, or async/await.

[Read more about asynchronous programming](https://nodejs.org/en/docs)

[Back to top](#table-of-contents)

---

### What are callbacks, and how do they work in Node.js?

Callbacks are functions passed as arguments to other functions. In Node.js, callbacks are used to handle asynchronous operations. Once the async operation is completed, the callback is invoked with the result or an error.

[Read more about callbacks](https://nodejs.org/en/docs)

[Back to top](#table-of-contents)

---

### Explain Promises and how they improve asynchronous code handling.

Promises provide a cleaner way to handle asynchronous operations. They represent a value that will be resolved or rejected in the future, helping avoid "callback hell" by chaining `.then()` and `.catch()` methods for success and error handling.

[Read more about Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[Back to top](#table-of-contents)

---

### How does async/await work in Node.js?

`async/await` is syntactic sugar built on Promises, allowing for cleaner, more readable asynchronous code. By using `await`, you can "pause" the execution of the function until the Promise is resolved, making the code appear synchronous while remaining non-blocking.

[Read more about async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

[Back to top](#table-of-contents)

---

### What is "callback hell," and how can you avoid it?

"Callback hell" occurs when multiple nested callbacks make the code hard to read and maintain. It can be avoided by using Promises or `async/await` to write more structured and readable asynchronous code.

[Read more about callback hell](https://callbackhell.com/)

[Back to top](#table-of-contents)

---

# 3️⃣ Event Loop

### Describe the Node.js event loop.

The event loop is a core mechanism in Node.js that handles asynchronous tasks. It allows Node.js to perform non-blocking I/O operations by offloading tasks like I/O operations, timers, and HTTP requests to the system, which reports back once they're complete.

[Read more about the Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

[Back to top](#table-of-contents)

---

### How does the event loop manage asynchronous operations in Node.js?

The event loop manages asynchronous operations by executing callbacks in phases. Tasks like I/O operations are handed off to the OS, and when complete, the associated callbacks are placed in the callback queue for execution in the next phase of the event loop.

[Read more about asynchronous operations](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

[Back to top](#table-of-contents)

---

### What are the phases of the event loop?

The event loop has several phases, including timers, I/O callbacks, idle, polling, and check. Each phase processes specific types of callbacks, ensuring non-blocking execution of tasks.

[Read more about the event loop phases](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

[Back to top](#table-of-contents)

---

### How does the event loop affect performance in a Node.js application?

Efficient use of the event loop can significantly improve the performance of a Node.js application. Poor handling of asynchronous tasks, like blocking the event loop with heavy computation, can degrade performance, leading to slower response times.

[Read more about event loop performance](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

[Back to top](#table-of-contents)

---

# 4️⃣ Modules and Packages

### What are Node.js modules, and how do you create them?

Modules in Node.js are reusable blocks of code that can be imported and exported. You create modules using the `module.exports` object to export functionality and `require()` to import them into other files.

[Read more about modules](https://nodejs.org/api/modules.html)

[Back to top](#table-of-contents)

---

### Explain the difference between CommonJS and ES6 modules.

CommonJS modules use `require()` and `module.exports`, while ES6 modules use `import` and `export`. ES6 modules offer better static analysis and support for tree-shaking, making them more efficient in modern applications.

[Read more about module systems](https://nodejs.org/api/esm.html)

[Back to top](#table-of-contents)

---

### How does the module caching mechanism work in Node.js?

When a module is first required, Node.js caches the module. Subsequent calls to `require()` will return the cached instance rather than re-executing the module code. This improves performance by avoiding redundant execution.

[Read more about module caching](https://nodejs.org/api/modules.html#modules_caching)

[Back to top](#table-of-contents)

---

### What are some commonly used Node.js built-in modules?

Commonly used built-in modules include:
- `http`: To create servers.
- `fs`: To handle file operations.
- `path`: To handle file paths.
- `events`: To manage event-driven programming.

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

# 5️⃣ File System and Streams

### How do you handle file operations (read, write, delete) in Node.js?

Node.js provides the `fs` module to handle file operations like reading (`fs.readFile()`), writing (`fs.writeFile()`), and deleting (`fs.unlink()`). These operations can be done both synchronously and asynchronously.

[Read more about file operations]

---

# ⚙️ Intermediate-Level 

### What is middleware in Node.js (Express)?

 Middleware functions have access to req, res, and next(). They are used for logging, authentication, error handling, etc.

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### WWhat are streams in Node.js?

 Streams are used to handle reading/writing files or data in chunks. Types:

 - Readable
 - Writable
 - Duplex (both read and write)
 - Transform (e.g., compression)

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### What is a buffer in Node.js?

 A buffer stores binary data in memory outside the V8 heap. It’s used when working with file systems, TCP streams, etc.

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### How does the fs module work?

 It provides functions to interact with the file system:
 const fs = require('fs');
 fs.readFile('file.txt', 'utf8', (err, data) => {});

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### How do you handle errors in Node.js?

 - For sync code: use try...catch
 - For async callbacks: check err argument
 - For promises: use .catch() or try/catch with async/await

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### What are Promises?

 Promises represent the future value of an asynchronous operation. They have .then() and .catch() methods and can be used with async/await.

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)
---

### Difference between process.nextTick() and setImmediate()?

 - process.nextTick(): Executes before any I/O events.
 - setImmediate(): Executes in the next iteration of the event loop.

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### What are environment variables and how are they used?

 process.env.PORT
 Stored in .env files and loaded via dotenv package.

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)
---

### How do you handle file uploads?

 const multer = require('multer');
 const upload = multer({ dest: 'uploads/' });

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)
---

### Difference between spawn, exec, and fork?

 - spawn: Launches a process with streaming output.
 - exec: Buffers the entire output (good for small data).
 - fork: Used for spawning new Node.js processes that communicate via IPC.

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)
---

### What is clustering in Node.js?

 - Clustering allows Node.js to use multiple CPU cores to handle more concurrent connections using the cluster module.

[Read more about built-in modules](https://nodejs.org/api/)

[Back to top](#table-of-contents)
---

# ⚙️ Advanced-Level

### How does the Event Loop work internally with microtasks and macrotasks?

 - Microtasks (e.g., Promises) are processed after each phase.

 - Macrotasks (e.g., setTimeout) are handled by phases.
  The loop checks the queue and processes tasks accordingly.

[Read more](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### How would you scale a Node.js app for 1 million users?

 - Use load balancing and clustering.
 - Deploy multiple instances via PM2 or Docker.
 - Use a reverse proxy (e.g., Nginx).
 - Optimize DB access and use caching (Redis).

[Read more](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### What is a memory leak and how do you find one?

 A memory leak occurs when memory that is no longer needed isn’t released. Tools like Chrome DevTools, heapdump, and clinic.js help detect it.

[Read more](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### How do you optimize Node.js app performance?

 - Use async operations
 - Avoid blocking the event loop
 - Use caching (Redis, memory)
 - Minimize database queries
 - Monitor performance (New Relic, PM2, etc.)

[Read more](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### What are worker threads?

 They enable true parallelism in Node.js. Useful for CPU-intensive tasks that can’t be efficiently handled by the event loop.

[Read more](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### Security best practices in Node.js?

 - Validate and sanitize input
 - Use HTTPS
 - Prevent SQL/NoSQL injection
 - Use helmet for HTTP headers
 - Avoid eval()
 - Use environment variables for secrets

[Read more](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### How do you manage sessions and authentication?

 - Use express-session, passport.js, or JWT
 - Store session in Redis or DB for scaling
 - Secure cookies with HttpOnly and Secure flags

[Read more](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### How to structure a large-scale Node.js project?

 - /controllers
 - /models
 - /routes
 - /middleware
 - /services
 - /utils

[Read more](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### How would you implement rate limiting?

 Use packages like express-rate-limit to prevent abuse:
 const rateLimit = require('express-rate-limit');
 app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

[Read more](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### Have you implemented caching?

 Yes, using Redis for:
 - API response caching
 - Session storage
 - Avoiding duplicate DB hits

[Read more](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---

### Have you implemented caching?

 Yes, using Redis for:
 - API response caching
 - Session storage
 - Avoiding duplicate DB hits

[Read more](https://nodejs.org/api/)

[Back to top](#table-of-contents)

---
