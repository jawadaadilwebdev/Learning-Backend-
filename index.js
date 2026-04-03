// console.log("Hello World");
// console.log("This is a simple Node.js application.");
let express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./dbConnection");
dotenv.config();
let app = express();
app.use(express.json());

let myDB = connectDB();

const { checkToken } = require("./checkTokenMiddleware");
const { Student } = require("./student.model");

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


// Getting Data of all the Students
app.get("/student-read", async (req, res) => {
  const allStudents = await Student.find();
  res.send(allStudents);
});

// Delete Student by ID
app.delete("/student-delete/:id", async (req,res)=>{
  let deletedUser = await Student.findByIdAndDelete(req.params.id)
  res.send(deletedUser)
})


// Creating New Student
app.post("/student-create", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newStudent = new Student({
      name,
      email,
      age,
    });
    const savedStudent = await newStudent.save();
    console.log("Saved Student:", savedStudent);
  } catch (error) {
    console.error("Error creating student:", error);
  }
  res.send("Student Created Successfully");
});

app.listen(process.env.PORT || 3000);
