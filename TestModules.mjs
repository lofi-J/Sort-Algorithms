function isSorted(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i-1]) {
      return false;
    }
  }
  return true;
}

function testAlgorithm(fn, target) {
  try {
    const startTime = performance.now(); // 시작 시간
    const sorted = fn(target);
    const endTime = performance.now(); // 종료 시간
    const elapsedTime = endTime - startTime;
    
    const status = isSorted(sorted);
    return {status: status, elapsedTime: elapsedTime};
  } catch (e) {
    console.error(`${e}\n유효하지 않은 함수 및 매개변수`);
    return undefined;
  }
}

export default testAlgorithm;
