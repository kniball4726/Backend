const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/user')

/**
 * Rutas para la gestión de usuarios
 * POST /api/user
 * body: {userData}
 * returns usuario creado
 */
router.post("/",controllerUser.createUser)

/** 
 * Rutas para la gestión de usuarios
 * GET /api/user
 * returns lista de usuarios
 */
router.get("/", controllerUser.readAll)

/**
 * Rutas para la gestión de usuarios
 * GET /api/user/:id
 * returns un usuario
 */
router.get("/:id",controllerUser.readOne)

/**
 * Rutas para la gestión de usuarios
 * PUT /api/user
 * body: {userData}
 * returns usuario actualizado
 */
router.put("/",controllerUser.updateUser)

/**
 * Rutas para la gestión de usuarios
 * DELETE /api/user
 * body: {ids: []}
 * returns usuarios eliminados
 */
router.delete("/",controllerUser.deleteUser)

/**
 * Rutas para la gestión de usuarios
 * DELETE /api/user/:id
 * returns un usuario eliminado
 */
router.delete("/:id",controllerUser.deleteOneUser)

module.exports = router
