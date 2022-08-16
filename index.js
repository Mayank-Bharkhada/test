const express = require('express'); // import express
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
// const Router = require("./routes");
//const connection = require("./src/connection");
const StudentModel = require("./src/UserSchema");
const InstituteModel = require("./src/InstituteSchema");
const bcrypt = require('bcrypt');
const port = process.env.PORT;

const app = express(); // initialize app
app.use(express.json());

mongoose.connect(
    'mongodb+srv://Studydoor:ChmkjJ_11@cluster0.iygive1.mongodb.net/User?retryWrites=true&w=majority', 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get("/",async (req,res) => {
  res.json([{
    id : 1,
    text : "Welcome to home page!!!"
  }]);
});



app.post("/SignUp",async (req,res) => {
  try {
    const yourName = req.body.Name;
    const yourEmail= req.body.Name;
    const yourPhone = req.body.Phone;
    const yourDateOfBirth = req.body.DateOfBirth;
    const saltRounds = 10;
    const yourPassword = req.body.Password; 
    const salt = await bcrypt.genSalt(saltRounds);
    const Password = await bcrypt.hash(yourPassword, salt);
      const Student = new StudentModel ({
        name: yourName,
        email: yourEmail,
        phone: yourPhone,
        password: yourDateOfBirth,
        date: Password ,
      });
        await Student.save();
        await Institute.save();
        res.json([{
            id : 1,
            text : "Data is Success fully inserted"
          }]);
      } catch (error) {
        res.status(500).send(error);
      }
});

app.listen(port,() => {
    console.log("Server is running at 5000 port : ");
}); 