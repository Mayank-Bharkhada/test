const express = require('express');
const Student_schema = require('../schema/StudetSchema');
const router = express.Router();
const bcrypt = require('bcrypt');

//call through /api/User/Admin_login

app.post("/Admin_login",async (req,res) => {
    try {
      console.log(req.body);
      const yourId = req.body.id;
      const yourPassword = req.body.Password; //'mypassword'
      const hashedPassword = '$2b$10$tYJL9Yf9tZhW5/RxKj/N.Ovh4Gw4fQb/q3jK9E/9C/eSxRxDjKf4G';

       if(yourId === "Myname"){
        bcrypt.compare(yourPassword, hashedPassword, (err, res) => {
            if (err) {
                console.log(err);
                res.json([{
                    id : 0,
                    text : "Enter valid details"
                  }]);
            } else if (res) {
                res.json([{
                    id : 1,
                    text : "Yours welcome Admin"
                  }]);
            } else {
                res.json([{
                    id : 0,
                    text : "Enter valid details"
                  }]);
            }
        });
       }else{
        res.json([{
            id : 0,
            text : "Enter valid details"
          }]);
       }
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
  });
  

module.exports = router;