let x = 5;
let y = 0;
let res = x && y;
console.log(res);

res = x && 10;

console.log(res);



// or operator


let i =1;
let j =null;
let k = undefined;
let l =0;

console.log(j || i);
console.log (i || k);


// Not operator

let p ="hello";
let q =20;
console.log(!p);
console.log(!!p);

console.log(!q);
console.log(!!q)


// Nullish operator

let username = sharath;
let defaultName ="GUest";
console.log(username ?? defaultName);

username="karthik";
defaultName ="Guest"
console.log(username ?? defaultName);
