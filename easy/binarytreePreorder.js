var preorderTraversal = function(root) {
    if(!root) return [];
    
    let tempStack = [];
    let preorderArray = [];
    let tree = root;
    //整棵樹先放進stack中
    tempStack.push(tree);
    
    while(true){
        if(tempStack.length!=0){
            //把stack最上層取出
            tree = tempStack.pop()
            //取出值
            preorderArray.push(tree.val)
            //判斷是否有右左，先放右、再放左
            if(tree.right) tempStack.push(tree.right);
            if(tree.left) tempStack.push(tree.left);
        } else {
            //stack結束即出回圈
            break;
        }
    }
    return preorderArray;
};