/**
 * 实现函数 double Power（ double base, int exponent）， 
 * 求 base 的exponent次方。 不得使用库函数， 同时不需要考虑大数问题
 */

 function myPower(double,exponent){
     if (exponent===0){
         return 1
     }
     else if (exponent>0){
         let res=1
         for(let i=0;i<exponent;i++){
             res=res*double
         }
         return res
     }
     else{
         let res=1
         for (let i = 0; i < Math.abs(exponent); i++) {
             res = res * double
         }
         return res?1/res:false
     }
 }
 console.log(myPower(2,-2))