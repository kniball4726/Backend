const multer =  require('multer');

// Configuracion de multer para almacenamiento de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage); // Carpeta donde se guardaran los archivos
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop(); // Extension del archivo
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename); // Nombre del archivo
    }
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;