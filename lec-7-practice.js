// Given the array [1, 2, 3], use destructuring to 
// assign variables a, b, and c the values 1, 2, and
//  3 respectively.

let arr = [1, 2, 3];
let [a,b,c] = arr;



// // Given the object { name: 'John', age: 25,
// //  city: 'New York' }, use destructuring to create
// //   variables name, age, and city with the 
// //   corresponding values.
// let obj = { name: 'John', age: 25, city: 'New York' };
// let {name, age, city} = obj;
// console.log(name)
// console.log(age)
// console.log(city)

// // Given the nested array [[1, 2, 3], [4, 5, 6],
// //  [7, 8, 9]], use destructuring to extract the
// //   value 5 into a variable.
// let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let [,[,val]] = arr1;
// console.log(val); 

// // Given the object { x: 10, y: 20 }, use destructuring
// //  to assign variables a and b with default values of
// //   0 if they are undefined.
// let obj1 = { x: 10, y: 20 };
// let {x: aa, y: bb} = obj1;
// console.log(aa);
// console.log(bb);

//Given the array [1, 2, 3, 4, 5], use destructuring
// to assign the first element to variable first, 
// and the rest of the elements to an array rest.
// let arr2 = [1, 2, 3, 4, 5];
// let [a1, ...rest] = arr2;
// console.log(a1, rest);



// Swap the values of two variables a and b without
//  using a temporary variable.
let a2 = 7;
let b2 = 4;
[a2, b2] = [b2, a2];
// console.log(a2, b2);


// // Create a function that takes an object 
// // { name, age, city } as a parameter and uses
// //  destructuring to log a message like 
// //  "John is 25 years old and lives in New York."
// let obj2 = {name: 'John', age: 25, city: "New York"}
// function abc({name, age, city}){
//     console.log(`${name} is ${age} years old and lives in ${city}`);
// }
// abc(obj2);


// Given the object { firstName: 'Alice', lastName: 'Smith' }
// , use destructuring to create variables first and last
//  with the corresponding values.
// let obj3 = { firstName: 'Alice', lastName: 'Smith' };
// let {firstName: first, lastName: last} = obj3;
// console.log(first);
// console.log(last);


// // Write a function that takes an array [x, y, z] as a
// //  parameter and returns the sum of these values using
// //   destructuring.
let arr3 = [1, 2, 4];
function sum(x,y,z){
    return x+y+z;
}

console.log(sum(...arr3));
