//Given a string s, return the longest palindromic substring in s.
//A string is called a palindrome string if the reverse of that string is the same as the original string.

/*Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.*/

var longestPalindrome = function(s) {
    if(s.length == 1){
        return s
    };

    let sub_string = "";
    let ans_string = "";
    let pointer_left;
    let pointer_right = 1;

    while(pointer_right < s.length){
        pointer_left = pointer_right-1;

        if(s[pointer_left] === s[pointer_right]){
            sub_string = check_function(s,pointer_left,pointer_right);
            if(sub_string.length > ans_string.length) ans_string = sub_string;
        }

        pointer_right++;

        if(s[pointer_left] === s[pointer_right]){
            sub_string = check_function(s,pointer_left,pointer_right);
            if(sub_string.length > ans_string.length) ans_string = sub_string;
        }
    }
    // 避免完全無對稱的 case ex: "ac"
    if(!ans_string) return s[0]

    return ans_string;
};

const check_function = function(s,pointer_left,pointer_right){
    let sub_string = "";

    while(pointer_left >= 0){
        if(s[pointer_left] !== s[pointer_right]){
            break;
        }
        pointer_left--;
        pointer_right++;
    }

    sub_string = s.slice(pointer_left+1,pointer_right)

    return sub_string
}

console.log(longestPalindrome("xabax"));
console.log(longestPalindrome("cabbbacdfgxabaxdcaba"));