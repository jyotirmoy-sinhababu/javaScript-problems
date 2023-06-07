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

// const findMax = (arr) => {
//   let newArr = [];
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   for (let i = 0; i < arr.length-1; i++) {
//     if (arr[i] >= max) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// };

function findMax(numbers) {
  var max = -Infinity;
  var result = [];

  // Find the maximum value in the array
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  // Add all occurrences of the maximum value to the result array
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === max) {
      result.push(numbers[i]);
    }
  }

  return result;
}
console.log(findMax([5, 8, 2, 1, 10, 10, 8, 70, 300, 100]));

/*Write a function called isPrime that takes a positive integer as input and returns true if the number is prime, and false otherwise. A prime number is a number greater than 1 that is divisible by only 1 and itself.

For example, the number 5 is a prime number because it is only divisible by 1 and 5. However, the number 4 is not prime because it is divisible by 1, 2, and 4.

Your task is to implement the isPrime function and test it with different numbers to check if it correctly identifies prime numbers. */

const isPrime = (num) => {
  let isPrime = true;

  if (num === 0 || num === 1) {
    return (isPrime = false);
  }
  for (i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      isPrime = false;
    } else {
      isPrime = true;
    }
  }
  return isPrime;
};
console.log(isPrime(23));

/*Write a JavaScript function called countVowels that takes a string as input and returns the count of vowels (a, e, i, o, u) present in the string. The function should ignore case, so both uppercase and lowercase vowels should be counted.

For example, countVowels("Hello World") should return 3 because there are three vowels ('e', 'o', 'o') in the string "Hello World".

Implement the countVowels function and test it with different strings to verify if it correctly counts the vowels.*/

const countVowels = (str) => {
  let newStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (
      newStr[i] == 'a' ||
      newStr[i] == 'e' ||
      newStr[i] == 'i' ||
      newStr[i] == 'o' ||
      newStr[i] == 'u'
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowels('i love watching anime'));

/*Question: Write a function that takes an array of numbers as input and returns the second smallest number from the array.*/
