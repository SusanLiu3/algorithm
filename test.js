let a = [1,2,3,4,5,6]
let b=a.splice(2,1)
console.log(a, b) // [ 1, 2, 4, 5, 6 ] [ 3 ]
let c=a.splice(2,0,7,8)
console.log(a, c) // [1, 2, 7, 8,4, 5, 6][]
