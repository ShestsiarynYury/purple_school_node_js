function main() {
    performance.mark('main_start');
    let results = [];
    const array = [];
    for (let i = 1; i <= 300000; i++) {
        array.push(i);
    }

    results =  array.reduce((acc, current) => {
        if (current % 3 === 0) {
            acc += 1;
        }

        return acc;
    }, 0);
    console.log(results);
    performance.mark('main_end');
    performance.measure('main_fn', 'main_start', 'main_end');
    console.log(performance.getEntriesByName('main_fn').pop());
}

main();