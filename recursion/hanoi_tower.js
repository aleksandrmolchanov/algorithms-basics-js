const hanoi = (height, from, to) => {
    if (height === 1) {
        console.log('from %d to %d', from, to);
        return;
    }
    
    const temp = 6 - from - to;
    hanoi(height - 1, from, temp);
    console.log('from %d to %d', from, to);
    hanoi(height - 1, temp, to);
}

hanoi(4, 1, 2);