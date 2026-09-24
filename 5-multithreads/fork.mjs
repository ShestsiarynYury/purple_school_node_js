import { get } from './utils.mjs';

process.on('message', ({ count, cores, group }) => {
    get(count, cores, group);
    process.disconnect();
    return;
});