import { parentPort, workerData } from 'worker_threads';
import { generate } from './generate.mjs';

function handle({ min, max }) {
    return generate(min, max);
}

parentPort.postMessage(handle(workerData));