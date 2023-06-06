/*
Write a JavaScript function called uniqueValues that takes an array as an argument and returns a new array containing only the unique values from the original array, removing any duplicate values.

For example, if the input array is [1, 2, 2, 3, 4, 4, 5], the function should return [1, 2, 3, 4, 5] as the output.

Take your time to solve it, and let me know once you have a solution or if you need any hints or further assistance.*/

const uniqueValues = (arr) => {
  let arr1 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
};

/*Question:
Write a JavaScript function called factorial that takes a positive integer as an argument and returns the factorial of that number.

The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. For example, the factorial of 5 (written as 5!) is calculated as 5 x 4 x 3 x 2 x 1, which equals 120.

Take your time to solve it, and let me know once you have a solution or if you need any hints or further assistance.*/

const factorial = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  }
  let result = 1;
  for (i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(4));
