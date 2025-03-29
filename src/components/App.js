import React, { useState, useEffect } from "react";
import MarkdownEditor from "./components/MarkdownEditor";
import "./../styles/App.css";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className="markdown-container">
      <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
    </div>
  );
};

export default App;
