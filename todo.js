const todo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  fetch(url)
    .then((res) => res.json())
    .then((data) => showPost(data));
};
const showPost = (items) => {
  const creatContainer = document.getElementById("todo-container");
  creatContainer.innerHTML = "";

  items.forEach((todo) => {
    const creatPost = document.createElement("p");
    // {
    // "userId": 1,
    // "id": 1,
    // "title": "delectus aut autem",
    // "completed": false

    creatPost.innerHTML = `<div>
    ${todo.completed == true ? `Yes` : `No`}
    <br>
  
    </div>`;

    creatContainer.appendChild(creatPost);
  });
};
