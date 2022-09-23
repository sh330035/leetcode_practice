var postorderTraversal = function(root) {
    if(!root) return [];
    
    let tempStack = [];
    let postorderArray = [];
    let tree = root;
    
    while(true){
        //若抓取到的 tree 是 number 則存進 post array 中(else)
        if(typeof(tree)=="object"){
            //如果預存的 tree 是 null, 則抓 stack 最後一項來跑
            if(tree){
                //貯存節點數值為 number 型別
                tempStack.push(tree.val);
                //右側若有，則先整個存入stack，待左側 null 後往回分析
                if(tree.right) tempStack.push(tree.right);
                tree = tree.left;
            } else {
                //往前一個放進 stack 的 item 進行分析
                tree = tempStack.pop();
            };        
        } else {
            postorderArray.push(tree);
            if(!tempStack.length) break;
            //處理完當前數字後，往前一個 stack item 進行分析
            tree = tempStack.pop();
        }
    }
    return postorderArray;
};