const url = async () => {
  const link = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  const data = await link.json();
  console.log(data);

  console.log("hello");
  console.log(true);
};
url();
