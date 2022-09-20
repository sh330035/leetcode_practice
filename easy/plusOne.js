var plusOne = function(digits) {
    const length = digits.length;
    let largeInteger = 0;
    console.log(digits)
    //large integer (超過 2^53 -1 數字無法準確表示)
    for (let i = 0; i < length ; i++){
        let power = length - 1 - i;
        largeInteger =  largeInteger + digits[i] * Math.pow(10, power)
        console.log(power, largeInteger, digits[i],Math.pow(10, power))
    }
    //plus one
    largeInteger += 1;
    //back to array
    const digitsPlusOne = String(largeInteger).split('').map(Number);

    return digitsPlusOne;
};

var plusOneOt = function(digits){
    const length = digits.length;

    for(let i = length-1; i>=0;i--){
        if(digits[i] != 9){
            digits[i] += 1;
            break;
        };
        digits[i] = 0;
        if(i===0) digits.unshift(1);
    }
    return digits
}


console.log(plusOneOt([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
console.log(plusOneOt([9,9,9]))
console.log(plusOneOt([1,2,9]))
