var inorderTraversal = function(root) {
    if(!root) return [];
    
    let tempStack = [];
    let inorderArray = [];
    let tree = root;

    while(true){
        if(tree!==null){
            tempStack.push(tree);
            tree = tree.left;
        } else {
            if(!tempStack.length) break;
            tree = tempStack.pop();
            inorderArray.push(tree.val);
            tree = tree.right;
        }
    }
    return inorderArray;
};