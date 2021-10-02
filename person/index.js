class Person {
  constructor(name, age, gendor, interests) {
    this.name = name;
    this.age = age;
    this.gendor = gendor;
    this.interests = interests;
  }
  hello(who) {
    // console.log(`My name is: ${who.name}, my age is:${who.age}, my gendor is:${who.gendor}, my interests:${who.interests}`);
}
}
exports.Person = Person;
