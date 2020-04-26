/*
ump Game

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var i=0,max=0,last = nums.length-1;
    //iterate through array elements
    while(i<nums.length){
        //take maxiumum of max value and (index+jump capacity of ith element)
        max = Math.max(max,i+nums[i]);
        //max can jump greater than or till last element
        if(max>=last)
            return true;
        //early exit condition - if ith element is '0' and max can't go farther than ith element
        if(max<=i && nums[i]===0)
            return false;
        i++;
    }
    return false;
};
