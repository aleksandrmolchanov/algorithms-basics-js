const words = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'
];

words.sort();

const inWords = (word) => {
    let first = 0;
    let last = words.length - 1;

    while(first <= last){
        const middle = Math.floor((first + last) / 2);

        if(word === words[middle]){
            return true;
        }

        if(word < words[middle]){
            last = middle - 1;
        }else{
            first = middle + 1;
        }
    }

    return false;
}

console.log(inWords('nine'));
console.log(inWords('four'));