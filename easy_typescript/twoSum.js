function twoSum(nums, target) {
    var complementaryNum;
    var checkObject;
    var ansArray = new Array(2);
    for (var i = 0; i < nums.length; i++) {
        complementaryNum = target - nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] === complementaryNum) {
                ansArray[0] = i;
                ansArray[1] = j;
                break;
            }
        }
    }
    return ansArray;
}
;
console.log(twoSum([2, 7, 11, 15], 9));
