// Topic: Tree, Breadth-First-Search, Binary Tree

 // Definition for a binary tree node.
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root, list = []) {
    if (!root?.val && root?.val !== 0) return [];
    const result = [];
    result[0] = [];

    const traversal = (tree, level) => {
        if (tree?.val || tree?.val === 0) {
            if (!result[level]) {
                result[level] = [];
            }
            result[level].push(tree.val);
        }

        if (tree?.left) {
            traversal(tree?.left, level + 1);
        }

        if (tree?.right) {
            traversal(tree?.right, level + 1);
        }
    }
    traversal(root, 0);
    return result;
};

console.log(levelOrder([3,9,20,null,null,15,7]));