var invertTree = function(root) {
    
    if( root != null ){
        
        // General case:
        // invert child node of current root
        [root.left, root.right] = [root.right, root.left];
        
        // invert subtree with DFS
        invertTree(root.left);
        invertTree(root.right);
        return root;
        
    }else{
        
        // Base case:
        // empty tree or empty node
        return null; 
    }  
};

function invertTree(root){
    if(!root){
        let temp = root.right;
        root.right = root.left;
        root.left = temp;
  
        // traverse
        invertTree(root.left);
        invertTree(root.right);
  
        return root;
    } else {
        return root
    }
};