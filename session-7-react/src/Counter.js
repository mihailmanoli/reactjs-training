import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [comments, setComments] = useState([]);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  
  function getComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((resp) => resp.json())
      .then((comm) => setComments(comm))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    console.log("component did mount");
    getComments();
    
    return () => {
      console.log("component will unmount");
    };
  }, []);

  const commentsList = comments.map((c) => <li key={c.id}>{c.email}</li>);

  console.log("RENDER");
  console.log("------------");
  return (
    <>
      <div>Counter value: {counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <ul>{commentsList}</ul>
    </>
  );
}

export default Counter;
