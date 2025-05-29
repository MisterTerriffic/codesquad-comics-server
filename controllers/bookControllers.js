const booksData = require("../data/books");

const getAllBooks = async (request, response, next) => {

  try {
    const books = booksData;
    
    return response.status(200).json({
      success: { message: "This routes returns all books in the inventory" },
      data: { books },
    });
  } catch(error) {
    return response.status(400).json({
      error: { message: "Inventory not found. Try again." },
    });
  }
};

const getBook = async (request, response, next) => {
  const { _id } = request.params;

  try {
    const book = booksData.find((book) => book._id === _id);
    return response.status(200).json({
      success: { message: "Eureka!" },
      data: { book }, //Not in instructions, thought it was needed
    });
  } catch {
    return response.status(400).json({
      error: { message: "Unable to retrieve book. Try again." },
    });
  }
};

const createBook = async (request, response, next) => {
  const {
    title,
    author,
    publisher,
    genre,
    pages,
    ratings,
    synopsis,
    imageURL,
  } = request.body;

  try {
    const newBook = {
      title,
      author,
      publisher,
      genre,
      pages,
      ratings,
      synopsis,
      imageURL,
    };
    return response.status(201).json({
      success: { message: "Created a new book." },
      data: { newBook },
    });
  } catch {
    return response.status(400).json({
      error: { message: "Unable to create a book. Try again." },
    });
  }
};

const updateBook = async (request, response, next) => {
  const { _id } = request.params;

  const {
    title,
    author,
    publisher,
    genre,
    pages,
    ratings,
    synopsis,
    imageURL,
  } = request.body;

  try {
    const updateBook = {
      title,
      author,
      publisher,
      genre,
      pages,
      ratings,
      synopsis,
      imageURL,
    };

    return response.status(201).json({
      success: { message: "Book updated." },
      data: { updateBook },
    });
  } catch {
    return response.status(400).json({
      error: { message: "Book updated failed. Try again." },
    });
  }
};

const deleteBook = async (request, response, next) => {
  const { _id } = request.params;

  try {
    const books = booksData.filter((book) => book._id !== _id);
    return response.status(201).json({
      success: { message: "Book deleted." },
      data: { books },
    });
  } catch {
    return response.status(400).json({
      error: { message: "Unable to delete the book. Try again." },
    });
  }
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
