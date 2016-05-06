module.exports = {

    // Register subscribers here
    _subscribers: [
        'ExampleSubscriber'
    ],

    register: function(Container)
    {
        this._registerServices(Container);
        this._registerSubscribers(Container);
        this._bindEventsToSubscribers(Container);
    },

    boot: function(Container)
    {

    },

    _registerServices: function(Container)
    {
        // Set EventBus and Subscriber base class
        var events = require('node-eventbus');
        Container.instance('EventBus', events.EventBus);
        Container.instance('Subscriber', events.Subscriber);
    },

    _registerSubscribers: function(Container)
    {
        this._subscribers.forEach(function(name){
            var path = src() + '/Subscribers/' + name + '.js';
            var subscriber = require(path)(Container);

            subscriber.prototype = Container.Subscriber;
            // Bind as singletons
            Container.bindShared(name, function(){
                return new subscriber;
            });
        });
    },

    _bindEventsToSubscribers: function(Container)
    {
        // Reflect into each subscriber and automatically subscribe
        // the subscriber to an event based on naming convention | when{EventName}
        this._subscribers.forEach(function(name){
            var subscriber = Container[name];
            for(var method in subscriber){
                if(method.match(/^when/)){
                    var event = method.substring(4);
                    Container.EventBus.subscribe(event, subscriber);
                }
            }
        });
    }

}
