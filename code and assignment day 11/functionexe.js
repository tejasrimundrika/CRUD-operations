// function  demo(){//function declaration
//     console.log("Hello i am function demo()");
// }
// demo();//func calling
// demo();

// with parameters and arguments
// function add1(a,b){
//     console.log(a);
//     console.log(b);
//     console.log(a+b);
// }
// add1(5,6);
// add1(7,8);
// add1(3,4);
// add1(5,6);
// add1(10,30);
// 5,6
// 7,8
// 3,4
// 5,6
// 10,30

// function addToCart(){
//     document.body.style.background="teal";
//     alert("product is added successfully");
// }

//PALINDROME PROGRAM 
// let s = prompt("Enter the String:"); 
// let reversed = "";
// for (let i = s.length - 1; i >= 0; i--) {
//     reversed += s[i];
// }
// if (s === reversed) {
//     alert("String is the palindrome");
// } else {
//     alert("String is not a palindrome");
// }


//SIR SAID PROG PALIDROME
// let revStr ="";
// function isPalindrome(str)
// {
//     for(let i =str.length-1;i>=0;i--){
//         // console.log(str[i]);
//         revStr+=str[i];
//     }
//     // console.log(revStr);
//     if(str == revStr){
//         console.log("palindrome");
//     }else{
//         console.log("not a palindrome");
//     }
    
// }
// isPalindrome("madam");
// isPalindrome("sir");
// isPalindrome("malayalam");

// function onemoretime(){
//     console.log("not indrestood tell me one more time");
// }
// onemoretime();

//anamous function
// function(){
//     console.log("Anonymus function");
// }


// let x=function(){
//     console.log("function expression");
// }
// // console.log(x);
// x();

//!IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )();

//!arrow function
// function demo(){
//     console.log("Hello");
// }
// demo();

// let x = _ =>console.log("Hello");
// x();

// let x = a =>console.log(a);
// x(10);

// let x = (a,b) =>console.log(a+b);
// x(10,5);

// let x = _ =>{console.log("Hi");
//             console.log("Bye");
//             console.log("OKK");}
// x();

//!return

// function add(a,b){
//     console.log("i am printing return keyword!");
//     return a+b;//explicit return
// }
// let x =add(5,5);
// console.log(x);

// let x = (a,b) => a-b;//implicit return
// console.log(x(10,30));

// let y =(a,b)=>{return a+b;}//implicit return
// console.log(y(3,3));


// //ASSIGNMENT DAY -4
// //Right angled triangle pattern
// function generatestarpattern(n){
// let str ="";
// for(let i = 1;i<=n;i++){
//     for(let j=0;j<i;j++){
//         str+="*";
//     }
//     str +="\n";
//    }
//    return str;
// }
// let n = 5;
// console.log(generatestarpattern(n));

// //Rectangle Pattern 
// function generatePattern(rows, cols) {
//     let ttr = "";
//     for (let i = 1; i <= rows; i++) { 
//         for (let j = 1; j <= cols; j++) { 
//             ttr += "*"; 
//         }
//         ttr += "\n"; 
//     }
//     return ttr; 
// }
// let rows = 5;
// let cols = 5;
// console.log(generatePattern(rows, cols));


// //Cross pattern
// function generatepatterncross(){
// for(let i =0;i<size;i++){
//     let rows="";
//     for(let j=0;j<size;j++){
//         if(j===i||j=== (size-i-1)){
//             rows+="*";
//         }else{
//             rows+=" ";
//         }
//     }
//     console.log(rows);
// }
// }
// let size=5;
// generatepatterncross(rows);

//Higher ordered function
// function hof(a){
//     return a();
    
// };
// let x = hof(function(){return "This is call back function"});
// console.log(x);

// let b = function(){
//     console.log("Anamoyus");
// }
// b();

// function add(callback){
//     return callback(5,3);
// };
// let x = add(function(a,b){return a+b});
// console.log(x);

// let users =["Shyam","Teja","Chinnu","Shravani","akshu"]
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }
// let x = users.map((user)=>{
//     return user;
// });
// console.log(x);
// let x = users.forEach((user)=>{
//     return user;
// });
// console.log(x);

// //ASSIGNMENT DAY -4
// //Right angled triangle pattern
// let n = 5;
// for(let i = 1;i<=n;i++){
//     for(let j=0;j<i;j++){
//         document.writeln("*");
//     }
//     document.writeln("<br>")
// }

// for(var i=1;i<=5;i++){
//     console.log("*".repeat(i));
// }

// var a=10;
// let b = 30;
// function x(){
//     var user="Tejasri";
//     let company="Amazon";
//     const sal = 123344894;
//     console.log(user);
//     console.log(company);
//     console.log(sal);
//     console.log(a,b);
// }
// x();
// function x(){
//     var a=10;
//     let b =20;
//     console.log(a,b);
//     function y(){
//         let p="Js";
//         let q="React";
//         console.log(p,q);
//     }
// }

// function x(){
//     let a =10;
//     const b =20;
//     console.log(a,b);
//     function y(){
//         let p ="Js";
//         var q = "ReactJs";
//         console.log(p,q);
//         function z(){
//             const username = "Harish";
//             console.log(username);
//             console.log(a);
//             console.log(q);
//         }
//         z();
//     }
//     y();
// }
// x();
