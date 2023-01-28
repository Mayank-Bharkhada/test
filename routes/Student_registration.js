const express = require('express');
const Student_schema = require('../schema/StudetSchema');
const router = express.Router();
const bcrypt = require('bcrypt');

//call through /api/User/Student_registration

app.post("/Student_registration",async (req,res) => {
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
        const Student = new Student_schema ({
          name: yourName,
          email: yourEmail,
          phone: yourPhone,
          date: yourDateOfBirth,
          password: Password ,
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
  

module.exports = router;