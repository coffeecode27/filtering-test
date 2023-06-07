function findTarget(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return `target index tidak ditemukan`; // Jika target index tidak ditemukan dalam array
  }
  
  const arr = [-1, 2, 5, 6, 7];
  const index = findTarget(arr, 7);
  console.log(index);
  