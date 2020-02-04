const mongoose = require("mongoose");
const homes = "crud";
mongoose.connect("mongodb://localhost:27017/homes");
module.exports = mongoose;
