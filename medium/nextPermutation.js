var nextPermutation = function(nums) {
    //去除特例，直接回傳
    if(nums.length === 1) return nums;

    let leftpointer = nums.length - 2;
    //大到小的區段才需要做調整，先抓出左端最終位置
    while(leftpointer >= 0 && nums[leftpointer] >= nums[leftpointer+1]) {
        leftpointer--;
    }

    if(leftpointer>=0){
        let rightpointer = nums.length - 1;
        //找出第一個交換的位置(右邊數來第一個遇到大於左端點的值)
        while(rightpointer >= 0 && nums[rightpointer] <= nums[leftpointer]){
            rightpointer--;
        }
        //把最先碰到大於左端的值換到左邊（左端先進位）
        [nums[rightpointer],nums[leftpointer]]=[nums[leftpointer],nums[rightpointer]];
    }
    //最左邊已確認，所以+1進行置換
    return tranlationNums(leftpointer+1, nums);
};

const tranlationNums = (left, nums) => {
    let right = nums.length-1;
    while(right>left){
        [nums[right],nums[left]]=[nums[left],nums[right]];
        right--;
        left++;
    }
    return nums;
}

console.log(nextPermutation([3,2,1]))