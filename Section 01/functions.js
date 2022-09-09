//functions are reusable blocks of code which can be called anywhere in program
function add(a,b){
   let c=a+b;
    console.log(c);
    // console.log(a,b);
}
add(2,3);
// console.log(c);

const prodnums=function(x,y){
    console.log(x*y);
    return x*y;

}
const res=prodnums(5,3);
console.log(res);

const sumprod =(a,b)=>{
    const sum=a+b;
    const prod=a*b;
    return [sum,prod];
}
const [s,p]=sumprod(2,5);
console.log(s,p);