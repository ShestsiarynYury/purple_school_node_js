const {multiply} = require('./multiply.js');
const {add} = require('./add.js');

const firstArg = process.argv[2];
const secondArg = process.argv[3];
const thirdArg = process.argv[4];

if (thirdArg === 'add') {
    console.log(add(firstArg, secondArg));
}

if (thirdArg === 'multiply') {
    console.log(multiply(firstArg, secondArg));
}