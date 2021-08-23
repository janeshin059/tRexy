import { useState } from "react";
import "./Editor.css";
import { CirclePicker } from "react-color";
import DrawingPanel from "../DrawingPanel/DrawingPanel";
import { useHistory } from "react-router-dom";
import html2canvas from "html2canvas";

function Editor() {
  const [selectedColor, setColor] = useState("#f44336");
  const history = useHistory();

  function changeColor(color: any) {
    setColor(color.hex);
  }
  const handleGoBack = () => {
    history.push("/");
  };

  const capture = () => {
    html2canvas(document.getElementById('pixels-inner') as HTMLElement).then((canvas:HTMLCanvasElement) => {
      localStorage.setItem('recent-image',canvas.toDataURL('image/png'))
      //onSaveAs(canvas.toDataURL('image/png'),'image-download.png')
    })
    setTimeout(() => {
      history.push("/");
    },200)
   
  }

  const onSaveAs = ((uri:string, filename:string) => { //Download function
    let link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  })
  
  return (
    <div id="editor">
      <CirclePicker
        color={selectedColor}
        onChangeComplete={changeColor}
      ></CirclePicker>
      <DrawingPanel selectedColor={selectedColor} width={15} height={15} />
      <div className="buttons-wrapper">
      <button className="clear-btn" onClick={handleGoBack}>
        GO BACK
      </button>
      <button className="continue-btn" onClick={capture}>DONE</button>
      </div>
    </div>
  );
}

export default Editor;
