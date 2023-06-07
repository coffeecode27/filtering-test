function minMaxArray(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    return { min, max };
  }
  
  const array = [2, 3, 4, 5, 6, 7, 8, 9, 1, 10];
  const {min, max } = minMaxArray(array);
  console.log(`min = ${min}\nmax = ${max}`);