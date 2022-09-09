let a=10;
let stu={name:"Raju",age:5,roll:47368};
console.log(stu);
console.log(stu.name);
console.log(stu["roll"]);
console.log(stu.address);


//rollNo
//thisIsCalledCamelCase

//this will add a new key and value
stu.address="Bangalore";

stu.age=30;
console.log(stu);

const product={
    name:"Laptop",
    price:40000,
    colors:["black","white","red","blue"]
}
console.log(product);
console.log(product.colors[1]);
const orders=[
    {id:1456,product:"laptop",price:40000},
    {id:2563,product:"Mobile",price:30000},
    {id:3845,product:"Tablet",price:20000},

]
let s=0;
for (let n of orders){
    console.log(n.price);
    s+=n.price
}
console.log(s);

prices=orders.map(ord=>ord.price)
console.log(prices);
const sum=prices.reduce((p1,p2)=>{
    console.log(p1,p2);
    return p1+p2});
console.log(sum);

console.log(orders[1].product);

const {age,address,sname}=stu;

console.log(age,address,sname);

const brand="samsung";
const price=40000;
const model="note 9";
const rating=5.6;

const mobile={brand,price,model,rating};
console.log(mobile);

console.log(Object.keys(mobile));
console.log(Object.values(mobile));
console.log(Object.entries(mobile));