/*
1) Write a JavaScript function called uniqueValues that takes an array as an argument and returns a new array containing only the unique values from the original array, removing any duplicate values.

For example, if the input array is [1, 2, 2, 3, 4, 4, 5], the function should return [1, 2, 3, 4, 5] as the output.

*/

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
2) Write a JavaScript function called factorial that takes a positive integer as an argument and returns the factorial of that number.

The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. For example, the factorial of 5 (written as 5!) is calculated as 5 x 4 x 3 x 2 x 1, which equals 120.
*/

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

/*Question:
3) Write a JavaScript function called sumDigits that takes a positive integer as an argument and returns the sum of its digits.

For example, if the input number is 123, the function should return 6 (1 + 2 + 3).*/

const sumDigits = (num) => {
  let numToStr = num.toString();
  let sum = 0;
  for (i = 0; i < numToStr.length; i++) {
    sum += parseInt(numToStr[i]);
  }
  return sum;
};

console.log(sumDigits(800));

/*Question
4) Write a JavaScript function called reverseArray that takes an array as an argument and returns a new array with the elements in reverse order. The original array should remain unchanged.

For example, if the input array is [1, 2, 3, 4, 5], the function should return [5, 4, 3, 2, 1].*/

const reverseArray = (arr) => {
  let newArr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};
console.log(reverseArray([1, 2, 3, 4]));

/*Question:
5) Write a JavaScript function called findMax that takes an array of numbers as an argument and returns an array containing the maximum value(s) in the array. If there are multiple maximum values, all of them should be included in the resulting array.

For example, if the input array is [5, 8, 2, 1, 10, 10, 8], the function should return [10, 10] since 10 is the largest number in the array, and it appears twice.*/

const findMax = (arr) => {
  let newArr = [];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

console.log(findMax([5, 8, 2, 1, 10, 10, 8, 70, 300]));
