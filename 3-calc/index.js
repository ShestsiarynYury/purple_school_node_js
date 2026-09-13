const {multiply} = require('./multiply.js');
const {add} = require('./add.js');

const firstArg = process.argv[2];
const secondArg = process.argv[3];
const thirdArg = process.argv[4];

if (thirdArg === 'add') {
    console.log(add(Number(firstArg), Number(secondArg)));
}

if (thirdArg === 'multiply') {
    console.log(multiply(Number(firstArg), number(secondArg)));
}