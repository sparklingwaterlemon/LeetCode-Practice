// Logical Step by Step
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

console.log(root);





function invertTree(node){
    if (node !== null) {
        const temp = node.left;
        node.left = invertTree(node.right);
        node.right = invertTree(temp);
    }
    return node;  
}

[4,7,2,9,6,3,1]
