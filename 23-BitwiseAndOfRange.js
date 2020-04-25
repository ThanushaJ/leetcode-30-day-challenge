/*
Bitwise AND of Numbers Range

Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4

Example 2:

Input: [0,1]
Output: 0
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    let shift = 0;
    while(m!=n){ // see till both numbers are equal
      // right shift both numbers by 1
        m >>= 1;
        n >>= 1;
        shift++; // increment the count
    }
    //shift gives the number of zero places from the lsb so left shift m by count.
    return m << shift;
};
