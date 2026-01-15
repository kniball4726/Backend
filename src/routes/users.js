const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/users')
const authMiddleware = require('../middleware/auth')
const roleMiddleware = require('../middleware/role');
const {validateCreateUser, validateGetUser,validateLoginUser} = require('../validators/users');
const cacheInit = require ('../middleware/cache')

/**
 * Rutas para la gestión de usuarios
 * POST /api/user
 * body: {userData}
 * returns usuario creado
 */
router.post("/register", validateCreateUser, controllerUser.createUser) //Agregar validadores validateCreateUser()

/**
 * Rutas para la gestión de usuarios
 * POST /api/user/login
 * body: {email, password}
 * returns usuario logueado
 */
router.post("/login", validateLoginUser, controllerUser.loginUser) //Agregar validadores validateLoginUser()


/** 
 * Rutas para la gestión de usuarios
 * GET /api/user
 * returns lista de usuarios
 */
router.get("/",cacheInit,authMiddleware,roleMiddleware(["user","admin"]), controllerUser.getUsers)


/**
 * Rutas para la gestión de usuarios
 * GET /api/user/:id
 * returns un usuario
 */
router.get("/:id",cacheInit,authMiddleware,roleMiddleware(["user","admin"]),controllerUser.getUser)

/**
 * Rutas para la gestión de usuarios
 * PUT /api/user
 * body: {userData}
 * returns usuario actualizado
 */
router.put("/:id",authMiddleware,roleMiddleware(["user"]),validateGetUser,validateCreateUser,controllerUser.updateUser)

/**
 * Rutas para la gestión de usuarios
 * DELETE /api/user
 * body: {ids: []}
 * returns usuarios eliminados
 */
router.delete("/:id", authMiddleware,roleMiddleware(["admin"]), controllerUser.deleteUser)


module.exports = router
