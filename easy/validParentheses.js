// keywords: stack pop & if...else

function isValid(s) {
    let strArray = s.split("");
    let tempArray = [];
    let tempSymbol;
    let tempPre;
    
    if(strArray.length<=1||strArray.length%2 != 0){
            return false
        }
    
    while(strArray.length>0){

        tempSymbol = strArray.pop();
           
        
        if(symbolCata[tempSymbol]=="left"){
            tempPre = tempArray[tempArray.length-1];
            if(!checkSymbol(tempSymbol, tempPre)){
                return false;
            } else {
                tempArray.pop();
            }
            continue;
        }
        tempArray.push(tempSymbol);
    }
    if(tempArray.length != 0){
        return false
    }
    return true;
};

function checkSymbol(first,second){
    if(first == "(" && second == ")") {
        return true
    } else if (first == "{" && second == "}"){
        return true
    } else if (first == "[" && second == "]"){
        return true
    } 

    return false
}

let symbolCata = {
    "(":"left",
    "{":"left",
    "[":"left",
    ")":"right",
    "}":"right",
    "]":"right"
}

console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("(){}{[]}"));