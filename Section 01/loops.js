// for (let i=0; i<20; i++){
    // console.log(i);
// }
for(let i=0; i<=100; i++){
    if(i%2==0)
    console.log(i);
}
nums=[5,45,67,23,89,43,67];
for(let n of nums ){
    console.log(n);
}
 let a=1;
 
while(a<10){
    console.log(a);
    a++;
}

// function factorial(n) {
// if (n == 0) return 1;
// return n * factorial(n - 1);
// }

// let num = 5;

// console.log("Factorial of " + num + " is " + factorial(num));

let z=6;
let f=1;
for(let i=2;i<=z;i++){
    f=f*i;
}
console.log(f);

const numbers=[45,23,67,89,90,43,73];
//traversing Arrays

for(let i=0; i<numbers.length;i++){
    console.log(numbers[i]);
}

for(let n of numbers){
    console.log(n);
}

console.log("---forEach----");
numbers.forEach((a)=>{console.log(a)});
numbers.forEach((a,i)=>{console.log(a,i)});

