const firstArg = Number.parseInt(process.argv[2]);
const secondArg = Number.parseInt(process.argv[3]);
const thirdArg = Number.parseInt(process.argv[4]);

const delay = firstArg * 60 * 60 * 1000 + secondArg * 60 * 1000 + thirdArg * 1000;

setTimeout(() => {
    console.log('some message');
}, delay);