import "./DrawingPanel.css";
import Row from "../Row/Row";

function DrawingPanel(props: {
  selectedColor: string;
  width: number;
  height: number;
}) {
  let rows = [];

  for (let i = 0; i < props.height; i++) {
    rows.push(
      <Row
        key={i}
        width={props.width}
        selectedColor={props.selectedColor}
      ></Row>
    );
  }

  return (
    <div id="drawingPanel">
      <div id="pixels">
        <div id="pixels-inner">{rows}</div>
      </div>
    </div>
  );
}

export default DrawingPanel;
