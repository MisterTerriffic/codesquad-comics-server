const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
    // response.send("This will send all of the book data");
    response.status(200).json({ 
        success: { message: "This will send all of the book data"},
        statusCode: 200
  });
});

router.get("/:id", (request, response, next) => {
    // response.send("This will send a single book by its id");
    response.status(200).json({ 
        success: { message: "This will send a single book by its id"},
        statusCode: 200
  });
  });
  
router.post("/create/new", (request, response, next) => {
    // response.send("This will create a new book");
    response.status(201).json({ 
        success: { message: "This will create a new book"},
        statusCode: 201
  });
  });
  
  router.put("/update/:id", (request, response, next) => {
    // response.send("This will update a book by its id");
    response.status(200).json({ 
        success: { message: "This will update a book by its id"},
        statusCode: 200
  });
  });
  
  router.delete("/delete/:id", (request, response, next) => {
    // response.send("This will delete a book by its id");
    response.status(200).json({ 
        success: { message: "This will delete a book by its id"},
        statusCode: 200
  });
  });
  



module.exports = router;