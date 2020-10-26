/**
 * 定义栈的数据结构， 请在该类型中实现一个能够得到栈的最小元素的min函数。 
 * 在该栈中， 调用min、 push及pop的时间复杂度都是O（ 1）
 */

let obj={
    get a(){
        return 1
    }
}
console.log(obj.a)
Object.defineProperty(obj,'b',{
    get(){
        return this.a*2
    },
    set(val){
        value=val
    },
    enumerable:true
})
obj.b=3
console.log(obj.b)