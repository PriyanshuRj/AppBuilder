import React from "react";
import "./Editor.css";
import EditorCanvas from "./components/EditorComponents/Canvas";
import EditorPicker from "./components/EditorComponents/Picker";

const Editor = () => {



  return (
    <div className="flex relative h-full">
      <EditorCanvas />
      <EditorPicker />
    </div>
  );
};

export default Editor;
