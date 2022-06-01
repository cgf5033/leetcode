/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // start at the root
    const node = root;
    if (p.val > node.val && q.val > node.val) {
        return lowestCommonAncestor(node.right, p, q);
    } else if (p.val < node.val && q.val < node.val) {
        return lowestCommonAncestor(node.left, p, q);          
    }
    return node;
};