import { generate } from './generate.mjs';

function main() {
    performance.mark('main_start');
    const result = [
        generate(1, 100000),
        generate(100001, 200000),
        generate(200001, 300000)
    ];
    console.log(result);
    performance.mark('main_end');
    performance.measure('main_fn', 'main_start', 'main_end');
    console.log(performance.getEntriesByName('main_fn').pop());
}

main();