# `async-handler`

The `async-handler` npm package provides a convenient solution for managing async/await errors in Node.js Express applications. The package is designed with simplicity in mind. Below are instructions on how to integrate and utilize `async-handler` in your projects.

## Why Use `async-handler`?

- Elimination of the need for extensive try-catch blocks in your asynchronous code.
- You can keep your route handlers clean and free from error-handling clutter.
- Enhances the readability of your code.
- Streamlines the development process.

## Installation

To install `async-handler`, use the following npm command:

```bash
npm install async-handler
```

## Example

```js
import express from "express";
import { asyncErrorHandler, Response, Error } from "async-handler";

const app = express();

// Error middleware for asyncErrorHandler to work
app.use(error);

// Example route with asyncErrorHandler
app.get(
  "/name",
  asyncErrorHandler((req) => {
    // Throwing an error
    throw Error("Error while retrieving name", 500);

    // Returning a response
    return Response("Successfully retrieved name", { name: "Daisy" }, 200);
  })
);

// Start the Express app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## How does this work?
