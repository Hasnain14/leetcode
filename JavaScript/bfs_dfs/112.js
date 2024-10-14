var hasPathSum = function(root, targetSum) {
    // If the tree is empty i.e. root is NULL, return false...
	if (root == null) return false;
    // If there is only a single root node and the value of root node is equal to the targetSum...
    console.log(root);
	// if (root.val == targetSum && (root.left == null && root.right == null)) return true;
    // // Call the same function recursively for left and right subtree...
	// return hasPathSum(root.left, targetSum - root.val)|| hasPathSum(root.right, targetSum - root.val);
};

let root = [5,4,8,11,null,13,4,7,2,null,null,null,1];
let targetSum = 5;

let res = hasPathSum(root, targetSum);
// console.log(res);