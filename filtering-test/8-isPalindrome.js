function isPalindrome(array) {
    // menyalin array dengan slice() lalu kemudian direverse(balik urutan)
    const reversedArray = array.slice().reverse();
    return JSON.stringify(array) === JSON.stringify(reversedArray);
  }
  
  const array1 = ["asep", "budi", "budi", "asep"];
  console.log(isPalindrome(array1)); // Output: true
  
  const array2 = ["tik", "tok", "toko", "tik"];
  console.log(isPalindrome(array2)); // Output: false
  