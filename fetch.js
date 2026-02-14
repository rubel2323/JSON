const latePassing = async () => {
  const link = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // .then((response) => response.json())
  // .then((json) => console.log(json));

  const res = await link.json();
  console.log(res);

  console.log("hello ,this is Rubel ");
  console.log("Rubel");
};
latePassing();
