/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 var isBalanced = function(root) {
    return balancedHelper(root, 0) >= 0;
  };

  var balancedHelper = function (root, depth) {
    if (!root) return depth;
    var left = balancedHelper(root.left, depth + 1);
    var right = balancedHelper(root.right, depth + 1);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    return Math.max(left, right);
  };


  /*

  - We start with a balancedHelper function that takes in a node and its current depth.
  - If the node is null, we return the current depth.
  - Otherwise, we recursively call the balancedHelper function on the node’s left and right children.
  - If any of the recursive calls return -1, then we know the tree is unbalanced, and we immediately return -1.
  - Otherwise, we return the maximum depth of the left or right subtree.

  */