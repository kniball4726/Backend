const server = require('./src/config/server/index')
const data = require('./src/config/data/mongo')


const inicio = () => {

    console.clear();
    server();
    data();
}

inicio();