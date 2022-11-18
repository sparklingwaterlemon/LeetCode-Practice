// Persistant Programmers Code

var invertTree = function(root) {

    const reverseNodes = (node) => {
        if(node === null){
            return;
        }

        reverseNodes(node.left);
        reverseNodes(node.right);

        let hold = node.left;
        node.left = node.right
        node.right = hold;
    }

    reverseNodes(root);
    return root;
}
// wtf this was pretty much my CodePen code.
// why didn't LeetCode accept/ run my answer??

// Extra Note - She created an inner function to be recursed. However, we can use the outer function to be recursive
// Here:
function invertTree(root){
    if(root === null) return root;
    
    invertTree(root.left);
    invertTree(root.right);

    let temp = root.right;
    root.right = root.left;
    root.left = temp;
  
    return root;
};



// reworked my CodePen code to have function inside.
var InvertTree = (tree) =>{
    let newRoot = new Node(tree);

    const reverseNodes = (node) => {	
	    let dummy = newRoot.val;
	    while(dummy.left){
		    var temp = dummy.left;
		    dummy.left = dummy.right;
		    dummy.right = temp;		
		    dummy = dummy.left;
	    };
	
	    dummy = newRoot.val.right;
	    while(dummy.right){
		    var temp2 = dummy.left;
		    dummy.left = dummy.right;
		    dummy.right = temp2;
		    dummy = dummy.right;
	    };
    };
    
    reverseNodes(tree)
	
    return newRoot.val
}
// update. leet code will still not accept dummy.left variable
