// keywords: change site

function removeElement(nums, val) {
    let i = 0;
    let loss;
    
    while(i<nums.length){
        if(nums[i]==val){
            nums[i] = nums[nums.length-1];
            loss = nums.pop();
        }else{
            i++;
        }
    }
    return nums
};

console.log(removeElement([3,2,2,3],2));