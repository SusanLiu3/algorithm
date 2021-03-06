/**
 * 一个整型数组里除了两个数字之外， 其他的数字都出现了两次。
 *  请写程序找出这两个只出现一次的数字。 要求时间复杂度是 O（ n）， 空间复杂度是O（ 1）。
 */
/**
 * 知识回顾: (http: //c.biancheng.net/view/5469.html)
 *   a.异或^运算符:
 *      1^1=0;1^0=1 ; 0^1=1 0^0=0
 *     1. 任何数和自身做异或运算，结果是0
 *     2. 0 和任何数做异或运算，结果是任何数
 *   b. &运算符：
 *     1 & 1 =1；1&0=0 0&0=0 0&1=0 可以用来判断一个数二进制1的个数
 * 
 * 依次让数组中的元素做异或操作，出现两次的元素在异或操作中抵消，
 * 结果不为0，记录第一次出现1的位置，判断原数组中这个位置是否为1 将数组分为两组：
 * 第一组，这个位置是1的元素，第二组是这个位置是0的元素；相同的元素会被分在同一组
 * 分别对两组元素做异或操作，结果就是两个不同的数字
 * @param {*} list 
 */
function appearOnceNumber(list) {
    let res = 0
    for (let i = 0; i < list.length; i++) {
        res = res ^ list[i]
    }
    let firstIdx = 0
    while (true) {
        if ((res >> firstIdx) & 1) {
            break;
        }
        firstIdx++
    }
    let num1 = 0
    let num2 = 0
    for (let i = 0; i < list.length; i++) {
        if (isOne(list[i], firstIdx)) {
            num1 = num1 ^ list[i]
        } else {
            num2 = num2 ^ list[i]
        }
    }

    function isOne(num, index) {
        return (num >> index) & 1
    }
    return [num1, num2]
}

console.log(appearOnceNumber([2, 4, 3, 6, 3, 2, 5, 5]))