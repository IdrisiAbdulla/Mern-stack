let n=23490765,rev=0,remainder;
while(n!=0){
    console.log(rev);
    remainder=n%10;
    rev=rev*10+remainder;
    // n=Math.floor(n/10);
    n=parseInt(n/10);
}
console.log("reverse of given number is\n"+rev );

