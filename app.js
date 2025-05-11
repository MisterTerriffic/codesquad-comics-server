const express = require("express");
const app = express();
const PORT = 8080;

const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(morgan("combined"));
app.use(helmet());

const path = require("node:path");

app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded());

app.get("/", (request, response, next) => {
  response.status(200).json({
    success: { message: "This route points to the Home page" },
    statusCode: 200,
  });
});

app.get("/api/books", (request, response, next) => {
  response.status(200).json({
    success: { message: "This will send all of the book data" },
    statusCode: 200,
  });
});

app.get("/api/books/:id", (request, response, next) => {
  response.status(200).json({
    success: { message: "This will send a single book by its id" },
    statusCode: 200,
  });
});

app.get("/api/books/create/new", (request, response, next) => {
  response.status(201).json({
    success: { message: "This will create a new book" },
    statusCode: 201,
  });
});

app.get("/api/books/update/:id", (request, response, next) => {
  response.status(200).json({
    success: { message: "This will update a book by its id" },
    statusCode: 200,
  });
});

app.get("/api/books/delete/:id", (request, response, next) => {
  response.status(200).json({
    success: { message: "This will delete a book by its id" },
    statusCode: 200,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}.`);
});
