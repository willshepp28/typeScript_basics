interface UserInerface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInerface {

    // classes can have properties and methods
     name: string;
    email: string;
     age: number;

    // inside of a class you have a constructor
    // when you create a user this is going to run
    constructor(name:string ,email: string, age:number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: ' + this.name);
    }

    register(){
        console.log(this.name + " is now registered" )
    }

    payInvoice(){
        console.log(this.name + " has paid invoice");
    }
}

let john = new User('John Doe', 'johng@outlook.com', 23);

console.log(john.age);

john.register();



/* Access Modifiers

1. private - cant be accessed from outside of the class
2. protected - means we cant access it from outside the class
but can access it from any class that inherits from the protected one
3. public - can be access from anywhere

*/




//inheritance
class Member extends User {
    id: number;

    constructor(id:number, name:string, email:string, age:number ) {
        // must contain a super() call
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}


// create a member
let mike: User = new Member(1, 'mike jones', 'whomikejohns@gmail.com', 32);
mike.payInvoice();