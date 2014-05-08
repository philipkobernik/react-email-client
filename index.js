Hapi = require('hapi');

var server = new Hapi.Server(process.env.PORT || 4000, 'localhost', {
  //views: {
    //engines: {
      //jade: "jade"
    //},
    //path: "./views"
  //}
});

server.route([{
  method: 'GET',
  path: '/',
  handler: function(request, reply) {

    reply.file('./index.html');  }
}]);

server.route({
  path: "/assets/{path*}",
  method: "GET",
  handler: {
    directory: {
      path: "./assets",
      listing: false,
      index: false
    }
  }
});

server.route({
  path: "/img/{path*}",
  method: "GET",
  handler: {
    directory: {
      path: "./img",
      listing: false,
      index: false
    }
  }
});

server.start();
