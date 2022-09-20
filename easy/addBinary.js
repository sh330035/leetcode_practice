//位數很高的時候，會不精確 - using BigInt
//0b(二進位):0b11n, 0o(八進位):0o17n, base10(十進位):10n, 0x(十六進位):0x1fn
var addBinary = function(a, b) {
    let add = BigInt("0b"+a) + BigInt("0b"+b);
    console.log(BigInt("0o112"))
    return add.toString(2)
};

console.log(addBinary('11','1')) //100
console.log(addBinary("1010","1011")) //10101