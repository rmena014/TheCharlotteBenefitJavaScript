import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "./TextEditor.css";

const TextEditor = (props) => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = cssCode;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [cssCode]);

  const runCode = (code) => {
    try {
      if (code === "") {
        console.clear();
        return;
      }
      eval(code);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editor-container">
      <AceEditor
        className="editor-box"
        mode="html"
        theme="monokai"
        value={htmlCode}
        onChange={setHtmlCode}
      />
      <AceEditor
        className="editor-box"
        mode="css"
        theme="monokai"
        value={cssCode}
        onChange={setCssCode}
      />
      <AceEditor
        className="editor-box"
        mode="javascript"
        theme="monokai"
        value={jsCode}
        onChange={(code) => {
          setJsCode(code);
          runCode(code);
        }}
      />
      <div className="preview" dangerouslySetInnerHTML={{ __html: htmlCode }} />
    </div>
  );
};

export default TextEditor;
