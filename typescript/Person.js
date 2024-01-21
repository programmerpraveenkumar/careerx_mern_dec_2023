var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.printDetails = function () {
        console.log(this.name, this.mobile);
    };
    return Person;
}());
var person = new Person();
person.name = "dfgefwe"; //string variable
person.mobile = 54545;
//person.mobile= "sdsdws";//error
person.printDetails();
