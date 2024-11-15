const selectionSort = (array) => {
  const arr = [...array];
  const l = arr.length;
  
  for (let i = 0; i < l-1; i++) {
    let minIndex = i;
    for (let j = i+1; j < l; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  
  return arr;
}

export default selectionSort;
