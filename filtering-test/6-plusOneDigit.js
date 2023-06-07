function plusOneDigit(digit) {
    const incrementedNumber = Number(digit.join('')) + 1; // Menambahkan 1 pada angka bilangan
    const result = Array.from(incrementedNumber.toString(), Number); // Mengonversi angka bilangan menjadi array digit
  
    return result;
  }
  
  const digit = [9];
  const result = plusOneDigit(digit);
  console.log(result);
  