const express = require('express');
const Institute_schema = require('../schema/InstituteSchema');
const router = express.Router();
const bcrypt = require('bcrypt');

//call through /api/User/Institute_registration

app.post("/Institute_registration",async (req,res) => {
    try {
      console.log(req.body);
      const yourName = req.body.Name;
      const yourEmail= req.body.Email;
      const yourPhone = req.body.Phone;
      const yourAddress = req.body.Address;
      const yourDateOfEstablishment = req.body.DateOfEstablishment;
      const saltRounds = 10;
      const yourPassword = req.body.Password; 
      
      const salt = await bcrypt.genSalt(saltRounds);
      const Password = await bcrypt.hash(yourPassword, salt);
        const Institute = new Institute_schema ({
          name: yourName,
          email: yourEmail,
          phone: yourPhone,
          dateOfEstablishment: yourDateOfEstablishment,
          password: Password ,
          address: yourAddress,
        //   instituteCertificate: 
        //   institutePhoto: 
        });
          await Institute.save();
    
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