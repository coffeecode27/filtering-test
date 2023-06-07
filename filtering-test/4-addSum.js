function addSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return [i, j];
        }
      }
    }
  
    return []; // Jika tidak ada pasangan elemen yang jumlahnya sama dengan target
  }
  
  const arr = [2, 7, 11, 15];
  const result = addSum(arr, 9);
  console.log(result); // Output: [0, 1]
  