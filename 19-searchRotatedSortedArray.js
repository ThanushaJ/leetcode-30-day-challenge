/*
Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var l=0,r=nums.length-1;

    while(l<=r){
        var mid = Math.floor((l+r)/2);

        var midElement = nums[mid], leftPos = nums[l], rightPos = nums[r];

        //if target is equal to middle element
        if(target == midElement) return mid;

        //if midElement is less than leftPos - in right portion of rotation
        if(midElement<leftPos){
            if(target<=rightPos && target>midElement)
                l = mid+1;
            else
                r = mid -1;
        }
        //if midElement is in left portion of rotation
        else {
            if(target >=leftPos && target<midElement)
                r = mid-1;
            else
                l = mid+1;
        }


    }
    return -1;
};
