const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
    response.send("This will send all of the book data");
  });
  
router.get("/:id", (request, response, next) => {
    response.send("This will send a single book by its id");
  });
  
router.post("/create/new", (request, response, next) => {
    response.send("This will create a new book");
  });
  
  router.put("/update/:id", (request, response, next) => {
    response.send("This will update a book by its id");
  });
  
  router.delete("/delete/:id", (request, response, next) => {
    response.send("This will delete a book by its id");
  });
  



module.exports = router;