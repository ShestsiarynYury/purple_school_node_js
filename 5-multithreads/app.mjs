import { generate } from './generate.mjs';

function main() {
    performance.mark('main_start');
    const result = [
        generate(1, 100),
        generate(101, 200),
        generate(201, 300)
    ];
    console.log(result);
    performance.mark('main_end');
    performance.measure('main_fn', 'main_start', 'main_end');
    console.log(performance.getEntriesByName('main_fn').pop());
}

main();