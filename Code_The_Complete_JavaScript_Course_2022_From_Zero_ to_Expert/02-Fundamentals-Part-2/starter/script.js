"use strict";

const jonasObject = {
  firstname: "Jonas",
  birthYear: 1998,

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
};

console.log(jonasObject);

console.log(jonasObject.calcAge());

console.log(jonasObject.age);

console.log("test prettier");

console.log("test  live server");
