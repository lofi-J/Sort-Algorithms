import testAlgorithm from './TestModules.mjs';
import bubbleSort from './sort_algorithms/BubbleSort.mjs';
import selectionSort from './sort_algorithms/SelectionSort.mjs';
import insertionSort from './sort_algorithms/insertionSort.mjs';


const randomArray = [45, 12, 78, 34, 23, 56, 89, 11, 90, 67];
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const duplicateArray = [5, 3, 3, 5, 1, 5, 2, 3, 4, 5];
const nearlySortedArray = [1, 2, 3, 7, 5, 4, 6, 8, 9, 10];
const mixedArray = [12, -5, 0, 7, -3, 9, -15, 4, -8, 3];

const testDatas = [
  { name: "randomArray", data: randomArray },
  { name: "sortedArray", data: sortedArray },
  { name: "reversedArray", data: reversedArray },
  { name: "duplicateArray", data: duplicateArray },
  { name: "nearlySortedArray", data: nearlySortedArray },
  { name: "mixedArray", data: mixedArray },
];

const test = (algo, name) => {
  console.log(`🎇🎇🎇${name}🎇🎇🎇`);
  
  for (let i = 0; i < testDatas.length; i++) {
    const { name, data } = testDatas[i];
    const { status, elapsedTime } = testAlgorithm(algo, data);
    console.log(`${name}: ${elapsedTime.toFixed(3)} ${status ? '✅':'❌'}`);
  }
  console.log();
}

test(bubbleSort, 'BubbleSort');
test(selectionSort, 'SelectionSort');
test(insertionSort, 'InsertionSort');
