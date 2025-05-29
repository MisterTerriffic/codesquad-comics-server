const express = require("express");
const router = express.Router();

const { register, login, logout, localLogin } = require("../controllers/authControllers");


router.post("/register", register);

router.get("/login", login);

router.get("/login/error", (request, response, next) => {
    return response.json("Login error")
});

router.get("/login/local", localLogin);

router.get("/logout", logout);

router.get("/unauthenticated", (request, response, next) => {
    console.log("Returning to the homepage...");
    response.redirect("/");
})

module.exports = router;