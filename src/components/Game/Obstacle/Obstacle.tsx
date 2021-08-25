import ObstacleImg from "../../../assets/obstacle.png";
import Obstacle2Img from "../../../assets/block.png";
import "./Obstacle.css";

function Obstacle() {
  return (
    <>
      <img id="obstacle" src={ObstacleImg} />
      <img id="obstacle2" src={Obstacle2Img} />
    </>
  );
}
export default Obstacle;
