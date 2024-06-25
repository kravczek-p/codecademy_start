const person = {
    firstName: 'Elizabeth',
    lastName: 'Harmon',
    age: 22,
    eyeColor: 'Hazel',
    greeting: function () {
        return `Hi, I am ${this.firstName} ${this.lastName}.`;
    },
};
console.log(person.firstName);
//----------------------------------
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

var car1 = new Car('Chevy', 'Blazer', 2015);
var car2 = new Car('Ford', 'Taurus', 2018);

console.log('Car 1 is a ' + car1.year + ' ' + car1.make + ' ' + car1.model);
// Output: Car 1 is a 2015 Chevy Blazer

console.log('Car 2 is a ' + car2.year + ' ' + car2.make + ' ' + car2.model);
// Output: Car 2 is a 2018 Ford Taurus