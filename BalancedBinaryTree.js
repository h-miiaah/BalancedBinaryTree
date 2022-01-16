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

  };

  var balancedHelper = function (root, depth) {
    if (!root) return depth;
    var left = balancedHelper(root.left, depth + 1);
    var right = balancedHelper(root.right, depth + 1);
  };