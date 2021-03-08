/**
 * 从扑克牌中随机抽 5 张牌， 判断是不是一个顺子， 即这 5 张牌是不是连续的。 
 * 2～ 10 为数字本身， A为1， J为11， Q为12， K为13， 而大、 小王可以看成任意数字
 */
/**
 * 扑克牌是顺子的充分条件：
 * ① 无重复数字
 * ② 最大值-最小值<5 
 * @param {*} list 
 */
function isStraight(list) {
    let set = new Set()
    let min = 14,
        max = 0;
    for (let i = 0; i < list.length; i++) {
        if (!list[i]) {
            continue
        }
        if (set.has(list[i])) {
            return false
        }
        set.add(list[i])
        max = Math.max(max, list[i])
        min = Math.min(min, list[i])
    }
    return max - min < 5
}
console.log('是否是顺子', isStraight([4, 7, 5, 9, 2]))