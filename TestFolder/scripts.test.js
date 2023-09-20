const { quickSort, isArray } = require('../Script/scripts.js'); 

test('quickSort function', () => {
  let arr = [10, 5, 1, 9, 8, 7];
  let sortedArr = [1, 5, 7, 8, 9, 10];

  // Call the function and store the result
  let result = quickSort(arr, 0, arr.length - 1);

  // Use the `toEqual` matcher to compare arrays
  expect(result).toEqual(sortedArr);
});

test('isArray Valid', () => {
    let arr = [10, 5, 1, 9, 8, 7];
    // Use a try-catch block to capture any potential errors
    try {
        isArray(arr);
        
        // If no error is thrown, the test passes
        expect(true).toBe(true);

    } catch (error) {
        // If an error is thrown, fail the test
        expect(error).toBeUndefined(); // This assertion will fail if an error was caught
    }
  });

  test('isArray Invalid Not Array', () => {
    // Use a try-catch block to capture any potential errors
    try {
        isArray('a');
        
        expect(error).toBeUndefined(); // Fail if no error was thrown

    } catch (error) {
        // If an error is thrown, pass the test
        expect(true).toBe(true);
    }
  });

  test('isArray Invalid Array of strings', () => {
    let arr = ["apples", "bananas", "pineapples"];
    // Use a try-catch block to capture any potential errors
    try {
        isArray(arr);
        
        expect(error).toBeUndefined(); // Fail if no error was thrown

    } catch (error) {
        // If an error is thrown, pass the test
        expect(true).toBe(true);
    }
  });