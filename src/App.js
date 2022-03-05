import React from "react";
import "./style.css";

export default function App() {

  const userInput = React.useRef()

  function handelChange(){
    alert(userInput.current.value)
  }

  return (
    <div>
      <input type='text' ref= {userInput}/>

      <button onClick={handelChange}>Submit</button>
    </div>
  );
}
