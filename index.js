const server = require('./src/config/server/index')
const data = require('./src/config/data/mongo')

/**
 * Iniciar la aplicacion
 * @return {void}       
 */
const inicio = () => {


    console.clear();
    server();
    data();
}

inicio();

