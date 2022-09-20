// object search method
// key-value pairs

var twoSum = function(nums, target) {
    let result = [];
    let index = {};
    for(let i=0;i<nums.length;i++){
        let tempNum = target - nums[i];
       
        if(index[tempNum] != undefined){
            result.push(index[tempNum],i);
            break
        }
         index[nums[i]]=i;
    }
    return result
};

//nums = [2,7,11,15], target = 9
//ouput: [0,1] (return index)
console.log(twoSum([2,7,11,13],9));