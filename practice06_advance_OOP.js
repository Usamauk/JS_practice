//                                     OOP

// function usama(username , f_name ) {
//     this.username =  username;
//     this.f_name = f_name;
// }


// let chai =  new usama("usama","faisal");
// console.log(chai);


//                              prototype 

// function userdetail(name , fname , no , address) {
//     this.name = name;
//     this.fname = fname;
//     this.no = no;
//     this.address = address;
    
// }

// userdetail.prototype.print = function() {
//     console.log("create print function in prototype");
// }
// userdetail.prototype.user = function(){
//     console.log("user function in prototype");
// }

// let result = new userdetail("usama","faisal","3441802958","house no 101")
// console.log(result);
// result.user()
// result.print()


//                                      call / this
// function user (name){
//     this.name = name;
// }

// function name(name , fname , no) {
//     user.call(this, name);
//     this.fname = fname;
//     this.no = no;
// }

// let result = new name("usama","fasisl","3441802958")
// console.log(result);


//                                class constractor

class name{
    constructor (name , fname , no){
        this.name = name;
        this.fname = fname;
        this.no = no;
    }

    




}



