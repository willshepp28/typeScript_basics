var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    // inside of a class you have a constructor
    // when you create a user this is going to run
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " has paid invoice");
    };
    return User;
}());
var john = new User('John Doe', 'johng@outlook.com', 23);
console.log(john.age);
john.register();
/* Access Modifiers

1. private - cant be accessed from outside of the class
2. protected - means we cant access it from outside the class
but can access it from any class that inherits from the protected one
3. public - can be access from anywhere

*/
//inheritance
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = 
        // must contain a super() call
        _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
// create a member
var mike = new Member(1, 'mike jones', 'whomikejohns@gmail.com', 32);
mike.payInvoice();
