//recursion, dynamic programing
let table = {};

var f = function(n){
    if(n === 0 || n === 1) return table[n]=1;
    
    
    if(table[n]) return table[n];

    //key logic point
    table[n] = table[n-1] + table[n-2];
    return table[n];
};

var climbStairs = function(n){
    if(table[n]) return table[n];
    for(i=0;i<=n;i++){
        f(i);
        console.log(table)
    }
    
    return table[n];
};


console.log(climbStairs(2),climbStairs(5)) // 2
console.log(climbStairs(5)); // 3