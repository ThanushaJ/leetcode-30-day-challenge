/*
Subarray Sum Equals K

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
   Hide Hint #1
Will Brute force work here? Try to optimize it.
   Hide Hint #2
Can we optimize it by using some extra space?
   Hide Hint #3
What about storing sum frequencies in a hash table? Will it be useful?
   Hide Hint #4
sum(i,j)=sum(0,j)-sum(0,i), where sum(i,j) represents the sum of all the elements from index i to j-1. Can we use this property to optimize it.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var subarraySum = function(nums, k) {
    var count =0;
    var sumMap = new Map();
    var sum=0;

    for(var i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum===k) count++; // if sum is equal to target
        //if we have seen sum value (sum-k), then we can just subtract sum-(sum-k) to get k
        //so adding the number of occurances of (sum-k) to the count
        if(sumMap.get(sum-k)) count+=sumMap.get(sum-k);
        //setting count - for every sum value
        sumMap.set(sum,1+(sumMap.get(sum)||0));

    }

    return count;
};
