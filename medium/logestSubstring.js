//Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function(s) {
    let longestLength = 0;
    let substring = "";
    
    for(let i=0; i<s.length; i++){
        let letterIndex = substring.indexOf(s[i])
        
        if(letterIndex !== -1) substring = substring.slice(letterIndex+1);

        substring += s[i];
        
        if(substring.length > longestLength) longestLength = substring.length;
    }
    return longestLength;
};

console.log(lengthOfLongestSubstring("abcbcaad"));