// Letter combinations of a phone number
var letterCombinations = function(digits){
    let comb = []
    //排除特殊狀況
    if(digits.length == 0) return comb
    //把第一個數字的文字先抓出來
    comb = numberToLetter[digits[0]]
    //外層迴圈－跑數字鍵
    for(let i=1; i<digits.length; i++){
        let tempArr = []
        let tempArr2 = []
        //內層迴圈－跑文字
        //依照題意 數字鍵在後者先進行 map (ad,ae,af,bd,be ...)
        for(let j=0; j<comb.length;j++){
            tempArr = numberToLetter[digits[i]].map(x=> comb[j]+x)
            tempArr2 = tempArr2.concat(tempArr);
        }   
       comb = tempArr2
    }
    return comb
}
// 數字對應的文字
const numberToLetter = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z']
}

console.log(letterCombinations(''));
console.log(letterCombinations("2327"));