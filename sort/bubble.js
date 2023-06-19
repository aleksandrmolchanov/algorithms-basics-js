const bubbleSort = (items) => {
    for (let limit = items.length - 1; limit > 0; limit--) {
        for (let i = 0; i < limit; i++) {
            if(items[i] > items[i + 1]) {
                const temp = items[i];
                items[i] = items[i + 1];
                items[i + 1] = temp;
            }
        } 
    }
}

const items = [4, 6, 12, 6, 7, 3, 83, 3, 12, 3, 42, 4, 1, 7, 23, 9, 3];
bubbleSort(items);
console.log(items);