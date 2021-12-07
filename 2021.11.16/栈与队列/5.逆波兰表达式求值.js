/**
 * 150. 逆波兰表达式求值
 * 根据 逆波兰表示法， 求表达式的值。
 有效的运算符包括 + , -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 说明：
 整数除法只保留整数部分。 
 给定逆波兰表达式总是有效的。 
 换句话说， 表达式总会得出有效数值且不存在除数为 0 的情况。
 输入: ["2", "1", "+", "3", " * "]
 输出: 9
 解释: 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    // 定义一个栈(数组) 存储结果
    const res = []
    // 遍历字符串 s, 如果字符不是+-*/,那么就往数组中添加元素
    for (let i = 0; i < tokens.length; i++) {
        if (['+', '-', '*', '/'].indexOf(tokens[i]) > -1) {
            const last = Number(res.pop())
            const first = Number(res.pop())
            // 如果是运算符，那么就把数组中的最后两个元素弹出，并求值添加到数组
            switch (tokens[i]) {
                case '+':
                    res.push(last + first);
                    break;
                case '-':
                    res.push(first - last);
                    break;
                case '*':
                    res.push(last * first);
                    break;
                case '/':
                    res.push(parseInt(first / last));
                    break
            }
            continue
        }
        // 如果不是，则将该元素添加到数组中
        res.push(tokens[i])
    }
    return res.pop()
};