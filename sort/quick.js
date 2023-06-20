const partition = (items, left, right, pivot) => {
    while (true) {
        while (items[left] < pivot) {
            left++;
        }

        while (items[right] > pivot) {
            right--;
        }

        if (left >= right) {
            return right + 1;
        }

        const temp = items[left];
        items[left] = items[right];
        items[right] = temp;

        left++;
        right--;
    }
}

const sort = (items, left, right) => {
    const length = right - left + 1;

    if(length < 2) {
        return;
    }

    const pivot = items[left];

    const splitIndex = partition(items, left, right, pivot);
    sort(items, left, splitIndex - 1);
    sort(items, splitIndex, right);
}

const quicksort = (items) => sort(items, 0, items.length - 1);

const items = [34, 65, 35, 68, 23, 67, 48, 63, 77, 48, 29, 45, 34, 14, 45, 64];
quicksort(items);
console.log(items);