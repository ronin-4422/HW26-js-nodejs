const teacher = require('./person/teacher');
const student = require('./person/student');
let teach = new teacher.Teacher('Vic', 35, 'male', 'football', 'Math');
let stude = new student.Student('Selina', 23, 'female', 'books')
// let teach = new person.Teacher();


console.log(teach, stude)
