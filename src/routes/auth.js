const express = require('express');
const router = express.Router();
const controllersLogin = require('../controllers/auth');
const {validateLogin, validateRegister} = require('../validators/auth');
/**
 * Rutas para la gestión de autenticación
 * POST /api/auth
 * body: {authData}
 * returns token de autenticación
 */

router.post("/register",validateRegister,controllersLogin.registerCtrl);

router.post("/login",validateLogin,controllersLogin.loginCtrl);

module.exports = router

