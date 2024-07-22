// If a variable can be more than one type, we can declare it as a union type. 
// We use the pipe operator (|) to separate the types.

let myName: string | number;

myName = 25;

myName = "Furkan";

function checkForType(value: string | number) {
  if (typeof value === "string") {
    return "This is a string";
  } else {
    return "This is a number";
  }
}

// console.log(checkForType(myName));

let stringType: string = "sa";
let numberType: number = 5;
let booleanType: boolean = true;
let anyType: any = "Hello";
let undefinedAnyType: undefined = undefined;
let symbolType: symbol = Symbol("symbol");
const htmlInputType = document.querySelector("#input") as HTMLInputElement;


// const Person = {
//   name: "Furkan",
//   age: 21,
//   isStudent: true,
//   choice: "yes" as "yes" | "no",
// };

// There are 2 ways to declare a type for an object. The first way is to declare the type of each property.
// The second way is to use the interface.

const Person: {
  objectName: string;
  objectAge: number;
  objectIsStudent: boolean;
  objectChoice: "yes" | "no";
} = {
  objectName: "Furkan",
  objectAge: 21,
  objectIsStudent: true,
  objectChoice: "yes",
};

// console.log(Person.objectChoice);

const anyTypeArray = [];
const stringTypeArray: string[] = [];
const stringTypeArray2 = [] as string[];
const unionTypeArray: (string | number | boolean)[] = ["TestString", 5, false]; 
// You can't put any other type than string, number or boolean in this array.
const genericStringArray = [] as Array<string>;

stringTypeArray.push("Hello");
// When you push any items in array, it will be the type of the array.

let a: number | undefined;
a?.toFixed();
// If a is undefined, it will not throw an error. And won't run the function.

const myTuple: [string, string, number] = ["Hello", "Furkan", 21];

const [ tupleGreeting, tupleName, tupleAge ] = myTuple;