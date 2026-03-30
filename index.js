// console.log("Hello World");
// console.log("This is a simple Node.js application.");
let express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./dbConnection");
dotenv.config();
let app = express();
app.use(express.json());

connectDB();

const { checkToken } = require("./checkTokenMiddleware");

app.get("/", (req, res) => {
  res.send({ status: 1, msg: "Home Page" });
});
app.get("/news", checkToken, (req, res) => {
  res.send({ status: 2, msg: "News Page" });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send({ status: 3, msg: "Login Page", data: req.body });
});
app.post("/query", (req, res) => {
  console.log(req.query);
  res.send({ status: 3, msg: "Query Page", data: req.query });
});

app.get("/student-read", (req, res) => {
  res.send("Students Read Succesfully");
});

app.post("/student-create", (req, res) => {
  res.send("Students Created Succesfully");
});

app.listen(process.env.PORT || 3000);
