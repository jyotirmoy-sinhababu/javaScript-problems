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

const secondSmallestNum = (arr) => {
  let smallest = Infinity;
  let result = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > smallest && arr[i] < result) {
      result = arr[i];
    }
  }
  return result;
};

console.log(secondSmallestNum([2, 7, 9, 0, 4]));

/*The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

Your task is to write a JavaScript function called fibonacci that takes an integer n as input and returns the nth Fibonacci number.*/

const fibonacci = () => {};

/*Write a JavaScript function called removeDuplicates that takes an array as input and returns a new array with all the duplicate elements removed. The order of the elements in the resulting array should be maintained. */

const removeDuplicates = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(removeDuplicates([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 2, 3, 2, 4, 3])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates([5, 4, 3, 2, 1, 2])); // Output: [5, 4, 3, 2, 1]
console.log(removeDuplicates([1, 1, 1, 1])); // Output: [1]

/*Write a JavaScript function called isAnagram that takes two strings as input and returns true if the two strings are anagrams of each other, and false otherwise. Anagrams are words or phrases formed by rearranging the letters of another word or phrase. */

const isAnagram = (a, b) => {
  let firstStr = a.toLowerCase();
  let secondStr = b.toLowerCase();

  if (firstStr.length != secondStr.length) {
    return false;
  }
  let firstStrSorted = firstStr.split('').sort().join();
  let secondStrSorted = secondStr.split('').sort().join();

  return firstStrSorted === secondStrSorted;
};
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false
console.log(isAnagram('debit card', 'bad credit')); // Output: true

/*Write a function called findEvenNumbers that takes in an array of numbers and returns a new array containing only the even numbers.*/

const findEvenNumbers = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      return false;
    }
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(findEvenNumbers([1, 2, 4, 5, 6, 8]));

/*Write a function called calculateAverage that takes in an array of numbers and returns the average of those numbers.*/

const calculateAverage = (arr) => {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  }
  return avg;
};
console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(calculateAverage([10, 20, 30, 40, 50])); // Output: 30
console.log(calculateAverage([2, 4, 6, 8, 10])); // Output: 6
console.log(calculateAverage([])); // Output: 0 (assuming 0 as the average of an empty array)
