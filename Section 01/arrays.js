//1.Arrays can contain multiple data types.
//2.Arrays are dynamic  - can change size.
//3.Arrays support indexing and slicing.

const nums=[1,2,4,8,3,5,true,"nice"];
console.log(nums);
const fruits=["apple","banana","orange","grapes","mango"];
console.log(fruits);

//indexing
console.log(fruits[3]);

//slicing

console.log(fruits.slice(1,3));

//adding elements to array

fruits.push('cherry');
console.log(fruits);

//removing elements from array
//1.pop() - removes last element
console.log(fruits.pop());
console.log(fruits);

//2.Splice() - removes elements from array
fruits.splice(1,2);
console.log(fruits);
