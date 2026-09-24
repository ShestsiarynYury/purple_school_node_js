import { get } from './utils.mjs';

process.on('message', ({ count, cores, group }) => {
    process.send(get(count, cores, group));
    process.disconnect();
    return;
});