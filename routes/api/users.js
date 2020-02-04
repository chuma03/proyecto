var express = require('express');
var USER = require("../../database/collections/user");
var router = express.Router();
router.post("/user", (req, res, next)=>{
  var params = req.body;

  var user = new USER(params);

  user.save().then(()=>{
    res.status(200).json(params);
  });
});

module.exports = router;

//CRUD
//CREATE READ UPDATE DELETE
