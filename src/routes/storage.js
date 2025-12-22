const express = require('express');
const controllerStorage = require('../controllers/storage')
const router = express.Router();
const handleStorage = require('../utils/handleStorage')

/**
 * Rutas para el almacenamiento de archivos
 * POST /api/storage
 * body: form-data (myfile: file)
 * returns archivo subido
 */
router.post("/", handleStorage.single('myfile'), controllerStorage.createItem);

module.exports = router