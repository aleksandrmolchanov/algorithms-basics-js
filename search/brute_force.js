const words = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'
];

const inWords = (word) => {
    for(let i = 0; i < words.length; i++){
        if(word === words[i]){
            return true;
        }
    }

    return false;
}

console.log(inWords('nine'));
console.log(inWords('four'));