//Zigzag Conversion
var convert = function(s, numRows) {
    if(s.length === 1){
        return s
    }
    
    let gap;
    let ans_string = "";
    let string_length = s.length;
    let step_1;
    let step_2;
    let pointer_1;
    let pointer_2;
    
    numRows !== 1? gap = numRows*2 - 2 : gap = 1;
    
    for(let i=0; i<numRows; i++){
        pointer_1 = i
        step_1 = gap - i*2;
        step_2 = gap - step_1;
        
        if(!step_1 || !step_2){
            step_1 = Math.max(step_1, step_2);
            while(pointer_1<string_length){
                ans_string += s[pointer_1];
                pointer_1 += gap;
            }
        } else {
            pointer_2 = pointer_1 + step_1;
            
            while(pointer_1<string_length){
                if(s[pointer_1])ans_string += s[pointer_1];
                if(s[pointer_2])ans_string += s[pointer_2];
                pointer_1 += gap;
                pointer_2 += gap;
            }
        } 
    }
    return ans_string;
};

/*
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Input: s = "A", numRows = 1
 * Output: "A"
*/

console.log(convert("PAYPALISHIRING",3))