import ObstacleImg from '../../../assets/obstacle.png';
import Obstacle2Img from '../../../assets/block.png';
import './Obstacle.css';

function Obstacle(props: {showObstacle?: boolean}) {

	return (
		<>
		<img id="obstacle" src={ObstacleImg}/>
		<img style={{width: '50px', height:'30px'}}id="obstacle2" src={Obstacle2Img}/>
		</>
	)

}
export default Obstacle;