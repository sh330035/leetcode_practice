//given a non-negative integer x, compute and return the square root of x
var mySqrt = function(x) {
    if( x === 1 ) return 1
    if( x === 0 ) return 0

    let leftpoint = 0;
    let rightpoint = x;
    let ans;

    while(leftpoint + 1 !== rightpoint){

        ans = Math.floor((leftpoint + rightpoint) / 2);
        ans2 = ans ** 2

        if(ans2 == x) return ans

        if(ans2 > x){
            rightpoint = ans;
            continue
        }
        if(ans < x) {
            leftpoint = ans;
            continue
        }
    }
    return leftpoint;
};

console.log(mySqrt(0))