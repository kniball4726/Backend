const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/user')
const {validateCreateUser, validateGetUser} = require('../validators/user');

const customHeader = require('../middleware/customHeader');

/**
 * Rutas para la gestión de usuarios
 * POST /api/user
 * body: {userData}
 * returns usuario creado
 */
router.post("/", validateCreateUser, controllerUser.createUser) //Agregar validadores validateCreateUser()

/** 
 * Rutas para la gestión de usuarios
 * GET /api/user
 * returns lista de usuarios
 */
router.get("/", controllerUser.getUsers)

/**
 * Rutas para la gestión de usuarios
 * GET /api/user/:id
 * returns un usuario
 */
router.get("/:id",validateGetUser,controllerUser.getUser)

/**
 * Rutas para la gestión de usuarios
 * PUT /api/user
 * body: {userData}
 * returns usuario actualizado
 */
router.put("/:id",validateGetUser,validateCreateUser,controllerUser.updateUser)

/**
 * Rutas para la gestión de usuarios
 * DELETE /api/user
 * body: {ids: []}
 * returns usuarios eliminados
 */
router.delete("/:id",validateGetUser,controllerUser.deleteUser)


module.exports = router
