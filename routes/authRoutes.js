const express = require("express");
const router = express.Router();
const passport = require("passport");


const { register, login, logout, localLogin } = require("../controllers/authControllers");


router.post("/register", register);

router.get("/login", login);

router.get("/login/error", (request, response, next) => {
    return response.json("Login error")
});

router.post("/login/local", localLogin);

router.post("/logout", logout);

router.get("/login/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login",
        successRedirect: "/dashboard",
    })
);

router.get("/unauthenticated", (request, response, next) => {
    console.log("Returning to the homepage...");
    response.redirect("/");
})

module.exports = router;