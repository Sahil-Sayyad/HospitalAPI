//importing all required packages
require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const db = require("./config/mongoose");
const passport = require("passport");
//for parsing the form data into urlencoded format
app.use(express.urlencoded({ extended: false }));
//handled JWT 
app.use(passport.initialize());
//express routes handler
app.use("/", require("./routes"));
//start the server
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running server ${err}`);
  }
  console.log(`Server is running on ${port}`);
});
