export function getNumbers(array) {
    return array.reduce((acc, current) => {
        if (current % 3 === 0) {
            acc += 1;
        }

        return acc;
    }, 0);
};

export function chunkNumbers(max, groupsCount) {
  // Вычисляем базовый размер одной группы
    const size = Math.floor(max / groupsCount);
  // Находим остаток, который нужно будет распределить, если max не делится нацело
    let remainder = max % groupsCount;

    const result = [];
    let currentNumber = 1;

    for (let i = 0; i < groupsCount; i++) {
    // Каждая группа берет базовый размер + 1 элемент из остатка (если он есть)
        const currentGroupSize = size + (remainder > 0 ? 1 : 0);
        remainder--;

    // Создаем и заполняем текущую группу
        const group = Array.from({ length: currentGroupSize }, () => currentNumber++);
        result.push(group);
    }

    return result;
}

export function chunkNumbersGroup(max, groupsCount, targetGroup = null) {
  const size = Math.floor(max / groupsCount);
  let remainder = max % groupsCount;

  // Если нужна конкретная группа, мы можем вычислить её диапазон без создания всех массивов
  if (targetGroup !== null) {
    // Валидация: проверяем, что номер группы существует
    if (targetGroup < 1 || targetGroup > groupsCount) {
      throw new RangeError(`Группы с номером ${targetGroup} не существует. Всего групп: ${groupsCount}`);
    }

    // Вычисляем, с какого числа начинается нужная группа
    let start = 1;
    for (let i = 1; i < targetGroup; i++) {
      start += size + (remainder > 0 ? 1 : 0);
      remainder--;
    }

    // Определяем размер именно этой целевой группы
    const currentGroupSize = size + (remainder > 0 ? 1 : 0);
    
    // Генерируем и возвращаем только её
    return Array.from({ length: currentGroupSize }, () => start++);
  }

  // Логика по умолчанию (если третий параметр не передан): возвращаем все группы
  const result = [];
  let currentNumber = 1;

  for (let i = 0; i < groupsCount; i++) {
    const currentGroupSize = size + (remainder > 0 ? 1 : 0);
    remainder--;

    const group = Array.from({ length: currentGroupSize }, () => currentNumber++);
    result.push(group);
  }

  return result;
}

export function get(count, countReset, group) {
    const array = chunkNumbersGroup(count, countReset, group);
    return getNumbers(array);
}