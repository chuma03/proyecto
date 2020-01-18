const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var userSchema = new Schema({
  nombre : String,
  telefono : Number,
  email : String,
  password : String,
  fecha : Date,
});
var user = mongoose.model("user", userSchema);
module.exports = user;
