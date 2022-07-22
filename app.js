//You will build this project using pure node to gain a thorough understanding of node. There are obviously easier ways of building this project using external modules, but that is the purpose of this project as you would miss out on many code concepts


//require node modules
const http = require('http');

//file imports
const respond = require('./lib/respond.js')
//connection settings
const port = process.env.port || 3000;

//create server
const server = http.createServer(respond);


//listen to client requests on the specific port, the port should be avaiable
server.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
