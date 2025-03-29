'use strict';
///////////// Video 005 Constructor function and the new operator

const Person = function (name, yearOfBirth) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
};

const Jonas = new Person('Jonas', 1990);

console.log(Jonas);

console.log(Jonas instanceof Person);

///////////// Video 006 Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.yearOfBirth);
};

Jonas.calcAge();

console.log(Jonas.__proto__);

console.log(Person.prototype.isPrototypeOf(Jonas));

console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(Jonas.species);

console.log(Jonas.hasOwnProperty('name'));

console.log(Jonas.hasOwnProperty('species'));

///////////// Video 008 prototypal inheritance f buil in objects

const Arr = [1, 2, 3];

console.log(Arr.__proto__);
console.log(Arr.__proto__ === Array.prototype);

////// Adding new method to the built in Array object:

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(Arr.unique());

///////////// Video 010 Classes in ES6

class PersonCL {
  constructor(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
  }

  calcAge() {
    return 2037 - this.yearOfBirth;
  }
}

const Jessica = new PersonCL('Jessica', 2010);

console.log(Jessica);
