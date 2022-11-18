var invertTree = (node) =>{
    if (node !== null) {
        const temp = node.left;
        node.left = invertTree(node.right);
        node.right = invertTree(temp);
    }
    return node;
};