const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// normal listener function , this keyword is intentionally set to reference the EventEmitter
myEmitter.on('event', function(a, b) { 
  console.log(a, b, this);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined }
});

// arrow listener function, this keyword will no longer reference the EventEmitter instance
myEmitter.on('event2', (a,b) => {  
  console.log('an event occurred!');
  console.log(a, b, this);
  // Prints: a b {}
});





myEmitter.emit('event', 'aa', 'bb');