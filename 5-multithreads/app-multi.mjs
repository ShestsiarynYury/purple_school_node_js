import { Worker } from 'worker_threads';

function act(min, max) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./5-multithreads/worker.mjs', { workerData: { min, max } });
        worker.on('message', (message) => {
            resolve(message);
        });
        worker.on('error', (error) => {
            reject(error);
        });
        worker.on('exit', () => {
            console.log('Завершил работу');
        });
    });
};

async function main() {
    try {
        performance.mark('main_start');
        const result = await Promise.all([
            act(1, 100000),
            act(100001, 200000),
            act(200001, 300000)
        ]);
        console.log(result);
        performance.mark('main_end');
        performance.measure('main_fn', 'main_start', 'main_end');
        console.log(performance.getEntriesByName('main_fn').pop());
    } catch (error) {
        console.log(error.message);
    }
};

main();