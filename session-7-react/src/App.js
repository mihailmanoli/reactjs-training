import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [showChild, setShowChild] = useState(true);
  
  const show = () => setShowChild(true);
  const hide = () => setShowChild(false);
  
  console.log("state", useState());
  
  console.log("APP render");
  console.log("------------");

  return (
    <div className="App">
      <button onClick={show}>Show Counter</button>
      <button onClick={hide}>Hide Counter</button>
      {showChild && <Counter />}
    </div>
  );
}

export default App;
