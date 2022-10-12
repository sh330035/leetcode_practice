function twoSum(nums: number[], target: number): number[] {
    let complementaryNum: number;
    let checkObject: object;
    let ansArray: number[] = new Array(2);
    
    for(let i=0; i<nums.length;i++){
        complementaryNum = target - nums[i];
        
        for(let j=i+1; j<nums.length; j++){
            if(nums[j] === complementaryNum) {
                ansArray[0] = i;
                ansArray[1] = j;
                break;    
            }
        }
    }
    return ansArray;
};

console.log(twoSum([2,7,11,15],9));