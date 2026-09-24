import { fork } from 'child_process';
import os from 'os';
const numCores = os.cpus().length;

const MAX_NUMBER = 300000;

function act(goupNumber) {
    return new Promise((resolve, reject) => {
        const forkProcess = fork('./5-multithreads/fork.mjs');
        forkProcess.send({ count: MAX_NUMBER, cores: numCores, group: goupNumber });
        forkProcess.on('message', (message) => {
            resolve(error);
        });
    });
};

async function main() {
    performance.mark('main_start');
    const results = await Promise.all(
        Array.from({ length: numCores }, (_, index) => {
            const groupNumber = index + 1;
            act(groupNumber);
        })
    );
    console.log(results);
    performance.mark('main_end');
    performance.measure('main_fn', 'main_start', 'main_end');
    console.log(performance.getEntriesByName('main_fn').pop());
}

main();