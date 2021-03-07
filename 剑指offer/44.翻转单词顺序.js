/**
 * 翻转单词顺序
 */

 function reverse(str) {
     let list=str.split(' ').reverse()
     return list.join(' ')
 }
 console.log(reverse('i am a student.'))