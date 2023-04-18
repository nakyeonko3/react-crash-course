import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post name="ganyu" src="ganyu_src" />
      <Post name="keqing" src="keqing_src" />
      <Post name="azusa" src="azusa_src" />
    </main>
  );
}

export default App;
