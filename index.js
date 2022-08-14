const express = require('express'); // import express
const mongoose = require("mongoose");
// const Router = require("./routes");
//const connection = require("./src/connection");
const StudentModel = require("./src/UserSchema");
const InstituteModel = require("./src/InstituteSchema");

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
    const Student = new StudentModel ({
        name: "Mayank",
        age: 21
    });

    const Institute = new InstituteModel ({
        name: "Sigma",
        year: 10
    });

    try {
        await Student.save();
        await Institute.save();
        res.json({
            id : 1,
            text : "Data is Success fully inserted"
          });
      } catch (error) {
        res.status(500).send(error);
      }
});

app.listen(5000,() => {
    console.log("Server is running at 5000 port : ");
}); 