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
////
const loadData = () => {
  console.log("Button clicked!");

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));
};
