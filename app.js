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

const bookRoutes = require("./routes/bookRoutes");


app.get("/", (request, response, next) => {
//   response.send("This route points to the Home page");
  response.status(200).json({ 
    success: { message: "This route points to the Home page" },
    statusCode: 200
});
});

app.use("/api/books", bookRoutes);
app.use("/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}.`);
});
