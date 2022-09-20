
var merge = function(nums1, m, nums2, n) {
    if( n === 0 ) return nums1

    let pointer = 0;
    let pointer2  = 0;
    let ins = m;

    while( pointer < m+n ){
        if( pointer >= ins) {
            nums1.splice(pointer, 1, nums2[pointer2]);
            pointer2++;
            pointer++;
            continue
        }
        if(nums1[pointer] > nums2[pointer2]){
            nums1.splice(pointer, 0, nums2[pointer2]);
            pointer2++;
            ins++;
            nums1.pop();
            continue
        } else {
            pointer++;
            continue
        }
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
console.log(merge([-1,0,0,3,3,3,0,0,0],6,[1,2,2],3))