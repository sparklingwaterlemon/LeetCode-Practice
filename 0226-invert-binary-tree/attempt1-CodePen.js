// Independent Take - no outside resource...
// First Take on Inverting a Binary Tree

// creating Class Constructor Nodes for Binary Tree
class Node{
	constructor(val, left, right){
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
};


// Creating Binary Tree
// root = [4,2,7,1,3,6,9]
let root = new Node(4);
let node2 = new Node(2);
let node7 = new Node(7);
let node1 = new Node(1);
let node3 = new Node(3);
let node6 = new Node(6);
let node9 = new Node(9);

root.left = node2;
root.right = node7;
node2.left = node1;
node2.right = node3;
node7.left = node6;
node7.right = node9;


// Invert Binary Tree Function
var InvertTree = (tree) =>{
	let newRoot = new Node(tree);
		console.log(newRoot.val);
	
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
	
	console.log(newRoot.val)
}

InvertTree(root);

// Inverts the tree but..
// This solution does not "run" in LeetCode :-(