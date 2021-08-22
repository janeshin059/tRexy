import { useState } from "react";
import "./Editor.css";
import { CirclePicker } from "react-color";
import DrawingPanel from "../DrawingPanel/DrawingPanel";
import { useHistory } from "react-router-dom";

function Editor() {
  const [selectedColor, setColor] = useState("#f44336");
  const history = useHistory();

  function changeColor(color: any) {
    setColor(color.hex);
  }
  const handleGoBack = () => {
    history.push("/");
  };

  return (
    <div id="editor">
      {/* <h1>Pixel Editor</h1> */}
      <CirclePicker
        color={selectedColor}
        onChangeComplete={changeColor}
      ></CirclePicker>
      <DrawingPanel selectedColor={selectedColor} width={15} height={15} />
      <button className="clear-btn" onClick={handleGoBack}>
        Go back
      </button>
      <button className="continue-btn">Done</button>
    </div>
  );
}

export default Editor;
