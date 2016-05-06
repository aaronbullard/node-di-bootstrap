module.exports = function(Container){

    function ExampleSubscriber(){

        this.whenExampleEvent = function(event)
        {
            // Do something with event
            // console.log(event);
        }

    }// end ExampleSubscriber

    return ExampleSubscriber;
}
