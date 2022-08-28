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

// time: O(n) | space: O(n)
const isSymmetricHelper = (left, right) => {
    if (left === null || right === null) return left === right;

    if (left.val !== right.val) return false;

    return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
}

const isSymmetric = (root) => {
    return root === null || isSymmetricHelper(root.left, root.right);
};

