function recur(fn,gn, value){
    let x = fn(value);
    return gn(x);    
}

let sum = (x)=>(x+x);
let product = (x)=>(x*x);

console.log(recur(sum,product,5))