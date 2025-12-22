const {storageModel} = require('../models')
const config = require('../config/config')
const public_url = config.PUBLIC_URL

/**
 *                              
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * @module storageController
 * @description Controlador para la gestión de almacenamiento de archivos
 * @function createItem - Maneja la subida de un archivo y devuelve la información del archivo subido
 * @example
 * // Ejemplo de uso en una ruta Express
 * router.post("/api/storage", handleStorage.single('myfile'), controllerStorage.createItem);
 * @returns {Object} - Información del archivo subido
 * @example
 * // Respuesta exitosa
 * {
 *   "file": {
 *     "fieldname": "myfile",
 *     "originalname": "example.txt",
 *     "encoding": "7bit",
 *     "mimetype": "text/plain",
 *     "destination": "/path/to/storage",
 *     "filename": "file-1627891234567.txt",
 *     "path": "/path/to/storage/file-1627891234567.txt",
 *     "size": 1024
 *   }
 * }
 */

const createItem = async(req, res)=>{
    const {body,file} = req;
    console.log(file);
    const fileData = {
        filename:file.filename,
        url:`${public_url}/${file.filename}`
    }

    const data = await new storageModel(fileData)
    data.save();

    return res.status(200).send({data})
}

module.exports = {
    createItem
}                 