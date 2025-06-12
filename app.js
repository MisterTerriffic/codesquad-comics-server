require("dotenv").config();
require("./config/connection"); 
require("./config/authStrategy");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const passport = require("passport");
const session = require("express-session");


app.use(cors({ credentials: true, origin: true }
));
app.use(morgan("combined"));
app.use(helmet({contentSecurityPolicy: false}));


const path = require("node:path");

app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));

app.use(session({
   resave: false,
    saveUninitialized: false, 
    secret: process.env.SECRET_KEY,

    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
}));

app.use(passport.initialize());
app.use(passport.session());


const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes");


app.get("/", (request, response, next) => {
//   response.send("This route points to the Home page");
  response.status(200).json({ 
    success: { message: "This route points to the Home page" },
    statusCode: 200
});
});

app.use("/api/books", bookRoutes);
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
if (11000) { 
return res.status(400).json({ 
error: { message: "Already have an account? Try logging in." },
statusCode: 400,
});
}
return res.status(500).json({ 
error: { message: err.message || "Internal server error. Oh no!" },
statusCode: 500, 
});
});



app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}.`);
});
