var Container = require(src() + '/bootstrap.js');
var ExampleEvent = require(src() + '/Events/ExampleEvent.js');

describe('ExampleSubscriber', function(){

    it('handles event from the EventBus', function(){
        var wasCalled = false;

        Container.ExampleSubscriber.whenExampleEvent = function(event){
            wasCalled = true;
            expect(event.data.name).toEqual("Aaron");
        };

        Container.EventBus.fire(
            new ExampleEvent({name: "Aaron"})
        );

        expect(wasCalled).toEqual(true);
    });

});
