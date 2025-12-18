const express = require('express');
const controllerUser = require('../controllers/user')
const router = express.Router();


//Create user
router.post("/users",controllerUser.createUser)

//Read Users
router.get("/users", controllerUser.readAll)

//Update Users
router.put("/users",controllerUser.updateUser)

//Delete Users
router.delete("/users",controllerUser.deleteUser)


module.exports = router
