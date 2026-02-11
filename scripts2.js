const loadPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPosts(data))
    .catch((error) => console.log(error));
};
const displayPosts = (posts) => {
  const postContainer = document.getElementById("div-posts");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.innerHTML = `   <div class="post-card">
        <h2>${post.title}</h2>
        <p>
     ${post.body}
        </p>
      </div>`;
    postContainer.appendChild(postCard);
  });
};
loadPosts();
