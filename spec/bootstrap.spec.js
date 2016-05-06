var Container = require(src() + "/bootstrap.js");

describe('bootstrap.js', function(){

    it('registers the global functions', function(){
        expect( root() ).toBeDefined();
        expect( src() ).toBeDefined();
        expect( spec() ).toBeDefined();
        expect( env('APP_ENV') ).toBeDefined();
    });

    it('registers the config file', function(){
        expect( Container.config ).toBeDefined();
    });

    it('registers the Service Providers', function(){
        expect( Container.ServiceProviders ).toBeDefined();
    });
});
