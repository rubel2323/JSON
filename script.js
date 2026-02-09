const students = {
  name: "John",
  age: 21,
  ocupation: "student",
  location: "New York",
};
const studentsJSON = JSON.stringify(students);
console.log(studentsJSON);
const studentObj = JSON.parse(studentsJSON);
console.log(studentObj);
