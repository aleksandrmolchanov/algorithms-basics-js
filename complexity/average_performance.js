const selectionSort = (items) => {
    for (let i = 0; i < items.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < items.length; j++) {
            if (items[minIndex] > items[j]) {
                minIndex = j;
            }
        }
        const temp = items[i];
        items[i] = items[minIndex];
        items[minIndex] = temp;
    } 
}

const averagePerformance = (f, count) => {
    const start = performance.now();

    for (let i = 0; i < count; i++) {
        f();
    } 

    const end = performance.now();
    return (end - start) / count;
}

const items = [86, 66, 44, 77, 56, 64, 76, 39, 32, 93, 33, 54, 63, 96, 5, 41, 20, 58, 55, 28];

console.log(averagePerformance(() => selectionSort([...items]), 1));
console.log(averagePerformance(() => selectionSort([...items]), 100));