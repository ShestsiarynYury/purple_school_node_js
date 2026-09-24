export function generate(min, max) {
    const array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);
    }

    return array.reduce((acc, current) => {
        if (current % 3 === 0) {
            acc += 1;
        }

        return acc;
    }, 0);
}