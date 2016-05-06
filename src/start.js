/*
|--------------------------------------------------------------------------
| Turn On The Lights
|--------------------------------------------------------------------------
|
| We need to illuminate Node development, so let us turn on the lights.
| This bootstraps the framework and gets it ready for use, then it
| will load up this application so that we can run it and send
| the responses back to the browser and delight our users.
|
*/
var Container = require(__dirname + '/bootstrap.js');

// Boot Service Providers
Container.ServiceProviders.forEach(function(provider){
    if(provider.hasOwnProperty('boot')) provider.boot( Container );
});


module.exports = Container;
