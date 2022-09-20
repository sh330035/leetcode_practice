function strStr(haystack, needle) {
    let needleLength = needle.length;
    let haystackLength = haystack.length;
    let tempObject = {};
    
    if(needleLength == 0){
        return 0;
    }else if(needleLength > haystackLength){
        return -1;
    }
    
    for(let i = 0; i+needleLength<=haystackLength;i++){
        if(tempObject[haystack.slice(i,i+needleLength)]==undefined){
           tempObject[haystack.slice(i,i+needleLength)]=i; 
        }
        continue;
    }
    
    if(tempObject[needle]!=undefined){
        return tempObject[needle]
    }else{
        return -1
    }
};

console.log(strStr("hello","ll"))