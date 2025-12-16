const server = require('./src/config/server/index')
const data = require('./src/config/data/mongo')

console.clear();
server();
data();