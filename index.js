//require modules
var Hapi = require('hapi');
var path = require('path');


var server = Hapi.createServer('localhost', 8080); //create server

//store routes in an array to make writing and calling routes easier
var routes = [
//get path to styles folder
  {path: '/styles/{filename}', method: 'GET', handler: {
    directory: {
      path: path.join(__dirname + '/styles') //join current directory root folder with path to styles folder to get styles
      }
    }
  },
  //get path to images folder
  {path: '/images/{filename}', method: 'GET', handler: {
    directory: {
      path: path.join(__dirname + '/images')//join current directory root folder with path to images folder to get images
      }
    }
  },
  //get path to scripts folder
  {path: '/scripts/{filename}', method: 'GET', handler: {
    directory: {
      path: path.join(__dirname + '/scripts')//join current directory root folder with path to scripts folder to get scripts
      }
    }
  },
  //set paths to html files and set index.html as main page in website
  {path: '/', method: 'GET', handler:{file: 'index.html'}},
  {path: '/contacts', method: 'GET', handler:{file: 'contacts.html'}},
  {path: '/productlist', method: 'GET', handler:{file: 'productlist.html'}},
  {path: '/about', method: 'GET', handler:{file: 'about.html'}}
];

//call the routes array in server.route to use object configuration for routes
server.route(routes);

//start server
server.start(function(){
  console.log('Go to localhost:8080/index');
});
