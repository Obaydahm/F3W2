import React from "react";
import "../App.css";
import upper, { text1, text2, text3 } from "./file1";

function App() {
  return (
    <div>
      {/* File */}
      <div className="box">
        <h2>File 1</h2>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{upper("please uppercase me")}</p>
      </div>
    </div>
  );
}

export default App;
