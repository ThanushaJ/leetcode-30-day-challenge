/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int max_Sub_Array_Sum = nums[0], max_Sum = nums[0];
        int n = nums.size();
        for(int i=1;i<n;i++){
           max_Sum=max(nums[i],max_Sum+nums[i]);
           max_Sub_Array_Sum = max(max_Sub_Array_Sum,max_Sum) ;

        }
        return max_Sub_Array_Sum;
    }
};
