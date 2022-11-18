
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
// See solution.js file

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
// will not accept dummy.left variable
