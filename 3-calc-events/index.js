const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const firstArg = process.argv[2];
const secondArg = process.argv[3];
const thirdArg = process.argv[4];

myEmitter.on('add', (data) => {
    myEmitter.emit('result', data.a + data.b);
});

myEmitter.on('multiply', (data) => {
     myEmitter.emit('result', data.a * data.b);
});

myEmitter.on('result', (data) => {
    console.log(data);
});

myEmitter.emit(thirdArg, {a: Number(firstArg), b: Number(secondArg)});
