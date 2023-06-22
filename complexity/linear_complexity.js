const getMinimum = (items) => {
    let minimum = items[0];

    for(let i = 1; i < items.length; i++) {
        if (items[i] < minimum) {
            minimum = items[i];
        }
    }

    return minimum;
}

const average = (items) => {
    let sum = 0;

    for(let i = 0; i < items.length; i++) {
        sum += items[i];
    }

    return sum / items.length;
}

const palindrome = (string) => {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string.at(-i - 1)) {
            return false;
        }
    }

    return true;
}

const items = [3, 4, 56, 23, 56, 34, 7, 34, 45, 45, 45, 2];

console.log(getMinimum(items));
console.log(average(items));
console.log(palindrome('asdf'));
console.log(palindrome('asdsa'));