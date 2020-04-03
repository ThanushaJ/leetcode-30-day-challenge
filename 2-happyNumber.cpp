/*Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:

Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

class Solution {
public:
    bool isHappy(int n) {
        int r1=n,r2=sqSum(n);
    while(r2!=r1){
        r1=sqSum(r1);
        r2=sqSum(sqSum(r2));
    }
    return r1==1;
    }
    int sqSum(int n){
    int result=0;
    while(n){
        int temp=n%10;
        result+=temp*temp;
        n/=10;
    }
    return result;
};

};
