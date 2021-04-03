/**
 * 给定一个赎金信(ransom) 字符串和一个杂志(magazine) 字符串， 
 * 判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。 
 * 如果可以构成， 返回 true； 否则返回 false。
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let res ={}
    for(let i =0;i<ransomNote.length;i++){
        if (res[ransomNote[i]]) {
            res[ransomNote[i]]++
        }else{
            res[ransomNote[i]] = 1
        }
    }
    for (let i=0;i<magazine.length;i++){
        if(res[magazine[i]]){
             res[magazine[i]]--
        }
        
    }
    for (const key in res) {
        if (res[key]>0){
            return false
        }
    }
    return true 
};

console.log(canConstruct('aa','aab'))