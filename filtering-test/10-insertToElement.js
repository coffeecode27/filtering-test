function insertToElement(array, target) {
    const newArray = [...array];
    newArray.push(target);
    newArray.sort((a, b) => a - b);
    return newArray;
  }
  
  
  const array = [4, 20, 1, 7];
  const target = 9;
  const result = insertToElement(array, target);
  console.log(result); // Output: [1, 4, 7, 9, 20]
  