function sumZero(arr) {
    arr.sort((a, b) => a - b); // Mengurutkan array
  
    for (let i = 0; i < arr.length-1; i++) {
      let leftVal = i + 1;
      let rightVal = arr.length-1;
  
      while (leftVal < rightVal) {
        const sum = arr[i] + arr[leftVal] + arr[rightVal];
  
        if (sum === 0) {
          return [arr[i], arr[leftVal], arr[rightVal]];
        } else if (sum < 0) {
          leftVal++;
        } else {
          rightVal--;
        }
      }
    }
  
    return [];
  }
  
  // Contoh penggunaan fungsi:
  const arr = [2,3,4,-1,-2]; //[-2,-1,2,3,4]
  const result = sumZero(arr);
  console.log(result); // Output: [ -2, -1, 3 ]