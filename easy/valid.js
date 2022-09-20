var isValid = function(s) {
    if(s.length == 0 || s.length%2 != 0){
        return false
    };
    
    let symbol;
    let symbolPre;
    let tempArr=[];

    for(i = 0;i<s.length;i++){
        symbol=s[i];
        
        if(!symbolpair[symbol]){
            if(symbol==symbolpair[symbolPre]){
                tempArr.pop();
                symbolPre = tempArr[tempArr.length-1]
                continue;
            } else{
                return false
            }
        }

        tempArr.push(symbol);
        symbolPre = symbol;
        
    }

    if(tempArr.length != 0){
        return false
    }
    return true
};


const symbolpair = {
    "(":")",
    "{":"}",
    "[":"]",
}