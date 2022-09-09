//to check whwther a given number is prime or not 
function isPrime(n)
{
	// Corner case
	if (n <= 1)
		return false;

	// Check from 2 to n-1
	for (let i = 2; i < n; i++)
		if (n % i == 0)
			return false;

	return true;
}
let c=isPrime(11);
console.log(c);

//square all the element of an array 

	function Squares(arr)
	{
		let n = arr.length;
		for (let i = 0; i < n; i++)
			arr[i] = arr[i] * arr[i];
            return arr;
	}


	let arr = [ 6, 3, 1, 2, 4, 5 ];
    let d=Squares(arr);
    console.log(d);

//     //find all perfect squares from 1 to 100

  function perfectSquares(l, r){

	for (let i = l; i <= r; i++)
	{

		if (Math.sqrt(i) == parseInt(Math.sqrt(i)))
			console.log(i);
	}
}

let l = 1;
let r = 10;
perfectSquares(l, r)


// // filters all even numbers from the array and store the array

let array=[1,7,2,8,6,9];
let even=array.filter(number=>{
    return number%2==0;
})
console.log(even);

// //wap to print fibonacci series

function printFibonacciNumbers(n)
{
	let f1 = 0, f2 = 1, i;

	if (n < 1)
		return;
	console.log(f1);
	for (i = 1; i < n; i++) {
		console.log(f2);
		let next = f1 + f2;
		f1 = f2;
		f2 = next;
	}
}
printFibonacciNumbers(7);




