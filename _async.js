const information = () => {
  const resources = "https://jsonplaceholder.typicode.com/posts/1";
  const res = fetch(resources);
  //   const data = res.json();

  console.log(res);
  console.log("hello this is shikha");
};
information();
