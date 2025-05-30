const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    publisher: {
        type: String,
    },
    genre: {
        type: String,
    },
    pages: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
    },
    synopsis: {
        type: String,
    },
    imageURL: {
        type: String,
    },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;