const quickSort = (elems, direction = 'asc') => {
    const elemsLength = elems.length;
    if (elemsLength === 0) {
      return [];
    }
  
    const index = Math.trunc(elemsLength / 2);
    const element = elems[index];
  
    const smallerElems = [];
    const biggerElems = [];
  
    for (let i = 0; i < elemsLength; i += 1) {
      if (i === index) {
        // eslint-disable-next-line no-continue
        continue;
      }
      const currentElement = elems[i];
      if (currentElement < element) {
        smallerElems.push(currentElement);
      } else {
        biggerElems.push(currentElement);
      }
    }
  
    const sortedSmallerElems = quickSort(smallerElems, direction);
    const sortedBiggerElems = quickSort(biggerElems, direction);
  
    if (direction === 'asc') {
      return [...sortedSmallerElems, element, ...sortedBiggerElems];
    }
    return [...sortedBiggerElems, element, ...sortedSmallerElems];
  };

const items = [34, 65, 35, 68, 23, 67, 48, 63, 77, 48, 29, 45, 34, 14, 45, 64];
console.log(quickSort(items));