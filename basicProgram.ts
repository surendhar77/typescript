//basic types

let username: string = "Alice";
let age: number = 30;
let isStudent: boolean = true;

// Explanation:
// You explicitly declare variable types. This helps avoid bugs like assigning string to number.

let data: any = 10;
data = "Hello"; // valid

let value: unknown = "Hi";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

function log(): void {
  console.log("Nothing returned");
}

function throwError(): never {
  throw new Error("This will never return");
}

// Explanation:

// any: disables type checking.

// unknown: safe version of any, must be type-checked.

// void: for functions with no return.

// never: for functions that throw or never return.

let fruits: string[] = ["apple", "banana"];
let prices: Array<number> = [1.99, 2.99];

let user: [string, number] = ["Alice", 25];

// Explanation:

// string[] and Array<number> are arrays.

// Tuples are fixed-length arrays with specific types in order.


//  Why Use Generics?
// Without generics, you'd write functions for every type:

function echoString(arg: string): string {
    return arg;
  }
  
  function echoNumber(arg: number): number {
    return arg;
  }

//with Generics, you can write just one function:

function echo<T>(arg: T): T {
    return arg;
  }
  echo<string>("Hello");  // Returns: "Hello"
  echo<number>(123);      // Returns: 123
  echo<boolean>(true);    // Returns: true


  function identity<T>(value: T): T {
    return value;
  }
//   T is a type variable (like x in math).
// It will be replaced by the actual type when the function is called.
  
  identity<string>("TypeScript"); // inferred as string
  identity<number>(99);           // inferred as number

    
//Generic with Arrays
  function firstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  const num = firstElement([1, 2, 3]);     // type is number
  const word = firstElement(["a", "b"]);   // type is string
  
 //Generic Interfaces
  interface Box<T> {
    content: T;
  }
  
  const box1: Box<string> = { content: "Hello" };
  const box2: Box<number> = { content: 123 };
  
//   xplanation:
// Box<T> is reusable for any type: Box<string>, Box<number>, etc.

// 🧰 Generic Constraints
// Sometimes you want generics to only allow specific kinds of types.
function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

logLength("Hello");       // ✅ works (strings have length)
logLength([1, 2, 3]);      // ✅ arrays have length
// logLength(123);        ❌ Error: number doesn't have 'length'
// 🔎 Explanation:
// T extends { length: number } means: T must have a length property.

// 🔗 Generic with Multiple Types
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const result = merge({ name: "Alice" }, { age: 30 });
// result has both name and age


// 🔤 1. Type Annotations
// ✅ What is a Type Annotation?
// A type annotation is when you explicitly tell TypeScript what type a variable, function parameter, or return value should be.

// 📘 Syntax:
// let variableName: type;

// ✅ Example 1: Variable
let namesss: string = "Alice";
let ages: number = 30;
let isStudents: boolean = true;
// 🧠 Explanation:
// We tell TypeScript that:

// name is a string

// age is a number

// isStudent is a boolean

// Now, if you try:

 let namessss = 123; // ❌ Error: number is not assignable to type string
// TypeScript helps prevent type mistakes.

// ✅ Example 2: Function Parameters and Return Types
function greet(person: string): string {
  return `Hello, ${person}`;
}
// 🧠 Explanation:

// person: string → parameter must be a string

// : string after the parentheses → function returns a string

// ✅ Example 3: Arrays and Objects
let scores: number[] = [90, 85, 88];

