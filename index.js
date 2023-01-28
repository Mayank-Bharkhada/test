const express = require('express'); // import express
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const cors = require("cors");
const port = process.env.PORT;

const app = express(); // initialize app
app.use(express.json({
  type: ['application/json', 'text/plain']
}))
app.use(cors());


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
  res.send("all is done");
  res.json([{
    id : 1,
    text : "Welcome to home page!!!"
  }]);
  res.end();
});

app.use('/api/User',require('./routes/Student_registration'));

app.listen(port,() => {
    console.log(`Server is running at ${port} port : `);
}); 