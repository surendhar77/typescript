var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeting(user) {
    return "Welcome " + user;
}
var userName = "Surendhar";
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
var arr = ["apple", "orange", "pineapple"];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
} // it returns only value
for (var index in arr) {
    console.log(index);
} // it returns only index 
var fruits = [];
arr.forEach(function (items) {
    fruits.push(items);
}); // it returns values in array
console.log(fruits);
// normal function
function abc() {
    console.log("Hi surendhar");
}
abc();
//Anonymous Function
var add = function (a, b) {
    return a + b;
};
console.log(add(3, 4));
//optional parameter
// function show (id:number,name:string,email?:string)
function show(id, name, email) {
    if (email === void 0) { email = "abc@gmail.com"; }
    console.log("id", id, "name", name);
    console.log("id", id, "name", name, "email", email);
    // if(email != undefined)
    // {
    // console.log("email",email)
    // }
}
show(100, "sjs");
show(200, "sjs", "sjs@gmail.com");
//rest parameter
function restParameter(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var res = a;
    for (var i = 0; i < b.length; i++) {
        res += b[i];
    }
    return res;
}
console.log(restParameter(2, 3, 4, 5, 6)); // Output: 20
console.log(restParameter(1, 2, 3)); // Output: 6
// Implementation
function addFunctionOverLoading(a, b) {
    return a + b;
}
// Usage
console.log(addFunctionOverLoading(2, 3)); // Output: 5
console.log(addFunctionOverLoading("erode", "city")); // Output: "erodecity"
//class and objects
var student = /** @class */ (function () {
    function student(id, name) {
        this.id = id,
            this.name = name;
    }
    student.prototype.display = function () {
        console.log("id is" + this.id);
        console.log("name is" + this.name);
    };
    ;
    return student;
}());
var obj = new student(1, "sjs");
var obj1 = new student(2, "surendhar");
obj.display();
console.log(obj1.id);
//inheritance
var car = /** @class */ (function () {
    function car(color) {
        this.color = color;
    }
    return car;
}());
var benz = /** @class */ (function (_super) {
    __extends(benz, _super);
    function benz(color, price) {
        var _this = _super.call(this, color) || this; // super is keyword access parents field
        _this.price = price;
        return _this;
    }
    benz.prototype.display = function () {
        console.log("color is :" + this.color);
        console.log("price is :" + this.price);
    };
    return benz;
}(car));
var obj2 = new benz("black", 90000);
obj2.display();
//polymorphism
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    animal.prototype.makeSound = function () {
        console.log("general animal sound");
    };
    return animal;
}());
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cat.prototype.makeSound = function () {
        console.log("meow meow");
    };
    return cat;
}(animal));
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.makeSound = function () {
        console.log("wuff wuff");
    };
    return dog;
}(animal));
var obj3 = new cat("pinky");
obj3.makeSound();
var obj4 = new dog("whity");
obj4.makeSound();
// abstarction 
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.find = function () {
        console.log(this.name);
    };
    return person;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(name, code) {
        var _this = _super.call(this, name) || this;
        _this.code = code;
        return _this;
    }
    employee.prototype.abstractFunction = function (name) {
        console.log("person found");
    };
    return employee;
}(person));
var obj5 = new employee("sjs", 80);
obj5.find();
obj5.abstractFunction('surendhar');
//encapsulation
var bankEmployee = /** @class */ (function () {
    function bankEmployee() {
    }
    return bankEmployee;
}());
var employeePerson = /** @class */ (function (_super) {
    __extends(employeePerson, _super);
    function employeePerson(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    return employeePerson;
}(bankEmployee));
var obj6 = new employeePerson(99, "sjs");
