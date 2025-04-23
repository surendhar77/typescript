"use strict";
//basic types
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloComponent = exports.PI = void 0;
exports.addss = addss;
exports.addsss = addsss;
exports.addssssss = addssssss;
var username = "Alice";
var age = 30;
var isStudent = true;
// Explanation:
// You explicitly declare variable types. This helps avoid bugs like assigning string to number.
var data = 10;
data = "Hello"; // valid
var value = "Hi";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
function log() {
    console.log("Nothing returned");
}
function throwError() {
    throw new Error("This will never return");
}
// Explanation:
// any: disables type checking.
// unknown: safe version of any, must be type-checked.
// void: for functions with no return.
// never: for functions that throw or never return.
var fruits = ["apple", "banana"];
var prices = [1.99, 2.99];
var user = ["Alice", 25];
// Explanation:
// string[] and Array<number> are arrays.
// Tuples are fixed-length arrays with specific types in order.
//  Why Use Generics?
// Without generics, you'd write functions for every type:
function echoString(arg) {
    return arg;
}
function echoNumber(arg) {
    return arg;
}
//with Generics, you can write just one function:
function echo(arg) {
    return arg;
}
echo("Hello"); // Returns: "Hello"
echo(123); // Returns: 123
echo(true); // Returns: true
function identity(value) {
    return value;
}
//   T is a type variable (like x in math).
// It will be replaced by the actual type when the function is called.
identity("TypeScript"); // inferred as string
identity(99); // inferred as number
//Generic with Arrays
function firstElement(arr) {
    return arr[0];
}
var num = firstElement([1, 2, 3]); // type is number
var word = firstElement(["a", "b"]); // type is string
var box1 = { content: "Hello" };
var box2 = { content: 123 };
//   xplanation:
// Box<T> is reusable for any type: Box<string>, Box<number>, etc.
// 🧰 Generic Constraints
// Sometimes you want generics to only allow specific kinds of types.
function logLength(value) {
    console.log(value.length);
}
logLength("Hello"); // ✅ works (strings have length)
logLength([1, 2, 3]); // ✅ arrays have length
// logLength(123);        ❌ Error: number doesn't have 'length'
// 🔎 Explanation:
// T extends { length: number } means: T must have a length property.
// 🔗 Generic with Multiple Types
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var result = merge({ name: "Alice" }, { age: 30 });
// result has both name and age
// 🔤 1. Type Annotations
// ✅ What is a Type Annotation?
// A type annotation is when you explicitly tell TypeScript what type a variable, function parameter, or return value should be.
// 📘 Syntax:
// let variableName: type;
// ✅ Example 1: Variable
var namesss = "Alice";
var ages = 30;
var isStudents = true;
// 🧠 Explanation:
// We tell TypeScript that:
// name is a string
// age is a number
// isStudent is a boolean
// Now, if you try:
var namessss = 123; // ❌ Error: number is not assignable to type string
// TypeScript helps prevent type mistakes.
// ✅ Example 2: Function Parameters and Return Types
function greet(person) {
    return "Hello, ".concat(person);
}
// 🧠 Explanation:
// person: string → parameter must be a string
// : string after the parentheses → function returns a string
// ✅ Example 3: Arrays and Objects
var scores = [90, 85, 88];
var userss = {
    name: "Bob",
    age: 25
};
// 🎯 2. Type Assertions
// ✅ What is a Type Assertion?
// A type assertion tells TypeScript:
// “Trust me, I know better — treat this value as a specific type.”
// This is useful when TypeScript isn’t sure of the type, but you are.
// 📘 Syntax:
// let value = someValue as SomeType;
// let value = <SomeType>someValue; // (not recommended in React/JSX)
// ✅ Example 1: From any to specific
var something = "I am a string";
var strLength = something.length;
// 🧠 Explanation:
// something is of type any (TypeScript has no idea what it is).
// (something as string) tells TS: “treat it as a string”.
// Now you can safely access .length.
// ✅ Example 2: DOM Elements
// const input = document.getElementById("myInput") as HTMLInputElement;
// input.value = "Typed!";
// 🧠 Explanation:
// getElementById returns HTMLElement | null, so .value is not directly accessible.
// We assert it’s an HTMLInputElement, so .value works.
// ⚠️ Important Notes:
// Assertions do not convert types at runtime, they only affect how TypeScript checks your code at compile-time.
// You’re responsible for making sure your assertion is correct — wrong assertions can cause bugs.
// 🎯 What is a Tuple?
// A Tuple in TypeScript is a special type of array where:
// You know exactly how many elements it will have.
// You know the type of each element at a specific position.
// 📘 Syntax:
// let myTuple: [type1, type2, ..., typeN];
// ✅ Example:
var userS = ["Alicess", 25];
// 🧠 Explanation:
// The tuple has two values.
// The first must be a string, the second must be a number.
// ❌ Incorrect Usage:
// let wrongUser: [string, number] = [25, "Alices"]; // ❌ Error
// let tooManys: [string, number] = ["Bob", 30, true]; // ❌ Error
// TypeScript checks both the type and the length.
// 🔄 Accessing Tuple Elements
console.log(user[0]); // "Alice"
console.log(user[1]); // 25
// You can also destructure them:
var nameS = userS[0], ageS = userS[1];
console.log(nameS); // "Alice"
// 🚀 When to Use Tuples?
// Tuples are great for:
// Returning multiple values from a function.
// Representing structured data with fixed order and types.
// Example: Returning multiple values
function getUser() {
    return ["Charlie", 28];
}
var _a = getUser(), usernameS = _a[0], userAge = _a[1];
// ✅ Summary
// Feature	Description
// Tuple	Fixed-length array with known types
// Syntax	[string, number]
// Access	By index or destructuring
// Use case	Structured data like user info, results
// 🧩 What is an Enum?
// Enum (short for enumeration) is a way to give friendly names to sets of numeric or string values.
// Use enums when you have a group of related constant values.
// 🔢 Numeric Enums (Default)
var Direction;
(function (Direction) {
    Direction[Direction["Ups"] = 0] = "Ups";
    Direction[Direction["Downs"] = 1] = "Downs";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// 🧠 Explanation:
// Direction.Up has value 0
// Direction.Down has value 1, and so on...
// You can access them like:
var move = Direction.Left;
console.log(move); // 2
// ✍️ Custom Numeric Values
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Error"] = 100] = "Error";
    Status[Status["Loading"] = 200] = "Loading";
})(Status || (Status = {}));
// 🔤 String Enums
var Color;
(function (Color) {
    Color["Reds"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
// 🧠 Explanation:
// Each member has a string value.
// Useful when you want readable values in logs or UI.
var paint = Color.Green;
console.log(paint); // "GREEN"
// ✅ Why Use Enums?
// Improve readability: Direction.Left is clearer than 2
// Prevent magic numbers or strings in your code
// Enforce valid values
// ✅ Summary
// Type	Example	Value Example
// Numeric Enum	enum Direction { Up, Down }	Direction.Up = 0
// String Enum	enum Color { Red = "RED" }	Color.Red = "RED"
// 🔁 What are Rest Parameters?
// Rest parameters allow a function to accept any number of arguments as an array.
// They are useful when:
// You don’t know how many arguments will be passed.
// You want to group extra arguments into a single parameter.
// 📘 Syntax:
// function funcName(...paramName: type[]) {
//   // paramName is an array of type
// }
// ✅ Example:
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
sumAll(1, 2, 3); // 6
sumAll(5, 10, 15, 20); // 50
// 🧠 Explanation:
// ...numbers gathers all arguments into an array.
// TypeScript ensures all are of type number.
// ✅ With Other Parameters:
function greetAll(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        console.log("".concat(greeting, ", ").concat(name_1, "!"));
    }
}
greetAll("Hello", "Alice", "Bob", "Charlie");
// Output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!
// 🚫 Note:
// Only one rest parameter is allowed, and it must be the last parameter.
// ❌ Invalid
// function wrong(...nums: number[], extra: string) {}
// ✅ Summary
// Concept	Description
// ...args: type[]	Accepts any number of arguments as an array
// Position	Must be the last parameter
// Use case	Flexible function inputs (like sum, logs, etc.)
// ✅ TypeScript: Return Types – Brief Explanation
// In TypeScript, return types specify what type of value a function is expected to return. This helps catch errors early and makes your code more predictable and readable.
// 🔹 Syntax
// function functionName(params): ReturnType {
//   // logic
//   return value;
// }
// 🔹 Example 1: Returning a number
function add(a, b) {
    return a + b;
}
// ✅ : number after the parameters tells TypeScript the function will return a number.
// 🚫 If you try to return a string, it will throw an error.
// 🔹 Example 2: Returning a string
function greets(name) {
    return "Hello, " + name;
}
// 🔹 Example 3: Returning void (no return value)
function logMessage(message) {
    console.log(message);
}
// void means this function does not return anything.
// 🔹 Example 4: Returning an object
function getUsers() {
    return {
        name: "Alice",
        age: 25,
    };
}
// The return type is an object with name (string) and age (number).
// 🔹 Example 5: Optional Return Type (inferred)
function multiplys(a, b) {
    return a * b;
}
// ✅ TypeScript infers the return type as number, so writing : number is optional here.
// But for clarity and safety, it’s good to specify return types explicitly in larger projects.
// ✅ Summary
// Return Type	Meaning	Example
// number	Returns a number	function add(): number
// string	Returns a string	function greets(): string
// void	No return value	function log(): void
// object	Returns structured data	function getUsers(): {…}
// Inferred	TypeScript auto-detects return type	function multiplys(a, b) { return a*b }
// ✅ 1. Anonymous Functions
// 🔹 What is it?
// An anonymous function is a function without a name. It’s often used when passing a function as a value or callback.
// 🔹 Syntax
var myFuncs = function (a, b) {
    return a + b;
};
// No function name after the function keyword.
// It's assigned to a variable myFunc.
// 🔹 Use Case
// Used in callbacks, such as event handlers or array methods.
setTimeout(function () {
    console.log("Hello after 1 second!");
}, 1000);
// ✅ 2. Arrow Functions (ES6 Style)
// 🔹 What is it?
// An arrow function is a shorter way to write functions using the => syntax.
// 🔹 Syntax
var myFunc = function (a, b) {
    return a + b;
};
// ✅ Same behavior as anonymous function, but cleaner and more concise.
// 🔹 Examples
// 👉 Short version (if one-line return):
var square = function (n) { return n * n; };
// 👉 No parameters:
var greetss = function () {
    console.log("Hi there!");
};
// 👉 One parameter (no parentheses needed):
var double = function (n) { return n * 2; };
function greetssss(value) {
    if (typeof value === "string") {
        return "Hello, " + value;
    }
    else if (typeof value === "number") {
        return "You are " + value + " years old";
    }
}
// 2. Single Implementation
// You must write one function to handle all cases:
function show(value) {
    console.log("Value: ", value);
}
function combine(a, b) {
    return a + b;
}
console.log(combine(10, 20)); // Output: 30
console.log(combine("Hello, ", "World!")); // Output: Hello, World!
// ✅ Works with both numbers and strings.
// 🔹 Why Use Function Overloading?
// Benefit	Example
// Cleaner APIs	Same function name for similar logic
// Type Safety	Helps detect wrong data types
// Improves Readability	Easier to understand different use cases
// Better Intellisense in editors	Shows correct overloads
// ✅ Summary
// Function overloading = multiple function signatures + one implementation.
// Helps handle multiple input types or argument patterns.
// Improves flexibility, readability, and safety
// 🧱 4. Object Types – Brief Explanation & Code
// ✅ 1. Object Type Declarations
// Defines the shape of an object: what properties it has and their types.
var userssss = {
    name: "Alice",
    age: 30,
};
var personss = {
    name: "Bob",
    age: 25,
};
var myCar = {
    brand: "Toyota",
    year: 2020,
};
var item = {
    name: "Book",
};
var config = {
    apiKey: "123-abc",
};
var colors = {
    red: "#ff0000",
    green: "#00ff00",
};
// ✅ 7. Interface vs Type – Key Differences
// Feature	interface	type
// Object Structure	✅ Yes	✅ Yes
// Extendable	✅ extends another interface	✅ via & intersection
// Union Types	❌ Not supported	✅ Supported
// Declaration merging	✅ Allowed	❌ Not allowed
// Best use case	Objects / class contracts	Unions, primitives, functions, etc.
// 🔹 TL;DR
// Use interface when working with object shape and you may extend it later.
// Use type when needing unions, intersections, or primitives.
// Use ? for optional properties and readonly to prevent reassignment.
// Use [key: string] for dynamic object keys.
// 🧩 Getters and Setters in TypeScript
// ✅ What are they?
// Getters (get): Allow you to access the value of a private property like a normal property.
// Setters (set): Allow you to control how values are set to private properties.
// // They are commonly used in classes to encapsulate data and add validation or transformation logic.
// 🔧 Syntax & Code Example
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        // Getter
        get: function () {
            return this._name;
        },
        // Setter
        set: function (newName) {
            if (newName.length < 3) {
                throw new Error("Name is too short!");
            }
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p = new Person("Alice");
console.log(p.name); // ✅ Uses getter → "Alice"
p.name = "Bob"; // ✅ Uses setter
console.log(p.name); // "Bob"
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " says: Woof!"));
    };
    return Dog;
}());
var Bulldog = /** @class */ (function () {
    function Bulldog() {
    }
    Bulldog.prototype.run = function () {
        console.log("Running fast!");
    };
    Bulldog.prototype.bark = function () {
        console.log("Barking loud!");
    };
    return Bulldog;
}());
// 🧠 Summary
// Feature	Description
// interface	Blueprint for properties and methods
// implements	Class must provide what's defined in the interface
// Type Checking	Ensures classes stick to required structure
// 🧩 What are Static Members?
// In TypeScript (and JavaScript), static members are properties or methods that belong to the class itself, not to an instance of the class.
// You can access them without creating an object of the class.
// 📌 Syntax:
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.square = function (x) {
        return x * x;
    };
    MathHelper.pi = 3.14;
    return MathHelper;
}());
// 🧠 Explanation:
// pi and square() are static, so you don’t need to create an object to use them.
// You can call them directly using the class name.
// ✅ Usage:
console.log(MathHelper.pi); // 👉 3.14
console.log(MathHelper.square(4)); // 👉 16
// ❗️Important Notes:
// Feature	Behavior
// static keyword	Declares class-level members
// Access method	Use ClassName.member
// Not in this	You cannot access static members with this in instance methods
// Shared	Static members are shared across all instances
// ❌ Incorrect Usage:
// const m = new MathHelper();
// console.log(m.pi); // ❌ Error: Property 'pi' does not exist on type 'MathHelper'
// You must access it as:
MathHelper.pi; // ✅
// 🎯 Summary
// Feature	Description
// T extends U	Checks if T is assignable to U
// ? X : Y	If true → X, else → Y
// Can use with infer	To extract parts of complex types (like arrays)
// Flexible	Enables smart, reusable type logic
// Would you like to build a conditional utility type from scratch? I can guide you through a real example!
// You said:
// Import & Export
// Default vs Named Exports
// Namespace (old pattern, rarely used now)
// export type, import type
// Module resolution strategies  explain brefily 
// ChatGPT said:
// Sure! Here's a brief and clear explanation of key TypeScript module features like import, export, default vs named exports, namespaces, export type, and module resolution strategies — with simple examples. 🚀
// 📦 Import & Export in TypeScript
// 🧩 Named Export
// Exports multiple named values.
// file: math.ts
// export const add = (a: number, b: number) => a + b;
// export const multiply = (a: number, b: number) => a * b;
// file: main.ts
// import { add, multiply } from './math';
// ✅ You must use the same names when importing.
// 🧷 Default Export
// Exports a single main value from a module.
// file: greet.ts
// export default function greet(name: string) {
//   return `Hello, ${name}`;
// }// file: main.ts
// import greet from './greet'; // you can name it anything
// ✅ You can rename the import freely.
// ⚔️ Default vs Named Exports
// Feature	Named Export	Default Export
// Exports per file	Many	Only one allowed
// Import name control	Must match	Can use any name
// Use case	Utility functions	Main component/function
// 🧱 Namespace (Old Pattern)
// ⚠️ Rarely used now in modules; replaced by ES modules.
// file: Shapes.ts
var Shapes;
(function (Shapes) {
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        return Circle;
    }());
    Shapes.Circle = Circle;
})(Shapes || (Shapes = {}));
// usage
var c = new Shapes.Circle(10);
// main.ts
// import type { User } from './types';
// const user: User = { name: "Asha", age: 25 };
// ✅ Used for tree-shaking and performance in large apps.
// 🧭 Module Resolution Strategies
// How TypeScript finds files when you use import.
// 🔍 Classic vs Node
// Classic: Old strategy, rarely used.
// Node (default): Like how Node.js resolves modules.
// Example Resolution in Node Strategy:
// import { something } from './utils';
// TypeScript looks for:
// ./utils.ts
// ./utils.tsx
// ./utils.d.ts
// ./utils/index.ts
// Configured in tsconfig.json:
// {
//   "compilerOptions": {
//     "moduleResolution": "node"
//   }
// }
// 🔚 Summary Table
// Concept	Purpose
// export / import	Share values between files
// default export	One main export per file
// named export	Multiple exports per file
// namespace	Legacy module-like grouping (avoid)
// export type	Export only types (not code)
// module resolution	Controls how files are located on import
// Let me know if you want a hands-on example project using all of these!
// You said:
// Import & Export
// ChatGPT said:
// Here’s a brief explanation of Import & Export in TypeScript with examples so you can understand how they work 👇
// // 
// 🔄 What is Export?
// When you want to make something (a function, variable, class, etc.) accessible from another file, you export it.
// ✅ Example: Named Export
// file: math.ts
function addss(x, y) {
    return x + y;
}
// export const PI = 3.14;
// You can export multiple items from one file using export.
// 🔁 What is Import?
// You use import to bring in exported items from another file.
// ✅ Example: Named Import
// file: app.ts
// import { add, PI } from './math';
console.log(addss(2, 3)); // 5
// console.log(PI);            // 3.14
// 💡 You must use the exact names of the exported items (unless you use as to rename them).
// ✨ Default Export
// If you want to export only one main thing from a file, use default.
// file: greet.ts
// export default function greetssssss(name: string) {
//   return `Hello, ${name}`;
// }
// ✅ Default Import
// file: app.ts
// import gree.t from './greet';
console.log(greet('Alice')); // Hello, Alice
// 💡 You can name it anything when importing a default export.
// 🔄 Combine Default + Named Exports
// file: tool.ts
// export default function sayHi() {
//   console.log('Hi!');
// }
// export const version = '1.0.0';
// file: app.ts
// import sayHi, { version } from './tool';
// Summary Table
// Export Type	Syntax	Import Syntax
// Named Export	export const X = ...	import { X } from './file'
// Default Export	export default function	import anyName from './file'
// Renaming	export { A as B }	import { B as C } from './file'
// Let me know if you want to try an example project or want to go over CommonJS vs ES Modules too!
// You said:
// Default vs Named Exports
// ChatGPT said:
// Great! Let’s break down the difference between Default Exports and Named Exports in TypeScript (and JavaScript too). Here’s a simple and clear explanation with examples 👇
// 🔹 1. Default Exports
// ✅ Concept:
// You can have only one default export per file.
// You don’t need curly braces when importing.
// You can name it anything when importing.
// 📦 Exporting:
// file: greet.ts
// export default function greet(name: string) {
//   return `Hello, ${name}`;
// }
// 📥 Importing:
// file: app.ts
// import greetUser from './greet';
// console.log(greetUser('Alice')); // Hello, Alice
// Even though the original function is called greet, you can import it as greetUser — because it's a default export.
// 🔹 2. Named Exports
// ✅ Concept:
// You can have multiple named exports from a file.
// You must use curly braces when importing.
// You must use the exact exported names (or rename them using as).
// 📦 Exporting:
// file: math.ts
function addsss(x, y) {
    return x + y;
}
exports.PI = 3.14;
// 📥 Importing:
// // file: app.ts
// import { add, PI } from './math';
console.log(add(2, 3)); // 5
console.log(exports.PI); // 3.14
// 🔄 Renaming Named Exports
// import { add as sum } from './math';
// console.log(sum(1, 2));  // 3
// ✅ Summary Table
// Feature	Default Export	Named Export
// Export syntax	export default value	export const name = value
// Import syntax	import anyName from ...	import { name } from ...
// Multiple per file?	❌ Only one	✅ Many
// Must match original name?	❌ No	✅ Yes (unless renamed with as)
// Let me know if you'd like to create a sample app using both types to see them in action!
// You said:
// Namespace (old pattern, rarely used now)
// ChatGPT said:
// Sure! Let's look at Namespaces in TypeScript — an older pattern that was used to group related code together before ES Modules became the standard.
// 🧭 What is a Namespace?
// A namespace is a way to group related functions, interfaces, classes, or variables under a single name to avoid naming collisions.
// 🔁 Think of it like:
// A container that wraps related code.
// Similar to JavaScript's object pattern for grouping.
// 📦 Basic Syntax
var MyMath;
(function (MyMath) {
    function add(x, y) {
        return x + y;
    }
    MyMath.add = add;
    function subtract(x, y) {
        return x - y;
    }
    MyMath.subtract = subtract;
})(MyMath || (MyMath = {}));
// Use export inside the namespace to make functions accessible outside.
// 📥 Using the Namespace
console.log(MyMath.add(10, 5)); // 15
console.log(MyMath.subtract(10, 5)); // 5
// You access functions using NamespaceName.functionName.
// 🔃 Namespaces vs Modules
// Feature	Namespace	Module (ESM)
// File scope	All code in same file	Code split across multiple files
// Syntax	namespace Name {}	export, import
// Browser support	Requires bundler or global <script>	Works with modern bundlers
// Recommendation	❌ Old pattern	✅ Preferred for modern apps
// ⚠️ Why It's Rare Now
// Namespaces were useful before ES6 modules existed. Today, we use modules:
// math.ts
function addssssss(a, b) {
    return a + b;
}
// This tells TypeScript: “Hey, Shape is just a type, not a variable or function that exists at runtime.”
// 📥 import type — Importing Only a Type
// ✅ Example:
// file: main.ts
// import type { Shape } from './shapes';
var drawShape = function (shape) {
    console.log("Drawing a ".concat(shape.name, " with ").concat(shape.sides, " sides."));
};
var updateUserss = function (user) {
    // Must provide both `name` and `age`
};
// ✅ With Partial<T>
function updateUsersss(id, newValues) {
    // Now we can update only part of the user info
    console.log(id, newValues);
}
// updateUserss(1, { name: "Alice" }); // ✅ OK
updateUsersss(2, { age: 30 }); // ✅ OK
var useree = {
    name: "John",
    age: 25,
}; // ✅ Must include both name and age
var userw = {
    name: "John",
    age: 25
}; // ✅ email is omitted
var userws = {
    name: "Alice"
}; // ✅ Only name remains
// T extends null | undefined ? never : T: If T is null or undefined, it's replaced with never (which removes it). Otherwise, T remains unchanged.
// ✅ When to Use NonNullable<T>
// When you want to ensure a type cannot be null or undefined.
// Useful when you are processing types that may have nullable or undefined values and you want to guarantee they are not present.
// 🧠 Summary
// Feature	What it does
// NonNullable<T>	Removes null and undefined from type T
// Use case	Ensuring a type is not nullable or undefined
// Opposite of	N/A (Used to remove nullable values, no direct opposite)
// Let me know if you'd like more examples or have further questions!
// You said:
// ReturnType<T>
// ChatGPT said:
// 🔁 ReturnType<T> in TypeScript — Detailed Explanation with Code
// ReturnType<T> is a utility type that extracts the return type of a function type T.
// 🔧 Syntax
// ReturnType<T>
// T must be a function type.
// The utility returns the type of the value that the function returns.
// 📘 Basic Example
function greety() {
    return "Hello, World!";
}
// GreetReturn is string
// ✅ ReturnType<typeof greet> extracts string, the return type of the greet function.
// 🧪 Another Example
var getUsery = function () {
    return { name: "Alice", age: 30 };
};
// Explanation:
// It checks if T is a function type.
// If yes, it uses infer R to infer the return type and uses that as the result.
// ✅ Use Cases
// Avoid duplicating types.
// Derive return types from third-party libraries or internal utility functions.
// Ensure consistency between functions and types.
// ⚠️ Note
// If T is not a function type, TypeScript will raise an error:
// type Invalid = ReturnType<string>; // ❌ Error: string is not a function type
// 📌 Summary
// Utility	What it does
// ReturnType<T>	Extracts the return type of function T
// Use it when	You want to derive types from function returns
// Let me know if you’d like examples with async functions, overloads, or in combination with other utility types!
// You said:
// Parameters<T>
// ChatGPT said:
// 🔣 Parameters<T> in TypeScript — Full Explanation with Examples
// Parameters<T> is a utility type that extracts the tuple of parameter types from a function type T.
// 🔧 Syntax
// Parameters<T>/
// T must be a function type.
// It returns a tuple of the argument types of T.
// 📘 Basic Example
function logMessagey(message, level) {
    console.log("[".concat(level, "] ").concat(message));
}
// LogParams is [message: string, level: number]
// Now you can reuse LogParams elsewhere to maintain consistency:
var args = ["System started", 1];
logMessagey.apply(void 0, args); // Valid ✅
// 🧪 Example with Arrow Function
var sum = function (a, b) { return a + b; };
// infer P captures the parameters of the function as a tuple.
// If T is not a function type, it returns never.
// ✅ Use Cases
// Reuse function parameters in multiple places
// Create wrappers or decorators
// Type-safe apply() or call() methods
function wrapLog() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log("Before log...");
    logMessage.apply(void 0, args);
    console.log("After log...");
}
// class MyComponent extends React.Component<Props, State> {
//   state: State = { count: 0 };
//   render() {
//     // return <h1>Hello {this.props.name}, Count: {this.state.count}</h1>;
//   }
// }
// // 2. JSX with TypeScript
// // JSX works the same as in JS, just with types:
// // 
// const Greeting: React.FC<{ name: string }> = ({ name }) => {
// //   return <h1>Hello, {name}</h1>;
// };
// 3. Typing Hooks (useState, useEffect)
// const [count, setCount] = useState<number>(0);
// useEffect(() => {
//   console.log(count);
// }, [count]);
// 🌐 Node.js + TypeScript
// 4. Using TypeScript with Express.js
// import express, { Request, Response } from 'express';
// const app = express();
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello TypeScript with Express!');
// });
// Install types:
// npm install express @types/express
// 🧩 Vue + TypeScript
// 5. With vue-class-component
// import { Vue, Component } from 'vue-property-decorator';
// @Component
// export default class HelloWorld extends Vue {
//   message: string = 'Hello from TypeScript';
//   greet() {
// alert(th/is.message);
//   }
// }/
// 6. With defineComponent (Composition API)
// import { defineComponent, ref } from 'vue';
// export default defineComponent({
//   setup() {
//     const count = ref<number>(0);
//     return { count };
//   },
// });
// Would you like a project setup guide or real-world examples for React, Vue, or Express with TypeScript?
// You said:
// 🧼 13. Error Handling & Debugging
// Compile-time vs Run-time errors
// Type narrowing
// Debugging TS in VS Code
// Working with third-party libraries and @types
// ChatGPT said:
// Sure! Let’s break down Error Handling & Debugging in TypeScript with code examples and explanations:
// ⚠️ 1. Compile-time vs Run-time Errors
// ✅ Compile-time Errors
// These are caught by TypeScript during development before the code runs.
// let num: number = "hello"; // ❌ Error: Type 'string' is not assignable to type 'number'
// TypeScript checks type mismatches, missing properties, etc.
// ⚠️ Run-time Errors
// These happen when the code runs, regardless of TypeScript types.
// const user = null;
// console.log(user.name); // ❌ Runtime Error: Cannot read property 'name' of null
// 🔍 TypeScript can't prevent all errors, especially those related to data at runtime.
// 🔎 2. Type Narrowing
// This is TypeScript’s way of refining types using control flow:
function printLength(input) {
    if (typeof input === "string") {
        console.log(input.length); // TS knows input is a string here
    }
    else {
        console.log(input.toFixed(2)); // TS knows input is a number here
    }
}
// Also works with:
// in operator
// instanceof
// Array.isArray
// 🛠️ 3. Debugging TS in VS Code
// VS Code has first-class TypeScript support:
// ✅ Add a tsconfig.json:
// npx tsc --init
// ✅ Use Breakpoints, Watch, and Debug Console in VS Code.
// ✅ Use sourceMap in tsconfig.json for real line tracing:
// {
//   "compilerOptions": {
//     "sourceMap": true
//   }
// }
// ✅ Compile:
// ✅ Run the output JS file in debugger (e.g., dist/index.js).
// 📦 4. Working with Third-party Libraries and @types
// When using npm libraries that don't include TypeScript types:
// Use DefinitelyTyped community types:
// npm install --save-dev @types/lodash
// Then use it safely:
// import _ from "lodash";
var nums = [1, 2, 3];
// console.log(_.shuffle(nums)); // TS knows .shuffle because of @types/lodash
// Would you like help setting up a TypeScript project with debugging and type support, or would you like to see how to handle custom errors in TypeScript too?
// 
// You said:
// 14. Declaration Files (.d.ts)
// When and why to use declaration files
// Writing your own .d.ts file
// Using DefinitelyTyped (@types/ packages)
// ChatGPT said:
// Great! Let’s dive into Declaration Files (.d.ts) in TypeScript, which are essential for defining types, especially when working with JavaScript libraries.
// 🧾 14. Declaration Files (.d.ts)
// ✅ What Are Declaration Files?
// Declaration files (.d.ts) are TypeScript files that only contain type declarations — no actual code.
// They tell TypeScript:
// The types of variables, functions, classes, etc.
// How to understand a JS library’s structure.
// 📌 When & Why Use Declaration Files
// Use Case	Reason
// Using a JavaScript library in TS	It doesn’t come with built-in types
// Exposing your own library to others	To allow others to use your types
// Creating type-safe APIs	Especially when wrapping 3rd-party code
// 🧠 Example: Using JS in TS without Types
// JavaScript file (math.js)
function addw(a, b) {
    return a + b;
}
// Now TypeScript understands the types:
// import { add } from './math';
var results = addw(5, 3); // ✅ No error, autocompletion works
// You don’t compile .d.ts files — they are just for type information.
// 📦 Using @types Packages (DefinitelyTyped)
// DefinitelyTyped is the community-driven repo for TypeScript types.
// Install types for libraries that don’t ship with them:
// npm install --save-dev @types/jquery
// npm install --save-dev @types/lodash
// Then use with full type support:
// import $ from 'jquery';
// $('#btn').on('click', () => {
//   console.log('clicked');
// });
// TypeScript knows all of jQuery’s types thanks to @types/jquery.
// 🛠️ Writing Your Own .d.ts for a Module
// Create my-lib.d.ts:
// // declare module "my-lib" {
//   export function greet(name: string): string;
// }
// Now you can safely import and use my-lib even if it’s just JS.
// 🏁 Summary
// Feature	Purpose
// .d.ts files	Define types without implementation
// @types/ packages	Community-contributed type declarations
// Custom declarations	Add types for your own JS or 3rd-party libraries
// Want to try writing your own .d.ts or fix a specific error with one? I can walk you through it.
// You said:
// d.ts  means
// ChatGPT said:
// Great question! Let's break it down simply:
// 🧾 What Does .d.ts Mean in TypeScript?
// ✅ .d.ts stands for "Declaration File" in TypeScript.
// It is a file that:
// Has the extension .d.ts
// Contains only type declarations
// Does not contain any implementation or executable code
// 🔍 Purpose of .d.ts Files
// They are used to:
// Describe the types used in a JavaScript file or library
// Allow TypeScript to understand code written in JavaScript
// Enable type checking, autocompletion, and IntelliSense for JS code
// 🧠 Simple Example
// Imagine you have a JavaScript function:
// utils.js
function greetssssss(name) {
    return "Hello, ".concat(name);
}
// Now you want to use this in a TypeScript file:
// import { greet } from './utils';
// greet("Alice"); // ❌ TS error: No type info!
// You fix it by creating a .d.ts file:
// utils.d.ts
// export declare function greet(name: string): string;
// Now TypeScript knows that greet takes a string and returns a string.
// 📦 In the Wild
// When you install type definitions like:
// npm install --save-dev @types/lodash
// You're downloading .d.ts files that describe the Lodash library, so TypeScript understands how to use it.
// 🛠️ Summary
// .d.ts Means	Use
// Declaration File	Tells TypeScript about the shape/types of code
// No real code inside	Only type information
// Used for JS libraries	So TS can check types & suggest completions
// Would you like to see how to write your own .d.ts file for a real JS function or library?
// You said:
// 🔁 15. Decorators (Experimental)
// Class decorators
// Method decorators
// Property and parameter decorators
// Use in frameworks like Angular
// ChatGPT said:
// Great! Let's break down Decorators in TypeScript — they are a powerful feature, often used in frameworks like Angular, and still considered experimental, which means you need to enable them manually in tsconfig.json.
// 🔁 What are Decorators?
// Decorators are special functions that can be attached to:
// Classes
// Methods
// Properties
// Parameters
// They add metadata or modify behavior at runtime.
// To use decorators, add this in your tsconfig.json:
// {
//   "experimentalDecorators": true
// }
// 🎓 1. Class Decorator
// A class decorator is applied to a class definition and can replace or modify it.
// function Logger(constructor: Function) {
//   console.log("Logging class:", constructor.name);
// }
// @Logger
var Persons = /** @class */ (function () {
    function Persons(name) {
        this.name = name;
    }
    return Persons;
}());
// When Persons is created, the Logger decorator logs the class name.
// 🧪 2. Method Decorator
// A method decorator modifies a method of a class.
function LogMethod(target, propertyName, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(propertyName, " with"), args);
        return originalMethod.apply(this, args);
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    //   @LogMethod
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
// The add() method logs its arguments whenever it's called.
// 🏷️ 3. Property Decorator
// A property decorator adds metadata to a class property.
function LogProperty(target, propertyName) {
    console.log("Property decorated: ".concat(propertyName));
}
var User = /** @class */ (function () {
    function User() {
        //   @LogProperty
        this.name = "";
    }
    return User;
}());
// This logs the name of the property when the class is defined.
// 🎯 4. Parameter Decorator
// A parameter decorator adds metadata to method parameters.
function LogParam(target, methodName, paramIndex) {
    console.log("Parameter in method ".concat(methodName, " at index ").concat(paramIndex));
}
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    return Greeter;
}());
// Logs info about the decorated parameter in greet().
// 🏗️ Use in Angular (Popular Case)
// In Angular, decorators are used extensively:
// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-hello',
//   template: `<h1>Hello</h1>`
// })
var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    return HelloComponent;
}());
exports.HelloComponent = HelloComponent;
// @Component is a class decorator that turns the class into an Angular component.
// ⚙️ Summary
// Type	Applied To	Purpose
// @ClassDecorator	Classes	Modify class or add metadata
// @MethodDecorator	Methods	Modify or wrap method logic
// @PropertyDecorator	Class fields	Metadata or validation
// @ParamDecorator	Method Params	Metadata about parameters
