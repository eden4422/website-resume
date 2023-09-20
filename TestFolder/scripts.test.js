const { quickSort } = require('../Script/scripts.js'); 

test('quickSort function', () => {
  let arr = [10, 5, 1, 9, 8, 7];
  let sortedArr = [1, 5, 7, 8, 9, 10];

  // Call the function and store the result
  let result = quickSort(arr, 0, arr.length - 1);

  // Use the `toEqual` matcher to compare arrays
  expect(result).toEqual(sortedArr);
});

test('quickSort invalid', () => {
    let sortedArr = [1, 5, 7, 8, 9, 10];
  
    // Call the function and store the result
    let result = quickSort("a", 0, arr.length - 1);
  
    // Use the `toEqual` matcher to compare arrays
    expect(result).toEqual(sortedArr);
  });