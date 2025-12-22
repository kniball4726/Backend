
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
    return res.status(200).send({file})
}

module.exports = {
    createItem
}                 