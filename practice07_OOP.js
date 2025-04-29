//                               ES6 
// class user {
//     constructor(name , fname , password){
//         this.name = name;
//         this.fname = fname;
//         this.password = password;
//     }
//     encrypted(){
//         return `${this.password}abc`;
//     }
//     changename(){
//         return `${this.name.toUpperCase()}`
//     }
// }

// let result = new user("usama","faisal","123");
// console.log(result);
// console.log(result.encrypted());
// console.log(result.changename());


//                                 Inheritance
// class user {
//     constructor(name){
//         this.name = name;
//     }
//     logme(){
//         return (`${this.name}`);
        
//     }
// }

// class userdetail extends user{
//     constructor(name,fname, roll_no, no){
//         super(name)
//         this.fname = fname;
//         this.roll_no = roll_no;
//         this.no = no
//     }

//     userno (){
//         return (`user no is : ${this.no}`);  
//     }
// }

// let result = new userdetail("usama","faisal","10","3441802958");
// console.log(result);
// console.log(result.logme());
// console.log(result.userno());
// console.log(result instanceof userdetail);


//                                static keyword

// class user {
//     constructor(name){
//         this.name = name;
//     }
//     logme(){
//         return (`${this.name}`);
        
//     }

//     static login (){
//         return ("your name is usama");
        
//     }
// }

// class userdetail extends user{
//     constructor(name,fname, roll_no, no){
//         super(name)
//         this.fname = fname;
//         this.roll_no = roll_no;
//         this.no = no
//     }

//     userno (){
//         return (`user no is : ${this.no}`);  
//     }
// }

// let result = new userdetail("usama","faisal","10","3441802958");
// console.log(result);
// console.log(result.logme());
// console.log(result.login());



//                             laxical scoping / cloures

// function outer(){
//     let name = "usama";
//     function inner(){
//         console.log(name);
        
//     }
//     inner()
// }
// outer();



// function outer(){
//     let name = "usama";
//     function inner(){
//         console.log(`First name : ${name}`);   
//     }
//     function innertwo(){
//         console.log(`Second name : ${name}`);
        
//     }
//     inner()
//     innertwo()
// }
// outer();


//                                     cloures

function outer(){
    let name = "usama";
    function inner(){
        console.log(name);
        
    }
    return inner()
}

// outer()


console.log(outer());
















