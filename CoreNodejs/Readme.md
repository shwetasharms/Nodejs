# NodeJS Fundamentals

Welcome to the NodeJS Fundamentals guide! This README covers the core concepts of Node.js, including working with global objects, modules, file systems, events, HTTP, buffers, and streams. Click on any topic in the Table of Contents to learn more about it, and use the "Back to top" button after each section to easily navigate back.

## Table of Contents

- [Global Objects in NodeJS](#global-objects-in-nodejs)
- [Modules](#modules)
- [NPM (Node Package Manager)](#npm-node-package-manager)
- [File System (fs) Module](#file-system-fs-module)
- [Events & The Event Emitter](#events--the-event-emitter)
- [HTTP Module](#http-module)
- [Buffer & Streams](#buffer--streams)

---

## Global Objects in NodeJS

Node.js provides a few global objects that are accessible anywhere in your application. These include:
- `__dirname`: The directory name of the current module.
- `__filename`: The file name of the current module.
- `module`: The current module and its metadata.

[Learn more about Global Objects](#global-objects-answer)

---

## Modules

Modules in Node.js help organize your code. There are two common types:
- **CommonJS Modules**: These use `require()` to import and `module.exports` to export.
- **ES6 Modules**: These use `import` and `export` keywords.

[Learn more about Modules](#modules-answer)

---

## NPM (Node Package Manager)

NPM is the default package manager for Node.js. It allows developers to easily share and install open-source packages.

[Learn more about NPM](#npm-answer)

---

## File System (fs) Module

The `fs` module allows you to work with the file system on your computer, such as reading and writing files. You can perform file operations in both synchronous and asynchronous ways.

- **Reading/Writing Files**: Manage files with ease using `fs.readFile()`, `fs.writeFile()`, and others.
- **File Streams**: Work with large files efficiently using streams.
- **Asynchronous vs. Synchronous**: Understand the difference between async and sync file operations.

[Learn more about the File System Module](#file-system-fs-module-answer)

---

## Events & The Event Emitter

Node.js has a built-in event-driven architecture. The `EventEmitter` class allows you to define and listen for custom events in your application.

- **Custom Events**: Define and emit custom events.
- **Handling Asynchronous Events**: Handle async operations effectively using events.

[Learn more about Events](#events-answer)

---

## HTTP Module

The `http` module allows you to create and manage HTTP servers. Learn how to handle requests (`req`) and responses (`res`) in Node.js applications.

[Learn more about the HTTP Module](#http-module-answer)

---

## Buffer & Streams

Buffers and streams are essential when dealing with data streams in Node.js.

- **Buffer**: Manage raw binary data.
- **Streams**: Handle data in chunks using `Readable`, `Writable`, `Duplex`, and `Transform` streams.
- **Stream Handling**: Implement piping and chunking for efficient data flow.

[Learn more about Buffers & Streams](#buffer--streams-answer)

---

# Answers

### Global Objects Answer

- **`__dirname`**: The directory name of the current module.
- **`__filename`**: The absolute file path of the current module.
- **`module`**: Represents the current module and allows exporting functions or objects to other files.

[Back to top](#nodejs-fundamentals)

---

### Modules Answer

- **CommonJS Modules**: Use `require()` to import and `module.exports` to export modules.
- **ES6 Modules**: Use `import` to import and `export` to export modules.

[Back to top](#nodejs-fundamentals)

---

### NPM Answer

- **NPM**: The default package manager for Node.js. It allows you to manage dependencies, publish your own packages, and install other packages with commands like `npm install`.

[Back to top](#nodejs-fundamentals)

---

### File System (fs) Module Answer

- **Reading/Writing Files**: `fs.readFile()` and `fs.writeFile()` for asynchronous file handling.
- **File Streams**: Use streams for working with large files (`fs.createReadStream()` and `fs.createWriteStream()`).
- **Asynchronous vs. Synchronous**: Asynchronous methods prevent blocking, while synchronous methods can block the event loop.

[Back to top](#nodejs-fundamentals)

---

### Events Answer

- **Custom Events**: Use `EventEmitter` to create and emit your own events.
- **Asynchronous Events**: Events in Node.js are naturally asynchronous and help handle long-running processes.

[Back to top](#nodejs-fundamentals)

---

### HTTP Module Answer

- **Creating an HTTP Server**: Use `http.createServer()` to set up a server. Handle requests (`req`) and send responses (`res`).

[Back to top](#nodejs-fundamentals)

---

### Buffer & Streams Answer

- **Buffer**: Node.js buffer class helps manage binary data.
- **Streams**: Use `Readable`, `Writable`, `Duplex`, and `Transform` streams for managing data flow.
- **Stream Handling**: Use `pipe()` and manage data in chunks for efficient processing.

[Back to top](#nodejs-fundamentals)
