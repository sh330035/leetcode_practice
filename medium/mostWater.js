// pointer, left & right (smaller switch)
var maxArea = function(height) {
    let maxWater = -Infinity;
    let temp;
    let leftPointer = 0;
    let rightPointer = height.length-1;
    let leftNum = height[leftPointer];
    let rightNum = height[rightPointer];

    while(leftPointer < rightPointer){
        temp = calArea(rightNum, leftNum, rightPointer, leftPointer)

        if(temp > maxWater) maxWater = temp;
    

        if(leftNum > rightNum){
            rightPointer --;
            rightNum = height[rightPointer];
            continue;
        } 

        leftPointer ++;
        leftNum = height[leftPointer];
    }

    return maxWater;
};

const calArea = function(rightNum, leftNum, rightPointer, leftPointer){
    let dis = rightPointer - leftPointer;
    let area = Math.min(rightNum*dis, leftNum*dis);
    return area
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([2,5,8]));