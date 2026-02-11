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
const postData = (posts) => {
  console.log("Value of 'posts':", posts);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      console.log("Fetched posts:", json);
      displayPosts(json);
    });

  console.log("Post button clicked");
};
// function to display the posts in the html
const displayPosts = (posts) => {
  const postsContainer = document.getElementById("posts-container");
  console.log("Displaying posts:", postsContainer);
  // iterate over the posts and create html elements for each post
  posts.forEach((post) => {
    console.log(post.id);

    // create the html elements
    const li = document.createElement("li");
    li.innerText = post.id;
    // append the li to the ul
    postsContainer.appendChild(li);
  });
};
