function greeting(user) {
    return "Welcome " + user;
 }
 
 let userName = "Surendhar";
 console.log(greeting(userName));



//  //type validation 
//  // this varaibale name is called annotation  
//  var name :string = "sjs";

//  function add(a : number, b :number)
//  {
//     return a+b;
//  };
 
//  var name = <number> phonenumber ;
//  var name = phonenumber as number

// for of 

let arr =["apple","orange","pineapple"];

for(var val of arr)
{
    console.log(val);
} // it returns only value

for(var index in arr)
{
    console.log(index);
} // it returns only index 

let fruits =[];
arr.forEach(function(items)
{
    fruits.push(items);
}); // it returns values in array
console.log(fruits);

// normal function

function abc()
{
    console.log("Hi surendhar");
}
abc ();

//Anonymous Function
let add =  function(a: number , b: number) :number{
 return a+b;
}

console.log(add(3,4));

//optional parameter

// function show (id:number,name:string,email?:string)
function show (id:number,name:string,email:string = "abc@gmail.com")

{
    console.log("id",id,"name",name);
    console.log("id",id,"name",name,"email",email)
    // if(email != undefined)
    // {
    // console.log("email",email)
    // }
}

show(100,"sjs");
show(200,"sjs","sjs@gmail.com");

//rest parameter
function restParameter(a: number, ...b: number[]): number {
    let res = a;
    for (let i = 0; i < b.length; i++) {
        res += b[i];
    }
    return res;
}

console.log(restParameter(2, 3, 4, 5, 6)); // Output: 20
console.log(restParameter(1, 2, 3));       // Output: 6


// function overloading 
// Function overloads
function addFunctionOverLoading(a: string, b: string): string;
function addFunctionOverLoading(a: number, b: number): number;

// Implementation
function addFunctionOverLoading(a: any, b: any): any {
    return a + b;
}

// Usage
console.log(addFunctionOverLoading(2, 3));               // Output: 5
console.log(addFunctionOverLoading("erode", "city"));   // Output: "erodecity"



//class and objects

class student
{
    id:number;
    name:string;
    constructor(id:number,name:string)
    {
        this.id = id,
        this.name = name
    }

     display():void{
        console.log("id is" + this.id);
        console.log("name is" + this.name);
    };
}

let obj =new student(1,"sjs");
let obj1 = new student(2,"surendhar");

obj.display();
console.log(obj1.id);

//inheritance
class car {
    color:string
    constructor(color:string)
    {
        this.color = color
    }
}
class benz extends car 
{
    price:number 
    constructor(color:string,price:number)
    {
    super(color)  // super is keyword access parents field
    this.price =price
    }

    display():void{
        console.log("color is :" +this.color);
        console.log("price is :" +this.price);
    }
}

let obj2= new benz("black",90000);
obj2.display();

//polymorphism

class animal
{
    public name:string;
    constructor(name:string)
    {
        this.name = name;
    }
    public makeSound():void{
    console.log("general animal sound");
    }
}

class cat extends animal{
    public makeSound():void{
        console.log("meow meow");
        }
}

class dog extends animal{
    public makeSound():void{
        console.log("wuff wuff");
        }
}

let obj3 = new cat("pinky");
obj3.makeSound();
let obj4 = new dog("whity");
obj4.makeSound();

// abstarction 

abstract class person
{
    name:string;
    constructor(name:string)
    {
        this.name = name;
    }
    find():void
    {
        console.log(this.name);
    }
    abstract  abstractFunction(string);
}
class employee extends person
{
    code:number;
    constructor(name:string,code:number)
    {
        super(name);
        this.code = code;
    }
    abstractFunction(name:string){
        console.log("person found")
    }
}

let obj5 = new employee("sjs",80);
obj5. find();
obj5. abstractFunction('surendhar');

//encapsulation

class bankEmployee
{
    public id:number;
    protected name:string;
    private email:string;
}

class employeePerson extends bankEmployee
{
    constructor(id:number,name:string)
    {
        super();
        this.id = id;
        this.name = name;
    }
}

let obj6 = new employeePerson(99,"sjs");





