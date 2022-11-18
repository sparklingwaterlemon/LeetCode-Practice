// using destructing assignment
// previous recursive solution would be considered Depth-First-Search... switching the deepest nodes first then going up
// since I'm switching left and right before looping.. switching a level down per loop. is this top down?
// is the difference top down, bottom up - from the looping(recursive) function coming before or after the switch(function)?

var invertTree = function(root) {
    if(root === null) return root;
    
    [root.left , root.right] = [root.right , root.left];

    invertTree(root.left);
    invertTree(root.right);

    return root
};


// conditional if !== null
var invertTree = function(root) {
    if(root !== null ){
        [root.left, root.right] = [root.right, root.left];
        
     
        invertTree(root.left);
        invertTree(root.right);

        return root;
    } else {
        return null; 
    }  
};
