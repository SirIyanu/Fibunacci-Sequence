// function fibunacci(n){
// const result=[0,1];
    

// for(let i=2; i<= n; i++){
//     let a = result[i - 1];
//     let b = result[i - 2];
   
    
//     result.push(a + b);
// }
// return result[n];
// }
// console.log (fibunacci(7));

const num = 1000
let x = 0
let y = 1
let fn = x + y
console.log(x)
while (fn < num){
    console.log(fn)
    fn = x + y
    x = y
    y = fn
}