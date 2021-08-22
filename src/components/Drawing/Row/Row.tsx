import './Row.css'
import Pixel from "../Pixel/Pixel";

function Row(props: {width:number, selectedColor: string}) {

	let pixels = [];
	for(let i = 0; i<props.width; i++){
		pixels.push(<Pixel key={i} selectedColor={props.selectedColor}></Pixel>)
	}

	return(
		<div className="row">{pixels}</div>
	)

}

export default Row;