/**
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 * 例如，当字符串为We Are Happy。则经过替换之后的字符串为We%20Are%20Happy
 */
/**
 * 正则使用
 * 字符串split()使用
 */
function replaceSpace(str){
    // 如果需要替换多个连续空格 /\s+/g
    // return str.replace(/\s/g,'%20')
    return str.split(' ').join('%20')
}
console.log(replaceSpace('We Are Happy'))