const removeDuplicates = (items) => {
    const already = new Set();
    
    for (let i = 0; i < items.length; i++) {
        if (already.has(items[i])) {
            items.splice(i, 1);
            i--;
        } else {
            already.add(items[i]);
        }
    }
}

const items = ['one', 'two', 'three', 'two', 'five', 'four', 'six', 'seven', 'six'];

removeDuplicates(items);
console.log(items);