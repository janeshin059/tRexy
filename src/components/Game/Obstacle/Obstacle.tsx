import ObstacleImg from "../../../assets/obstacle.png";
import Obstacle2Img from "../../../assets/block.png";
import "./Obstacle.css";

function Obstacle() {
  return (
    <>
      <img id="obstacle" src={ObstacleImg} alt="obstacle"/>
      <img id="obstacle2" src={Obstacle2Img} alt="obstacle2"/>
    </>
  );
}
export default Obstacle;
