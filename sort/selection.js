const selectionSort = (items) => {
    for (let i = 0; i < items.length - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < items.length; j++) {
            if(items[j] < items[indexMin]) {
                indexMin = j;
            }
        }

        const temp = items[i];
        items[i] = items[indexMin];
        items[indexMin] = temp;
    }
}

const items = [4, 6, 12, 6, 7, 3, 83, 3, 12, 3, 42, 4, 1, 7, 23, 9, 3];
selectionSort(items);
console.log(items);