/*
Valid Parenthesis String

Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True
Note:
The string size will be in the range [1, 100].

*/


/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let opens =[], stars =[];
    for(let i=0;i<s.length;i++){
        // case 1: when no extra "(" opens
        if(s[i]=='(')
            opens.push(i);

       else if(s[i]==')'){
            if(opens.length>0)
                opens.pop();
            else if(stars.length>0)
                stars.pop();
            else
                return false;
        }
        else{
            stars.push(i);
        }

    }
    //case 2: when we have extra "(" left

    if(opens.length!=0 && stars.length!=0){
        for(let j=opens.length;j>=0;j--){
            if(stars.length>0){
                if(opens[j-1]<stars[stars.length-1]){
                    stars.pop();
                    opens.pop();
                }
            }
        }
    }

    if(opens.length==0)
        return true;
    else
        return false;


};
