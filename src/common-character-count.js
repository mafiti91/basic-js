const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let summ = 0;
  arr1 = s1.split('');
  arr2 = s2.split('');
  if( (arr1.length === 0) || (arr2.length === 0) ) {
    summ = 0
  } else {
    for(i = 0; i < arr1.length; i++) {
      if( arr2.includes(arr1[i]) ) {
        summ++
        arr2.splice( arr2.indexOf(arr1[i]), 1 )
      }
    }
  }
  return summ;
}

module.exports = {
  getCommonCharacterCount
};
