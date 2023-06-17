const binarySearch = (items, value, left, right) => {
    left = left ?? 0;
    right = right ?? items.length - 1;

    if (left > right) {
        return -1;
    }

    const middle = Math.floor((left + right) / 2);
    if(value === items[middle]) {
        return middle;
    }

    if(value < items[middle]) {
        return binarySearch(items, value, left, middle - 1);
    }

    return binarySearch(items, value, middle + 1, right);
}

const items = [-3, -1, 1, 3, 5, 7, 9, 11];

console.log(binarySearch(items, 100));
console.log(binarySearch(items, -1));
console.log(binarySearch(items, 7));