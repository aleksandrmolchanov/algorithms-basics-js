const compareByPrice = (a, b) => {
    if (a.price < b.price) {
        return -1;
    } else if (a.price == b.price) {
        return 0;
    } else {
        return 1;
    }
}

const compareByRating = (a, b) => {
    if(a.rating < b.rating) {
        return -1;
    } else if (a.rating == b.rating) {
        return 0;
    } else {
        return 1;
    }
}

const bubbleSort = (items, comparator) => {
    for (let limit = items.length -1; limit > 0; limit--) {
        for(i = 0; i < limit; i++) {
            if(comparator(items[i], items[i + 1]) > 0) {
                const temp  = items[i];
                items[i] = items[i + 1];
                items[i + 1] = temp;
            }
        }
    }
}

const products = [
    { name: "TV", price: 100000, rating: 9.1 },
    { name: "Fridge", price: 20000, rating: 8.3 },
    { name: "Vacuum", price: 14000, rating: 7.5 },
    { name: "Washing machine", price: 30000, rating: 9.2 },
    { name: "Toster", price: 200000, rating: 8.7 },
    { name: "Microwave", price: 7000, rating: 8.2 },
    { name: "Player", price: 20000, rating: 9.0 },
    { name: "Kettle", price: 80000, rating: 7.8 },
    { name: "CD", price: 5000, rating: 7.1 },
  ];
  
bubbleSort(products, compareByPrice);  
console.log(products);

bubbleSort(products, compareByRating);
console.log(products);
  