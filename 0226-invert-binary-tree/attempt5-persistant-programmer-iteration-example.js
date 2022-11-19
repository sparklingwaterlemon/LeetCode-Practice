// She iterates thru it.. is this level order traversal?
// Let's check it out
// ---
// no it's not . just a different method...
// we are still going down one branch before coming up and doing the other branch
//
// change pop to shift -> will fix it to a level-order-traversal

class Node{
	constructor(val, left, right){
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
};


// root = [4,2,7,1,3,6,9]
let node0 = new Node(4);
let node2 = new Node(2);
let node7 = new Node(7);

let node1 = new Node(1);
let node8 = new Node(8);

let node3 = new Node(3);
let node5 = new Node(5);

let node6 = new Node(6);
let node9 = new Node(9);

node0.left = node2;
node0.right = node7;

node2.left = node1;
node1.left = node8;

node2.right = node3;
node3.right = node5;

node7.left = node6;
node7.right = node9;


// LEETCODE SUBMISSION
// CLEANED UP - "LEVEL ORDER TRAVERSAL"
var invertTree = function(root){
	let queue = [root];
	
	while(queue.length > 0){
        let node = queue.shift();
		
        if(node == null) return node; 
        // once again.. LeetCode will not run unless I have this line...
        // will not recognize node.left, the line below without this conditional statement
        
        let temp = node.left;
        node.left = node.right;
        node.right = temp;

        if(node.left !== null){
            queue.push(node.left);
        };
        if(node.right !== null){
            queue.push(node.right);
        };
        
	};
	return root;
};
invertTree(node0);





// // -- (1) -- ITERATIVE SOLUTION - Persistant Programmer

// var invertTree = (root) =>{
// 	let queue = [root];
// 	console.log("-----queue-----", queue);
// 	console.log("-----queue.length -----", queue.length);
	
// 	while(queue.length > 0){
//         console.log("-----queue-----", queue);
		
//         let node = queue.shift();
// 		console.log("-----shifted node-----", node)
// 		console.log("-----queue post shift-----", queue)
		
// 		if(node !== null){
// 			let temp = node.left;
// 			node.left = node.right;
// 			node.right = temp;
	
// 			console.log("-----node.left-----", node.left);
// 			queue.push(node.left);
// 			console.log("-----node.right-----", node.right);
// 			queue.push(node.right);
			
// 			console.log("-----pushed left & right - queue-----", queue);
// 		};
// 		console.log("-----root-----", root);
// 	};
// 	console.log("-----end-----", root);
// 	return root;
// };
// invertTree(node0);





// // ITERATIVE SOLUTION
// // conditional to if node == null -> return
// var invertTree = (root) =>{
// 	let queue = [root];
	
// 	while(queue.length > 0){
//         console.log("-----queue-----", queue);
		
//         let node = queue.shift();
// 		console.log("-----shifted node-----", node)
		
//         if(node !== null){
//             let temp = node.left;
//             node.left = node.right;
//             node.right = temp;

            
//             queue.push(node.left);
//             queue.push(node.right);
//             console.log("-----post push queue-----", queue);
//             console.log("-----root-----", root);
//         }
// 	}
// 	console.log("-----end-----", root);
// 	return root;
// };
// invertTree(node0);



// //  Cleaned up
// // What if I do a node.left/ node.right only push if not null so I dont need to push null nodes to stack
// // therefore, saving an interation with a conditional?

// var invertTree = (root) =>{
// 	let queue = [root];
	
// 	while(queue.length > 0){
//         let node = queue.shift();

//         let temp = node.left;
//         node.left = node.right;
//         node.right = temp;

//             if(node.left !== null){
//                 queue.push(node.left);
//             }
//             if(node.right !== null){
//                 queue.push(node.right);
//             }
// 	}
//     console.log("---- inverted ----", root);
// 	// return root;
// };
// console.log("---- root ----", node0);
// invertTree(node0);
// // this code did not get accepted by LeetCodes. Cannot read "node.left" of `let temp = node.left`


