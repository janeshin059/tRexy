import ObstacleImg from '../../../assets/obstacle.png';
import './Obstacle.css';

const UPDATE = 20;
const initLeft = 1000 - 20;
const moveWidth = 1000 - 50;
const speed = 10;

function Obstacle(props: {showObstacle?: boolean}) {


	return (
		<img id="obstacle" src={ObstacleImg}/>
	)

}
export default Obstacle;