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

let username = null;
let defaultName ="GUest";
console.log(username ?? defaultName);

username="karthik";
defaultName ="Guest"
console.log(username ?? defaultName);

console.log("hello" - 2);   // NaN
console.log(8 ** 3);    // NaN
console.log("hi" / 2);     // NaN


let s = 3;
s-=5;
console.log(s)


console.log(typeof "sharath");


let arrv=[];
let obj ={}
console.log(10 instanceof Object);

let a = 23;
let b = 24;
let sh  = a&&b;
console.log(sh);

sh=a&&56;
console.log(sh);
let a1=23;
 let b1 =23;

console.log(a1===b1);

let c1=23;
 let d1 ="22";

console.log(c1==d1);


a= 45;
 a++;
console.log(a)

a= 45;
 ++a;
console.log(a)

let marks =75;

if (marks>=90){
    console.log("Grade A")
}
else if (marks<=90){
    console.log("Grade B")
}
let num = 7;

if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}
