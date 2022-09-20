var lengthOfLastWord = function(s) {
    const wordArr = s.split(' ');
    let stringArr = [];

    for(i=0; i<wordArr.length;i++){
        if(wordArr[i]) stringArr.push(wordArr[i])
    }

    const lastWord = stringArr[stringArr.length-1];
    console.log(wordArr)

    return lastWord.length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));

var lengthOfLastWordMultipleSpace = function(s) {
    // s+
    const wordArr = s.trim().split(/\s+/);
    const lastWord = wordArr[wordArr.length-1];
    console.log(wordArr)

    return lastWord.length;
};

console.log(lengthOfLastWordMultipleSpace("   fly me   to   the moon  "));