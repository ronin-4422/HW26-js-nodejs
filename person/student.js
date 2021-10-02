const person = require('./index')
class Student {
  constructor() {
    // super(name, age, gendor, interests);
  }
  hello() {
    console.log(`My name is: ${person.name}, my age is:${person.age}, my gendor is:${person.gendor}, my interests:${person.interests} `);
}
}

exports.Student = Student; 
console.log(module);