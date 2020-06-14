import React from "react";
import "./styles.css";
import List from "./Components/List.js";
import Header from "./Components/Header.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}