let userss: { name: string; age: number } = {
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
let something: any = "I am a string";
let strLength: number = (something as string).length;
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
let userS: [string, number] = ["Alicess", 25];
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
const [nameS, ageS] = userS;
console.log(nameS); // "Alice"
// 🚀 When to Use Tuples?
// Tuples are great for:

// Returning multiple values from a function.

// Representing structured data with fixed order and types.

// Example: Returning multiple values

function getUser(): [string, number] {
  return ["Charlie", 28];
}

const [usernameS, userAge] = getUser();


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

enum Direction {
  Ups,
  Downs,
  Left,
  Right
}
// 🧠 Explanation:

// Direction.Up has value 0

// Direction.Down has value 1, and so on...

// You can access them like:

let move = Direction.Left;
console.log(move); // 2
// ✍️ Custom Numeric Values
enum Status {
  Success = 1,
  Error = 100,
  Loading = 200
}
// 🔤 String Enums
enum Color {
  Reds = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
// 🧠 Explanation:

// Each member has a string value.

// Useful when you want readable values in logs or UI.
let paint: Color = Color.Green;
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
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

sumAll(1, 2, 3);       // 6
sumAll(5, 10, 15, 20); // 50
// 🧠 Explanation:

// ...numbers gathers all arguments into an array.

// TypeScript ensures all are of type number.

// ✅ With Other Parameters:
function greetAll(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
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
function add(a: number, b: number): number {
  return a + b;
}
// ✅ : number after the parameters tells TypeScript the function will return a number.

// 🚫 If you try to return a string, it will throw an error.

// 🔹 Example 2: Returning a string
function greets(name: string): string {
  return "Hello, " + name;
}
// 🔹 Example 3: Returning void (no return value)
function logMessage(message: string): void {
  console.log(message);
}
// void means this function does not return anything.

// 🔹 Example 4: Returning an object
function getUsers(): { name: string; age: number } {
  return {
    name: "Alice",
    age: 25,
  };
}
// The return type is an object with name (string) and age (number).

// 🔹 Example 5: Optional Return Type (inferred)
function multiplys(a: number, b: number) {
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
const myFuncs = function(a: number, b: number): number {
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
const myFunc = (a: number, b: number): number => {
  return a + b;
};
// ✅ Same behavior as anonymous function, but cleaner and more concise.

// 🔹 Examples
// 👉 Short version (if one-line return):
const square = (n: number): number => n * n;
// 👉 No parameters:
const greetss = (): void => {
  console.log("Hi there!");
};
// 👉 One parameter (no parentheses needed):
const double = n => n * 2;
// 🔹 Arrow vs Anonymous

// Feature	Anonymous Function	Arrow Function
// Syntax	function(a, b) { return a + b }	(a, b) => a + b
// this binding	Own this	Inherits this from parent scope ✅
// Used as callback	✅ Yes	✅ Yes
// Shorter syntax	❌ No	✅ Yes
// ✅ Summary
// Use anonymous functions when you need a quick unnamed function.

// Use arrow functions for more concise syntax and better this handling in nested functions.

// 🔹 What is Function Overloading?
// Function overloading means writing multiple function signatures for the same function name, so it can accept different types or numbers of parameters.

// TypeScript allows you to define multiple versions (signatures) of a function, but only one actual implementation.

// 🔹 Syntax Example
function greetssss(name: string): string;        // overload 1
function greetssss(age: number): string;         // overload 2
function greetssss(value: any): string {         // implementation
  if (typeof value === "string") {
    return "Hello, " + value;
  } else if (typeof value === "number") {
    return "You are " + value + " years old";
  }
}
// ✅ Here, greet() can accept either a string or a number.

// 🔹 How it works
// 1. Overload Signatures
// Define multiple ways to call the function:
function show(value: string): void;
function show(value: number): void;
// 2. Single Implementation
// You must write one function to handle all cases:
function show(value: any): void {
  console.log("Value: ", value);
}
// 🔹 Complete Example
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
console.log(combine(10, 20));      // Output: 30
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
let userssss: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};
// ✅ 2. Interfaces
// Used to define the structure of an object. Preferred for defining object types and can be extended.
interface User {
  name: string;
  age: number;
}

const personss: User = {
  name: "Bob",
  age: 25,
};
// ✅ Extendable:
interface Employee extends User {
  employeeId: number;
}
// ✅ 3. Type Aliases (type)
// Also defines object shapes, but is more flexible (can be used with unions, tuples, etc.).
type Car = {
  brand: string;
  year: number;
};

const myCar: Car = {
  brand: "Toyota",
  year: 2020,
};
// ✅ Can also alias union types:
type Statuss = "success" | "error";
// ✅ 4. Optional Properties
// Use ? to indicate a property is optional.
interface Product {
  name: string;
  price?: number; // optional
}

const item: Product = {
  name: "Book",
};
// ✅ 5. Readonly Properties
// Prevent properties from being changed after initialization.
interface Config {
  readonly apiKey: string;
}

const config: Config = {
  apiKey: "123-abc",
};

// // config.apiKey = "new-key"; ❌ Error!
// ✅ 6. Index Signatures
// Allows objects to have dynamic properties with a specified type.

// ts
// Copy
// Edit
interface Dictionary {
  [key: string]: string;
}

const colors: Dictionary = {
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
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // Getter
  get name(): string {
    return this._name;
  }

  // Setter
  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error("Name is too short!");
    }
    this._name = newName;
  }
}

const p = new Person("Alice");

console.log(p.name);  // ✅ Uses getter → "Alice"

p.name = "Bob";       // ✅ Uses setter
console.log(p.name);  // "Bob"

// // p.name = "Al";     ❌ Error: Name is too short!
// 📝 Why Use Getters & Setters?

// Feature	Purpose
// 🔒 Encapsulation	Keep data safe inside the class
// ✅ Validation	Add checks when setting values
// 🔄 Computed Values	Return processed/calculated values via getter
// 👨‍💻 Cleaner Syntax	Looks like property access, not function call
// 🆚 Without Getters/Setters
// You’d have to use methods:
// getName()  // vs. just using: person.name
// setName("John")  // vs. person.name = "John"
// Getters/setters simplify that into natural property syntax.

// ✅ Summary
// Use get to return a property with custom logic.

// Use set to validate or modify input before storing.

// Works great for data hiding, security, and readability.


// 🧩 Interfaces with Classes in TypeScript
// ✅ What is it?
// In TypeScript, interfaces can be used to define the structure (contract) that a class must follow. This helps enforce consistency and type safety.

// 📌 Why Use Interfaces with Classes?
// Ensure that a class implements certain properties and methods.

// Promote code reusability and readability.

// Allow multiple classes to follow the same structure.

// 🛠 Syntax
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}
// 🔍 Explanation:
// interface Animal defines a structure: a name and a makeSound method.
// 
// class Dog implements Animal means Dog must have both name and makeSound().

// ✅ Multiple Interfaces
// A class can implement more than one interface:

interface CanRun {
  run(): void;
}

interface CanBark {
  bark(): void;
}

class Bulldog implements CanRun, CanBark {
  run() {
    console.log("Running fast!");
  }

  bark() {
    console.log("Barking loud!");
  }
}
// ❌ What Happens If You Miss Something?
// If you forget a required property or method, TypeScript will show a compile error.
// class Cat implements Animal {
//   name: string;
  // Missing makeSound → ❌ Error!
// }
// ✨ Bonus: Interface with Readonly or Optional
interface Vehicle {
  readonly brand: string;
  model?: string; // Optional
}
// 🧠 Summary

// Feature	Description
// interface	Blueprint for properties and methods
// implements	Class must provide what's defined in the interface
// Type Checking	Ensures classes stick to required structure
// 🧩 What are Static Members?
// In TypeScript (and JavaScript), static members are properties or methods that belong to the class itself, not to an instance of the class.

// You can access them without creating an object of the class.

// 📌 Syntax:
class MathHelper {
  static pi: number = 3.14;

  static square(x: number): number {
    return x * x;
  }
}
// 🧠 Explanation:
// pi and square() are static, so you don’t need to create an object to use them.

// You can call them directly using the class name.

// ✅ Usage:
console.log(MathHelper.pi);           // 👉 3.14
console.log(MathHelper.square(4));    // 👉 16
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
MathHelper.pi;  // ✅
// ✅ When to Use Static Members?
// Utility/helper methods (like Math.random())

// Shared constants or values

// Global counters or configuration

// 🧠 Summary:

// Term	Means
// static	Belongs to the class, not instances
// Accessed by	ClassName.staticPropertyOrMethod()
// Example use	Utility functions, constants, configs
// Want to try making your own utility class using static? I can walk you through it!'

// 🔄 What Are Mapped Types?
// Mapped types let you create new types based on existing ones by transforming their keys.

// Think of it as a type loop over the keys of an object.

// 🧱 Basic Syntax
// type MyMappedType<T> = {
//   [K in keyof T]: T[K];
// };
// Here:

// T is a generic type.

// K in keyof T loops through the keys of T.

// The resulting type has the same keys and values as T.

// ✅ Example 1: Copying a type
type Personk = {
  name: string;
  age: number;
};

type CopyPerson = {
  [K in keyof Person]: Person[K];
};

// CopyPerson is exactly like Person
// ✅ Example 2: Making all properties optional
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Userpp = {
  username: string;
  email: string;
};

type OptionalUser = Optional<User>;
// Result:
// {
//   username?: string;
//   email?: string;
// }
// ✅ Example 3: Making all properties readonly
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Settings = {
  darkMode: boolean;
  language: string;
};

type ReadonlySettings = ReadOnly<Settings>;
// Now, all properties are readonly
// ✅ Example 4: Remapping keys (Advanced)
type PrefixKeys<T> = {
  [K in keyof T as `prefix_${string & K}`]: T[K];
};

type Data = {
  id: number;
  name: string;
};

type PrefixedData = PrefixKeys<Data>;
// Result:
// {
//   prefix_id: number;
//   prefix_name: string;
// }
// 📌 Use Cases
// Creating variants of existing types (optional, readonly, nullable, etc.)

// Adding/removing/modifying keys programmatically

// Building reusable utility types

// 🎯 Summary

// Feature	Description
// [K in keyof T]	Loops through keys of T
// T[K]	Gets the type of each key
// Can use ?, readonly, or as for customization	
// Super useful in libraries like @types, React, Redux, etc.	
// Let me know if you want real-world examples like form types, DTOs, or API responses using mapped types!
// You said:
// Conditional types (T extends U ? X : Y)

// ChatGPT said:
// Absolutely! Let’s break down Conditional Types in TypeScript in a simple and clear way — with both explanation and code examples. 🚀

// 🔁 What Are Conditional Types?
// In TypeScript, a conditional type is like an if-else for types.

// 🔤 Syntax:
// T extends U ? X : Y
// This means:

// If T is assignable to U, then the type will be X.

// Otherwise, it will be Y.

// ✅ Example 1: Basic Usage
type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"
// 🧠 Explanation:

// If the given type is a string, return "Yes", else return "No".

// ✅ Example 2: Conditional Return Type
type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  "unknown";

// type A = TypeName<true>;      // "boolean"
// type B = TypeName<42>;        // "number"
// type C = TypeName<string[]>;  // "unknown"
// 🔎 This is like a chain of if-else-if co/nditions.

// ✅ Example 3: Filtering a Union Type
type OnlyStrings<T> = T extends string ? T : never;

type Result = OnlyStrings<"a" | 42 | "b">;
// "a" | "b" — filters out non-strings
// ✅ Example 4: Conditional with Generics
type GetArrayType<T> = T extends (infer U)[] ? U : T;

// type A = GetArrayType<number[]>; // number
// type B = GetArrayType<string>;   // string
// 📌 Here, infer U extracts the item type from an array.

// 📘 Use Cases

// Situation	Use Conditional Types
// Type transformation	✅
// Creating utility types	✅
// Filtering types from a union	✅
// Type-safe generic behavior	✅
// 🔧 Common Utility Types Built with It
// Exclude<T, U> — removes U from T

// Extract<T, U> — keeps only U in T

// NonNullable<T> — removes null and undefined

// Example:
type Clean = NonNullable<string | undefined | null>; // string
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
namespace Shapes {
  export class Circle {
    constructor(public radius: number) {}
  }
}
// usage
let c = new Shapes.Circle(10);
// 👎 Works only when modules are not used. Not recommended for modern apps.

// 📑 export type and import type
// Used to export or import only types, not runtime values. Helps reduce compiled JS output.
// types.ts
export type Usero = {
  name: string;
  age: number;
};

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
export function addss(x: number, y: number) {
  return x + y;
}

// export const PI = 3.14;
// You can export multiple items from one file using export.

// 🔁 What is Import?
// You use import to bring in exported items from another file.

// ✅ Example: Named Import
// file: app.ts
// import { add, PI } from './math';

console.log(addss(2, 3));     // 5
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

console.log(greet('Alice'));  // Hello, Alice
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
export function addsss(x: number, y: number) {
  return x + y;
}

export const PI = 3.14;
// 📥 Importing:
// // file: app.ts
// import { add, PI } from './math';

console.log(add(2, 3));  // 5
console.log(PI);         // 3.14
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
namespace MyMath {
  export function add(x: number, y: number): number {
    return x + y;
  }

  export function subtract(x: number, y: number): number {
    return x - y;
  }
}
// Use export inside the namespace to make functions accessible outside.

// 📥 Using the Namespace
console.log(MyMath.add(10, 5));       // 15
console.log(MyMath.subtract(10, 5));  // 5
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
export function addssssss(a: number, b: number) {
  return a + b;
}
// app.ts
// import { add } from './math';
// This is cleaner, easier to scale, and supported by modern tools and bundlers.

// ✅ When Might You Use a Namespace?
// In legacy codebases.

// When you're not using a module system (e.g., plain HTML + <script> setup).

// To organize code within a single file.

// Let me know if you'd like a real example of organizing multiple classes/functions using namespaces!

// You said:
// export type, import type
// ChatGPT said:
// Great question! Let's explore export type and import type in TypeScript — especially useful for type-only code organization and improving performance when compiling with tools like Babel or using type-only imports in projects like React + Vite.

// 🔹 Why Use export type and import type?
// These keywords help:

// Avoid importing runtime code when you only need types.

// Speed up builds by telling the compiler that the import/export is type-only.

// Avoid circular dependencies and cleaner bundling.

// 🧱 export type — Exporting Only a Type
// ✅ Example:
// file: shapes.ts
export type Shape = {
  name: string;
  sides: number;
};

export interface Circle {
  radius: number;
}
// This tells TypeScript: “Hey, Shape is just a type, not a variable or function that exists at runtime.”

// 📥 import type — Importing Only a Type
// ✅ Example:
// file: main.ts
// import type { Shape } from './shapes';
const drawShape = (shape: Shape) => {
  console.log(`Drawing a ${shape.name} with ${shape.sides} sides.`);
};
// This import ensures:
// The Shape type is not included in the compiled JS.
// It's only used at compile time.
// ✅ Real-World Use Case (React example)
// file: types.ts
export type Usersas = {
  name: string;
  age: number;
};
// file: UserCard.tsx
// import type { User } from './types';

// const UserCard = (props: { user: User }) => {
//   return <div>{props.userS.name}</div>;
// };
// Your bundler (e.g., Webpack/Vite) will not include types.ts in the bundle — because User is used only for type checking.

// 🔄 Summary Table

// Feature	export type	import type
// Purpose	Export only a type	Import only a type
// Used for	Interfaces, type aliases	Interfaces, type aliases
// At runtime	Not included	Not included
// Benefit	Avoid extra JS	Avoids runtime import
// Let me know if you want a live example or demo using this in a TypeScript + React setup!

// You said:
// Module resolution strategies  explain brefily 
// ChatGPT said:
// Sure! Let's break down Module Resolution Strategies in TypeScript — these define how TypeScript finds the files/modules when you use import or export.

// 🧭 What Is Module Resolution?
// When you write:
// import { User } from './models/User';
// TypeScript needs to find where ./models/User actually points to. The way it does this is called module resolution.

// 🔧 Two Main Strategies
// 1. Classic (Old)
// Used for older, non-module-style TypeScript projects.

// Resolves imports relative to the file, not the project structure.

// Rarely used today.

// 2. Node (Default and Recommended)
// Mimics how Node.js resolves modules.

// Looks in:

// The exact file (User.ts, User.tsx, User.d.ts, etc.)

// index.ts inside folders (./models/User/index.ts)

// Then checks node_modules if it's a package

// 🗂️ Example
// Suppose you import:

// import { something } from 'my-lib';
// With Node strategy, TypeScript checks:

// // ./my-lib.ts

// ./my-lib/index.ts

// ./node_modules/my-lib/package.json → main/module field

// 🔧 How to Set Strategy
// In tsconfig.json:

// {
//   "compilerOptions": {
//     "moduleResolution": "node"  // or "classic"
//   }
// }
// 📦 With Path Mapping (Advanced)
// You can map aliases for simpler imports:

// {
//   "compilerOptions": {
//     "baseUrl": "./",
//     "paths": {
//       "@models/*": ["src/models/*"]
//     }
//   }
// }
// Then use:
// import { User } from '@models/User';
// ✅ Summary

// Strategy	Description	Use Case
// Node	Follows Node.js rules (default)	✅ Modern TypeScript projects
// Classic	Legacy resolution method	❌ Rarely used today
// Let me know if you'd like help configuring tsconfig.json for module paths or aliasing!

// You said:
// Partial<T>
// ChatGPT said:
// ✅ Partial<T> in TypeScript — Brief & Clear Explanation with Code
// Partial<T> is a utility type in TypeScript that makes all properties of a type optional.

// 🔧 Syntax
// Partial<Type>
// It transforms all the properties of Type into optional ones.

// 📌 Example: Without Partial
type Userrrrr = {
  name: string;
  age: number;
};

const updateUserss = (user: Userrrrr) => {
  // Must provide both `name` and `age`
};
// ✅ With Partial<T>
function updateUsersss(id: number, newValues: Partial<User>) {
  // Now we can update only part of the user info
  console.log(id, newValues);
}

// updateUserss(1, { name: "Alice" }); // ✅ OK
updateUsersss(2, { age: 30 });       // ✅ OK
// 🔍 Behind the Scenes
// Partial<T> is equivalent to:
type Partial<T> = {
  [P in keyof T]?: T[P];
};
// It uses Mapped Types to loop through the keys of T and adds ? to each key, making them optional.

// ✅ When to Use Partial<T>
// For update functions (e.g., updating part of a user, product, etc.)

// When building form data types with optional values

// To prevent forcing full object structure

// 🧠 Summary

// Feature	What it does
// Partial<T>	Makes all properties of T optional
// Use case	Updating objects, form handling, patch APIs
// Core concept	Uses Mapped Types and ?
// Let me know if you'd like examples with interface, class, or nested types too!

// You said:
// Required<T>

// ChatGPT said:
// ✅ Required<T> in TypeScript — Brief & Clear Explanation with Code
// Required<T> is a utility type that makes all properties of a type required, even if they were optional originally.

// 🔧 Syntax
// ts
// Copy
// Edit
// Required<Type>
// It removes optional (?) modifiers from all the properties of a type.
// 
// 📌 Example: Without Required
type Usereee = {
  name?: string;
  age?: number;
};
// Here, both name and age are optional.

// ✅ With Required<T>

type FullUser = Required<Usereee>;

const useree: FullUser = {
  name: "John",
  age: 25,
}; // ✅ Must include both name and age
// If you omit one:
// const user2e: FullUser = {
//   name: "Alice"
// }; // ❌ Error: Property 'age' is missing
// 🔍 Behind the Scenes/
type Required<T> = {
  [P in keyof T]-?: T[P];
};
// The -? removes the optional modifier from each property in the type.

// ✅ When to Use Required<T>
// To enforce that a value must have all properties filled

// When merging partial and full object data

// For functions that must receive fully-defined objects

// 🧠 Summary

// Feature	What it does
// Required<T>	Makes all properties required
// Use case	Data validation, strict API inputs
// Opposite of	Partial<T>
// Let me know if you want to see how Required<T> works with nested types or interfaces!

// You said:
// Readonly<T>
// ChatGPT said:
// ​

// You said:
// Omit<T, K>
// ChatGPT said:
// ✅ Omit<T, K> in TypeScript — Brief & Clear Explanation with Code
// Omit<T, K> is a utility type in TypeScript that constructs a new type by removing specific properties from an existing type.

// 🔧 Syntax
// Omit<Type, Keys>
// Type: The type you want to modify.

// Keys: The keys (properties) you want to remove from that type.

// The resulting type will have all properties from Type except for the properties in Keys.

// 📌 Example
type Userw = {
  name: string;
  age: number;
  email: string;
};

type UserWithoutEmail = Omit<Userw, "email">;

const userw: UserWithoutEmail = {
  name: "John",
  age: 25
}; // ✅ email is omitted
// ✅ Removing Multiple Properties
// You can also omit multiple properties:
type UserWithoutEmailAndAge = Omit<Userw, "email" | "age">;

const userws: UserWithoutEmailAndAge = {
  name: "Alice"
}; // ✅ Only name remains
// 🔍 Behind the Scenes
// Omit<T, K> is implemented like this:
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// Exclude<keyof T, K>: 
// Removes K from the list of keyof T.

// Pick<T, ...>: Picks the remaining keys from T.

// ✅ When to Use Omit<T, K>
// When you need to remove specific properties from a type, often in cases like:

// Updating objects (e.g., removing sensitive properties like password when sending to a frontend).

// Creating subsets of data.

// 🧠 Summary

// Feature	What it does
// Omit<T, K>	Creates a new type by removing specific properties from T
// Use case	Removing properties from objects (e.g., forms, updates)
// Opposite of	Pick<T, K> (selecting specific properties)
// Let me know if you'd like to explore more about Omit<T, K> with other examples, or how it works with interfaces!

// You said:
// Exclude<T, U>
// ChatGPT said:
// ✅ Exclude<T, U> in TypeScript — Brief & Clear Explanation with Code
// Exclude<T, U> is a utility type in TypeScript that constructs a new type by removing all types that are assignable to U from the type T.

// 🔧 Syntax
// Exclude<T, U>
// T: The original type.

// U: The type you want to exclude from T.

// The resulting type is everything in T except for the types that are assignable to U.

// 📌 Example
type Fruits = "apple" | "banana" | "cherry" | "date";

// Exclude "banana" and "date"
type ExcludedFruits = Exclude<Fruits, "banana" | "date">;

// Result: "apple" | "cherry"
// Now, ExcludedFruits will only include "apple" and "cherry", excluding "banana" and "date".
// 
// ✅ Use Case with Unions
// Exclude is particularly useful when working with union types to remove specific values.
type Statusw = "pending" | "approved" | "rejected";

// Exclude "pending" from Status
type ActiveStatus = Exclude<Statusw, "pending">;

// Result: "approved" | "rejected"
// 🔍 Behind the Scenes
type Exclude<T, U> = T extends U ? never : T;
// T extends U ? never : T: If T is assignable to U, it gets excluded (replaced by never); otherwise, it stays in the result.
// ✅ When to Use Exclude<T, U>
// When you need to filter out specific types from a union.

// Useful for creating more specific types when certain values should be excluded.

// 🧠 Summary

// Feature	What it does
// Exclude<T, U>	Removes types assignable to U from T
// Use case	Excluding values from union types (e.g., filtering options)
// Opposite of	Extract<T, U> (extracts types assignable to U)
// Let me know if you'd like examples with more complex types or interfaces!

// You said:
// Extract<T, U>
// ChatGPT said:
// ✅ Extract<T, U> in TypeScript — Brief & Clear Explanation with Code
// Extract<T, U> is a utility type in TypeScript that constructs a new type by selecting only those types from T that are assignable to U.

// 🔧 Syntax
// Extract<T, U>
// T: The original type (usually a union of types).

// U: The type to extract from T.

// The resulting type will be the intersection of T and U, meaning it includes only types that are assignable to U.

// 📌 Example

type Fruit = "apple" | "banana" | "cherry" | "date";

// Extract types that are assignable to "string"
type StringFruits = Extract<Fruit, string>;

// Result: "apple" | "banana" | "cherry" | "date"
// In this case, all values of Fruit are strings, so StringFruits will be equal to the original Fruit type.

// ✅ More Specific Use Case
type Statusr = "pending" | "approved" | "rejected";
type Action = "approved" | "rejected" | "canceled";

// Extract types from Status that are in Action
type ValidStatus = Extract<Statusr, Action>;

// Result: "approved" | "rejected"
// Here, ValidStatus will be "approved" | "rejected", because those are the only values that exist in both Status and Action.

// 🔍 Behind the Scenes
type Extract<T, U> = T extends U ? T : never;
// T extends U ? T : never: If T is assignable to U, then T is included in the result. Otherwise, it’s replaced with never.

// ✅ When to Use Extract<T, U>
// When you want to select only the types from T that are assignable to U.

// Useful in scenarios where you are working with overlapping types and need to filter out irrelevant ones.

// 🧠 Summary

// Feature	What it does
// Extract<T, U>	Selects only the types from T that are assignable to U
// Use case	Filtering union types to find common types
// Opposite of	Exclude<T, U> (removes types assignable to U)
// Let me know if you'd like examples with more complex types or if you'd like to explore it with interfaces!

// You said:
// NonNullable<T>
// ChatGPT said:
// ✅ NonNullable<T> in TypeScript — Brief & Clear Explanation with Code
// NonNullable<T> is a utility type in TypeScript that constructs a new type by removing null and undefined from a given type T.

// 🔧 Syntax
// NonNullable<T>
// T: The type from which null and undefined will be excluded.

// The resulting type is the same as T, but with null and undefined removed.
// 📌 Example
type Useru = {
  name: string;
  age: number | null;
  email: string | undefined;
};

// Remove null and undefined
type NonNullableUser = NonNullable<Useru>;

// Result: { name: string; age: number; email: string; }
// Here, NonNullableUser will have the same properties as User, but age will no longer accept null and email will no longer accept undefined.

// ✅ Use Case
// Consider a situation where you are dealing with types that can sometimes be null or undefined:
type APIResponse = {
  data: string | null;
  error: string | undefined;
};

// Remove null and undefined
type ValidResponse = NonNullable<APIResponse>;

// Result: { data: string; error: string; }
// Now, ValidResponse will have data and error as string without the possibility of null or undefined.

// 🔍 Behind the Scenes
type NonNullable<T> = T extends null | undefined ? never : T;
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
function greety(): string {
  return "Hello, World!";
}

type GreetReturn = ReturnType<typeof greety>;
// GreetReturn is string
// ✅ ReturnType<typeof greet> extracts string, the return type of the greet function.

// 🧪 Another Example
const getUsery = () => {
  return { name: "Alice", age: 30 };
};

type UserType = ReturnType<typeof getUsery>;
// UserType is { name: string; age: number }
// This is useful when multiple parts of your code depend on the same return structure, and you want to avoid redefining the type manually.

// 🔍 Under the Hood
type ReturnType<T extends (...args: any) => any> = 
  T extends (...args: any) => infer R ? R : any;
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
function logMessagey(message: string, level: number): void {
  console.log(`[${level}] ${message}`);
}

type LogParams = Parameters<typeof logMessagey>;
// LogParams is [message: string, level: number]
// Now you can reuse LogParams elsewhere to maintain consistency:
const args: LogParams = ["System started", 1];
logMessagey(...args); // Valid ✅
// 🧪 Example with Arrow Function
const sum = (a: number, b: number): number => a + b;

type SumParams = Parameters<typeof sum>;
// SumParams is [a: number, b: number]
// 🔍 How It Works Internally
type Parameters<T extends (...args: any) => any> =
  T extends (...args: infer P) => any ? P : never;
// infer P captures the parameters of the function as a tuple.

// If T is not a function type, it returns never.

// ✅ Use Cases
// Reuse function parameters in multiple places

// Create wrappers or decorators

// Type-safe apply() or call() methods
function wrapLog(...args: Parameters<typeof logMessage>) {
  console.log("Before log...");
  logMessage(...args);
  console.log("After log...");
}
// ⚠️ Common Mistake
// Trying to use Parameters<T> on a non-function:
// type Fail = Parameters<string>; // ❌ Error
// 📌 Summary
// Utility	What it does
// Parameters<T>	Returns the parameter types of function T as a tuple
// Best for	Reusing function argument types consistently
// Would you like to see how this works with overloaded functions or async functions too

// You said:
// 🧪 10. TypeScript with React / Vue / Node
// Typing Props and State in React
// JSX with TypeScript
// Using TS with Express.js (Node)
// Typing hooks (useState, useEffect)
// Vue with vue-class-component and defineComponent
// ChatGPT said:
// Updated saved memory
// Great! Here's a brief explanation of each topic under TypeScript with React / Vue / Node:

// ⚛️ React + TypeScript
// 1. Typing Props and State
type Props = {
  name: string;
  age: number;
};

type State = {
  count: number;
};

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

function printLength(input: string | number) {
  if (typeof input === "string") {
    console.log(input.length); // TS knows input is a string here
  } else {
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

const nums = [1, 2, 3];
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
// TypeScript usage:
// import { add } from './math'; // ❌ TypeScript has no idea about types!
// ✅ Solution: Write a .d.ts file
// Create math.d.ts:
// 
export declare function addws(a: number, b: number): number;
// Now TypeScript understands the types:
// import { add } from './math';

const results = addw(5, 3); // ✅ No error, autocompletion works
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
  return `Hello, ${name}`;
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
class Persons {
  constructor(public name: string) {}
}
// When Persons is created, the Logger decorator logs the class name.

// 🧪 2. Method Decorator
// A method decorator modifies a method of a class.

function LogMethod(
  target: Object,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
//   @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}
// The add() method logs its arguments whenever it's called.

// 🏷️ 3. Property Decorator
// A property decorator adds metadata to a class property.
function LogProperty(target: any, propertyName: string) {
  console.log(`Property decorated: ${propertyName}`);
}

class User {
//   @LogProperty
  name: string = "";
}
// This logs the name of the property when the class is defined.

// 🎯 4. Parameter Decorator
// A parameter decorator adds metadata to method parameters.
function LogParam(target: Object, methodName: string, paramIndex: number) {
  console.log(`Parameter in method ${methodName} at index ${paramIndex}`);
}

class Greeter {
//   greet(@LogParam name: string) {
//     console.log(`Hello ${name}`);
//   }
}
// Logs info about the decorated parameter in greet().

// 🏗️ Use in Angular (Popular Case)
// In Angular, decorators are used extensively:
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hello',
//   template: `<h1>Hello</h1>`
// })
export class HelloComponent {}
// @Component is a class decorator that turns the class into an Angular component.

// ⚙️ Summary

// Type	Applied To	Purpose
// @ClassDecorator	Classes	Modify class or add metadata
// @MethodDecorator	Methods	Modify or wrap method logic
// @PropertyDecorator	Class fields	Metadata or validation
// @ParamDecorator	Method Params	Metadata about parameters
