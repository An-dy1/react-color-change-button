import React, { useState } from "react";
import "./App.css";
import ColorChangeButton from "./ColorChangeButton";

function App() {
  const [color, setColor] = useState("");
  return (
    <div className={"react-root " + color}>
      <div className="centered">
        <h1>Color picker</h1>
        <ColorChangeButton
          color="violet"
          setColor={setColor}
        ></ColorChangeButton>
        <ColorChangeButton color="plum" setColor={setColor}></ColorChangeButton>
        <ColorChangeButton
          color="purple"
          setColor={setColor}
        ></ColorChangeButton>
      </div>
    </div>
  );
}

export default App;
