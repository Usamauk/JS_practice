//             Named IIFE

// (function add(){
//     console.log(5 + 5);  
// })();

//    two IIFEs 1 file m create krne ke leye semi colun use krte he 

//            without name IIFE
// ( () =>  {
//     console.log(5 - 3);
// })()


//  if , elif , else 
//  < , > , <= , >= , == , === , !== , !=== ,  && , || 

// let score = 200;
// if (score === 190) {
//     console.log(`score is correct ${score}`);
// }

// else {
//     console.log("score is less then 200");
// }


// let month = 4
// switch (month) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
    

//     default:
//         console.log("march");
//         break;
// }


// let arr= ["usama"];
// if (arr.length === 0) {
//     console.log("array is empty");
// }
// else {
//     console.log("array is not empty");  
// }

// let arr= {"name":"usama"};
// if (Object.keys(arr).length === 0) {
//     console.log("array is empty");
// }
// else {
//     console.log("obj is not empty");  
// }


//                       nulleish operator

// let val1;
// val1 = null ?? 10;
// console.log(val1);


//                     Ternory operator

// let num = 20;
// num >= 10 ?  console.log("less then 20") : console.log("greater then 20");



//                     loops

// for (let index = 0; index <= 10 ; index++) {
//     const element = index;
//     console.log(element);
// }

// let arr = ["usama", "Daniyal","moiz"];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);  
// }

// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 Detected"); 
//         continue
//     }
//     console.log(index);      
// }

//                     while loop

// let i = 0;
// while (i <=10) {
//     console.log(i);
//     i = i + 2; 
// }

// let myarr = ["usama","daniyal","moiz","maaz"];
// let arr = 0;
// while (arr < myarr.length) {
//     console.log(`my array name is ${myarr[arr].toUpperCase()}`);
//     arr = arr + 1
// }

//                  do while loop

// let num = 0;
// do {
//     console.log(`score is ${num}`);
//     num = num + 1;
// } while (num <= 10);

let arr = ["usama","daniyal","moiz"];
for (const num of arr) {
    console.log(num);
}

let obj = {
    "name": "usama",
    "fname" : "M.faisal",
    "class": "FSC"
}

for (const key in obj) {
    console.log(key , obj[key]);
    
}





