import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = ({ markdown, setMarkdown }) => {
  return (
    <div className="editor-container">
      <textarea
        className="markdown-input"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type Markdown here..."
      />
      <div className="markdown-preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
