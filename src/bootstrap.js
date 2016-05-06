/*
|--------------------------------------------------------------------------
| Application Environment
|--------------------------------------------------------------------------
|
| This value determines the "environment" your application is currently
| running in. This may determine how you prefer to configure various
| services your application utilizes. Set this in your ".env" file.
|
*/
// Set environment variables
require('dotenv').load();


// Global functions
global.root = function(){
  return __dirname + "/..";
}

global.src = function(){
  return root() + '/src';
}

global.spec = function(){
  return root() + "/spec";
}

global.env = function(key, fallback){
  return process.env[key] || fallback;
}

global.dd = function(data){
    console.log(data);
    process.exit();
}


/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The first thing we will do is create a new Node application instance
| which serves as the "glue" for all the components of Fed API, and is
| the IoC container for the system binding all of the various parts.
|
*/
var Container = require('node-dicontainer');

Container.instance('config', require('./config.js'));


/*
|--------------------------------------------------------------------------
| Bind Important Interfaces
|--------------------------------------------------------------------------
|
| Next, we need to bind some important interfaces into the container so
| we will be able to resolve them when needed. The kernels serve the
| incoming requests to this application from both the web and CLI.
|
*/

// Load Service Providers
Container.bindShared('ServiceProviders', function(container){
  return container.config.service_providers.map(function(path){
    return require(path);
  });
});


// Register Service Providers
Container.ServiceProviders.forEach(function(provider){
    provider.register( Container );
});


/*
|--------------------------------------------------------------------------
| Return The Application
|--------------------------------------------------------------------------
|
| This script returns the application instance. The instance is given to
| the calling script so we can separate the building of the instances
| from the actual running of the application and sending responses.
|
*/
module.exports = Container;
