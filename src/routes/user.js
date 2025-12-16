const express = require('express');
const controllerUser = require('../controllers/user')
const router = express.Router();


//Create user
router.post("/users",(req,res)=>{
     res.send("Create users");
})

//Read Users
router.get("/users", controllerUser.readAll)

//Update Users
router.put("/users",(req,res)=>{
    res.send("Update Users")
})

//Delete Users
router.delete("/users",(req,res)=>{
    res.send("Delete Users")
})


module.exports = router
