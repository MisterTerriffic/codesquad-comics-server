const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 8,
    },
    googleId: {
        type: String,
    },
    githubId: {
        type: String,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;