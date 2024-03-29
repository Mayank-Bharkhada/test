const express = require('express'); // import express
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
// const Router = require("./routes");
//const connection = require("./src/connection");
const StudentModel = require("./src/UserSchema");
const InstituteModel = require("./src/InstituteSchema");
const bcrypt = require('bcrypt');
const cors = require("cors");
const port = process.env.PORT;

const app = express(); // initialize app
app.use(express.json({
  type: ['application/json', 'text/plain']
}))
app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*")
// }) 

app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Add other headers here
  res.setHeader('Access-Control-Allow-Methods', 'POST'); // Add other methods here
  res.send();
});

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
  parameterLimit: 100000
}))
app.use(bodyParser.json({
  limit: '50mb',
  parameterLimit: 100000
}))


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
    console.log(req.body);
    const yourName = req.body.Name;
    const yourEmail= req.body.Email;
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
  
        res.json([{
          id : 1,
          text : "Data is Success fully inserted"
        }]);
        
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
});

app.listen(port,() => {
    console.log(`Server is running at ${port} port : `);
}); 