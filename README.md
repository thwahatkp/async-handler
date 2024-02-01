# `express-error-catcher`

The `express-error-catcher` npm package provides a convenient solution for managing async/await errors in Node.js Express applications. The package is designed with simplicity in mind. Below are instructions on how to integrate and utilize `express-error-catcher` in your projects.

## Why Use `express-error-catcher`?

- Elimination of the need for extensive try-catch blocks in your asynchronous code.
- You can keep your route handlers clean and free from error-handling clutter.
- Enhances the readability of your code.
- Streamlines the development process.

## Installation

To install `express-error-catcher`, use the following npm command:

```bash
npm install express-error-catcher
```

## Example

```js
import express from "express";
import {
  asyncErrorHandler,
  error,
  Response,
  Error,
} from "express-error-catcher";

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
