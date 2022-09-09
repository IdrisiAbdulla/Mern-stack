const nums =[34,6,23,67,4,7,2]
//map is a function of array returns a new array
const newnums=nums.map((n)=>{return n*n});
console.log(newnums);


//wap to generate array like this 

const rate =nums.map((n)=>{return "₹"+n});
console.log(rate);


//create a new array where if number is even ,it is divided by 2
//if number is odd ,it is multiplied by 2

const fat=nums.map((n)=>
{
    if (n%2==0)
    return n/2;
    else{
        return n*2;
    }
})

console.log(fat);


// const rat =nums.map((n)=>{
//    return n%2==0?n/2:n*2;
// })
// console.log(rat);

const rat =nums.map(n=>( n%2==0?n/2:n*2));
 console.log(rat);

 console.log(nums);

 const filtnums=nums.filter((n)=>{return n%2==0});
 const filtnums2=nums.filter((n)=>{return n%2!=0});
 console.log(filtnums);
 console.log(filtnums2);

 //wap to filters numbers greater than 100
nums1=["₹786","₹345","₹10","₹56","₹90","₹101"]
 const filtnums3=nums1.filter((n)=>{return n>100});
 console.log(filtnums3);

const fillprice=nums1.filter((p)=>{return p.substring(1)>100});
console.log(fillprice);

let brands=["asus","lenovo","dell","hp","apple","microsoft","Realme","acer","Redmi"]
let search="asus"
const kat=brands.filter((n)=>{
    return search==n;
})
console.log(kat);
console.log("abdulla".toUpperCase());
console.log("abdulla".includes("du"));

//wap a program to give a suggestion to the user 

let search1="Re";
for(let i=0;i<brands.length;i++)
{
    
   if( brands[i].includes(search1))
   console.log(brands[i]);
    
}






