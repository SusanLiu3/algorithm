/**
 * 一只青蛙一次可以跳上1 级台阶， 也可以跳上2 级。 求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */
/**
 * 斐波那契数列变形
 * 分析：当只有一个台阶，青蛙只有一种跳法；当有两个台阶，青蛙可以一次跳1级，也可以一次跳2级，共两种跳法
 * 当台阶数大于2时，我们把n级台阶的跳法看成f(n),如果青蛙第一次跳一级台阶，此时跳法数目等于 f(n-1)
 * 如果青蛙第一次跳2级台阶，跳法数目等于f(n-2),n=f(n-1)+f(n-2)
 */
function jump(n){
    let res=[0,1,2]
    if (n<=2){
        return res[n]
    }
    let jumpCount=0;
    let prev=1; // f(n-1)
    let next=2; // f(n-2)
    for(i=3;i<=n;i++){
        jumpCount=prev+next; // f(n)
        prev=next;
        next=jumpCount
    }
    return jumpCount
}
console.log(jump(3))