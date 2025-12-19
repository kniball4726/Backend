const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/user')

//TODO: Definir rutas y vincular con el controlador

//Create user
router.post("/",controllerUser.createUser)

//Read Users
router.get("/", controllerUser.readAll)

//Read One User
router.get("/:id",controllerUser.readOne)

//Update Users
router.put("/",controllerUser.updateUser)

//Delete Users
router.delete("/",controllerUser.deleteUser)




module.exports = router
