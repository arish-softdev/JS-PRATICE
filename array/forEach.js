// ForEach array methods in javascript

// Ex1

// let nums = [10, 20, 30, 40];

// nums.forEach(function(n) {
//     console.log(n);

// });

// Ex2

// let letters = ["a", "b", "c"];

// letters.forEach(function(value, index) {
//     console.log(index, value);

// });

// Ex3

// let arr = [5, 10, 45];
// let sum = 0;

// arr.forEach(function(num) {
//     sum += num;
// });

// Ex4

// let names = ["Scarlet", "Shina", "Hima"];

// names.forEach(function(fem) {
//     console.log(fem.toUpperCase());

// });

// Ex5

// let nums = [1, 2, 3, 4];

// nums.forEach(function(n) {
//     console.log(n * 2);

// });

// Ex6

// let numbers = [11, 22, 33, 44, 55];

// numbers.forEach(function(n) {
//     if (n % 2 === 0) {
//         console.log(n);

//     }
// });

// Ex7

// let people = ["Ai", "Aqua", "Ruby", "Kana", "Akane", "Memcho"];
// let count = 0;

// people.forEach(function(name) {
//     if (name.length > 4) {
//         count++;

//     }
// })

// console.log(count);

// Ex8

// let arr = [3, 6, 9];
// let dummy = [];

// arr.forEach(function(n) {
//     dummy.push(n);
// })

// console.log(dummy);

// Ex9

// let result = [1, 3, 4].forEach(num => num * 2);

// console.log(result);  // undefined

// Ex10

// let nums = [1, 2, 3];

// nums.forEach((v, i, arr) => {
//     arr[i] = v * 10;

// });

// console.log(nums);

// Ex11

// let nums = [1, 2, 3, 4];

// nums.forEach(n => {
//     if (n === 3) break;
//     console.log(n);

// })

// Ex12

// let arr = [1, 2, 3];

// arr.forEach(n => {
//     arr.push(n + 3);
// });

// console.log(arr);

// Ex1

let nums = [10, 20, 30];

nums.forEach((num) => {
  console.log(num);
});

// Ex2

let fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index) => {
  console.log(index + " - " + fruit);
});

// Ex3

let numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num + 5);
});

// Ex4

let users = [
  { name: "Ravi", age: 22 },
  { name: "Kumar", age: 17 },
];

users.forEach((user) => {
  console.log(user.name);
});

// Ex5

let total = 0;
let numz = [10, 20, 30];

numz.forEach((num0) => {
  total += num0;
});

console.log(total);
