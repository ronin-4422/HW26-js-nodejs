const person = require('./index')
class Teacher {
  constructor(subject) {
    // super(name, age, gendor, interests);
    this.subject = subject;
  }
  hello(who) {
    console.log(`My name is: ${person.name}, my age is:${person.age}, my gendor is:${person.gendor}, my interests:${person.interests}, Subject: ${who.subject}  `);
}
}

exports.Teacher = Teacher;
