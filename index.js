const server = require('./src/config/server/index')
const data = require('./src/config/data/mongo')

/**
 * Función de inicio de la aplicación
 * @module inicio
 * @return {void}
 */

const inicio = () => {
    console.clear();
    server();
    data();
}

inicio();

