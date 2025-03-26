// **************************** function **********************************

//simple function

// function say () {
//     console.log("what do you thing");
    
// }
// say();   // say mean refrence say() execuite

// function with parameter and arguments

// function add(num1 , num2)  { // parameter
//     console.log(num1 + num2);
// }

// add(5,5); // arguments


// function with return keyword
// function minus(num1 , num2) {
//     return num1 - num2
// }

// let returnfunction = minus(10,3);
// console.log("returnfunction : " , returnfunction);

//************************** function with rest operator ***********************************/

// function add (...num1) {
//     return num1   
// }
// console.log(add(100,200,300,400,500));



// ************************ condition statement / if , elif , else ************************


// if (true) {
//     let a = 20;
//     const b = 30;
//     var c = 40;
// }

// console.log(a);
// console.log(b);

// console.log(c); var scope ko ignore krta


// ************************** function with hoisting *******************************

// console.log(addone(5));    
// function addone  (num) {     //function 
//     return num + 1
// }



// const func = function (num1) { // this name is expression 
//     return num1 +  2
// }
// func(5)

//  **************************** object this and method ******************************

// let obj = {
//     username : "M.usama",
//     f_name : "M faisal",
//     func : function () {
//         console.log(`your name is ${this.username} and Father name is  ${this.f_name}`);
       
//     }
    
// }

// obj.func();
// obj.username = "M.Daniyal";
// obj.func()
// console.log(this);



// function chai (){
//     console.log(this);
// }
// chai()


// ******************************** Arrow function *************************************

// let func = () => {
//     console.log("This function is arrow function");
    
// }
// func();

// let addNum = (num1 , num2) => {
//     return num1 + num2;
// }
// console.log(addNum(10,10));



// ***************************** IIFE *******************************************

// (function uk(){
//     console.log("DB connected");
    
// })();

// ( () => {
//     console.log("DB Two connected");
    
// })()


// ( (name) => {
//     console.log(`DB Two connected ${name}`);
    
// })("usama")








