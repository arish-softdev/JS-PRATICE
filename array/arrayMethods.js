// Array Method in Javascript

// 1. Push()
let nums = [1, 2, 3, 4, 5];

nums.push(6);
console.log(nums);

// 2. Pop()
let no = [1, 2, 3, 4, 5];

no.pop();
console.log(no);

// 3. Map()
let nos = [1, 2, 3, 4, 5];

let doubled = nos.map((n) => n * 2);
console.log(doubled);

// 4. Filter()
let number = [1, 2, 3, 4, 5];

let even = number.filter((n) => n % 2 === 0);
console.log(even);

// 5. ForEach()
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((n) => console.log(n));

// 6. Find()
let nnumbers = [1, 2, 3, 4, 5];

let result = nnumbers.find((n) => n > 3);
console.log(result);

// 7. Reduce()
let nnumber = [1, 2, 3, 4, 5];

let output = nnumber.reduce((sum, n) => sum + n, 0);
console.log(output);