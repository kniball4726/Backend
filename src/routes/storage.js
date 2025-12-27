const express = require('express');
const controllerStorage = require('../controllers/storage')
const router = express.Router();
const handleStorage = require('../utils/handleStorage');
const { validateCreateStorage, validateGetStorage } = require('../validators/storage');

/**
 * Rutas para el almacenamiento de archivos
 * POST /api/storage
 * body: form-data (myfile: file)
 * returns archivo subido
 */
router.post("/",validateCreateStorage ,handleStorage.single('myfile'), controllerStorage.createItem);

/**  
 * Rutas para el almacenamiento de archivos
 * GET /api/storage
 * returns lista de archivos
 * 
 */
router.get("/", controllerStorage.getItems)

/**
 * Rutas para el almacenamiento de archivos
 * GET /api/storage/:id
 * returns un archivo
 */
router.get("/:id",validateGetStorage, controllerStorage.getItem)   

/** Rutas para el almacenamiento de archivos
 * DELETE /api/storage/:id
 * returns archivo eliminado
 */
router.delete("/:id",validateGetStorage, controllerStorage.deleteItem) 

module.exports = router