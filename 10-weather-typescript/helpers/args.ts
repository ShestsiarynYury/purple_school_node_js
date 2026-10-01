export function getArgs(args: string[]) {
    const result: Record<string, string | boolean> = {};
    const [executer, file, ...rest] = args;
    rest.forEach((value, index, array) => {
        if (value.charAt(0) === '-') {
            const key = value.substring(1);
            if (index === array.length - 1 || array[index + 1]?.charAt(0) === '-') {
                result[key] = true;
            } else {
                result[key] = array[index + 1] ?? '';
            }
        }
    });
  
  return result;
};