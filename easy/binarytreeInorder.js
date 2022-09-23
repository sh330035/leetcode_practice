var inorderTraversal = function(root) {
    if(!root) return [];
    
    let tempStack = [];
    let inorderArray = [];
    //root轉成內部變數，較好操作
    let tree = root;

    //無條件進行迴圈（必要設置 break）
    while(true){
        //如果左邊有，持續將左邊的 tree 推進 stack 中
        if(tree){
            tempStack.push(tree);
            tree = tree.left;
        } else {
            //左邊沒了之後，進入此區
            //進入此區，若stack中已被取完，則結束回圈
            if(!tempStack.length) break;
            //取出stack最後加入的tree，將value加進答案中
            tree = tempStack.pop();
            inorderArray.push(tree.val);
            //而後走右邊往下
            tree = tree.right;
        }
    }
    return inorderArray;
};