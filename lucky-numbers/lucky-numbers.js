// @ts-check

import { isNullOrUndefined } from "util";

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let numberOne = Number(array1.toString().split(',').join(''));
  let numberTwo = Number(array2.toString().split(',').join(''));
  let sum = numberOne + numberTwo;
  return sum;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let valueInString = String(value);
  let reversedValueInString = valueInString.split('').reverse().join('');
  let reversedValue = Number(reversedValueInString);
  if ( value == reversedValue ){
    return true;
  } else {
    return false;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if ( input === null || input === undefined || input === '' ){
    return 'Required field';
  } else if( isNaN(Number(input)) || Number(input) == 0 ){
    return 'Must be a number besides 0';
  } else{
    return '';
  }
}
