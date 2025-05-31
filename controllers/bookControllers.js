// const booksData = require("../data/books");
const Book = require("../models/bookModel");

const getAllBooks = async (request, response, next) => {

  try {
    const books = Books;
    
    return response.status(200).json({
      success: { message: "This routes returns all books in the inventory" },
      data: { books },
    });
  } catch(error) {
    return next(error);
    };
};

const getBook = async (request, response, next) => {
  const { _id } = request.params;

  try {
    // const book = booksData.find((book) => book._id === _id);
      if(!_id){
    throw new Error("Id is required");
  };

    const book = Book.findById(_id);

    if(!book){
      throw new Error( "Book not found");
    };

    return response.status(200).json({
      success: { message: "Eureka!" },
      data: { book }, //Not in instructions, thought it was needed
    });
  } catch(error) {
    return next(error);
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

    if(!title || !author || !pages) {
      throw new error("Insufficient Data. Enter Again")
    };


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

    await newBook.save()

    return response.status(201).json({
      success: { message: "Created a new book." },
      data: { newBook },
    });
  } catch {
    return next(error);
  }
};

const updateBook = async (request, response, next) => {
  const { _id } = request.params;

  const updateBook {
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

     if(!title || !author || !pages) {
      throw new error("Insufficient Data. Enter Again")
    };

   const updatedBook = await Book.findByIdAndUpdate(
      _id,
      {
        $set: {
          title,
          author,
          publisher,
          genre,
          pages,
          ratings,
          synopsis,
          imageURL,
        }
      },
      {new: true}
    );

     if (!updatedBook) {
      throw new Error("Book not found");
    };

    return response.status(201).json({
      success: { message: "Book updated." },
      data: { updateBook },
    });
  } catch {
    return next(error);
  };
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
