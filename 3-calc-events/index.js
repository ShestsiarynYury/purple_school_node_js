const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const firstArg = process.argv[2];
const secondArg = process.argv[3];
const thirdArg = process.argv[4];

myEmitter.on(firstArg, () => {
    myEmitter.emit('result', secondArg + thirdArg);
});

myEmitter.on(secondArg, () => {
     myEmitter.emit('result', secondArg * thirdArg);
});

myEmitter.on('result', (data) => {
    console.log(data);
});
