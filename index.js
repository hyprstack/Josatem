var Hapi = require('hapi');
var path = require('path');


var server = Hapi.createServer('localhost', 8080);

var routes = [
  {path: '/styles/{filename}', method: 'GET', handler: {
    directory: {
      path: path.join(__dirname + '/styles')
      }
    }
  },
  {path: '/images/{filename}', method: 'GET', handler: {
    directory: {
      path: path.join(__dirname + '/images')
      }
    }
  },
  {path: '/scripts/{filename}', method: 'GET', handler: {
    directory: {
      path: path.join(__dirname + '/scripts')
      }
    }
  },
  {path: '/', method: 'GET', handler:{file: 'index.html'}},
  {path: '/contacts', method: 'GET', handler:{file: 'contacts.html'}},
  {path: '/productlist', method: 'GET', handler:{file: 'productlist.html'}},
  {path: '/about', method: 'GET', handler:{file: 'about.html'}}
];


server.route(routes);

server.start(function(){
  console.log('Go to localhost:8080/index');
});
