/**
 * 输入一个整数数组， 判断该数组是不是某二叉搜索树的后序遍历的结果。
 *  如果是则返回 true， 否则返回 false。 假设输入的数组的任意两个数字都互不相同。
 */
/**
 * 中序遍历（升序排列）：左右中
 * 前序遍历：根左右
 * 分析：二叉树的后序遍历：左右根  最后一个肯定是二叉树的根元素
 * 左边树都比这个根元素小
 * 右边树都比这个根元素大，
 * 如果满足以上两个条件则是，反之不是
 */
function isPostOrder(list) {
    if (list === null || list.length === 0) {
        return false
    }
    let len = list.length
    let root = list[len - 1]
    let index = 0;
    for (; index < len - 1; index++) {
        if (list[index] > root) { // 左边节点小于根节点
            break
        }
    }
    // 右边树是否符合
    for (let j = index; j < len - 1; j++) {
        if (list[j] < root) { // 如果有一个比根元素小 右边树就不符合二叉搜索树的规则
            return false
        }
    }
    // 第2，3....n轮判断
    // 左边树判断
    let leftFlag = true
    if (index > 0) {
        let leftList = list.slice(0, index)
        leftFlag = isPostOrder(leftList)
    }
    // 右边树判断
    let rightFlag = true
    if (index < len - 1) {
        let rightList = list.slice(index, len - 1)
        rightFlag = isPostOrder(rightList)
    }
    return leftFlag && rightFlag
}
console.log(isPostOrder([5, 7, 6, 9, 11, 10, 8]))
console.log(isPostOrder([7, 4, 6, 5]))