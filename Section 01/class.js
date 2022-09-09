class Laptop{
    constructor(ram,hdd,cpu){
        this.ram=ram;
        this.hdd=hdd;
        this.cpu=cpu;
    }

    turnOn=()=>{
        console.log("laptop turns on");
    }
    getCPU=()=>{
        console.log("cpu is "+this.cpu);
    }
}
let lappy=new Laptop(4,500,"i7");
lappy.turnOn();
lappy.getCPU();