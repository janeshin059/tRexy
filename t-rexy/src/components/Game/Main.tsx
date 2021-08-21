import { useEffect, useRef, useState } from "react";
import Background from "./Background/Background";
import Dino from "./Dino/Dino";
import Obstacle from "./Obstacle/Obstacle";
import "./Main.css";
import Restart from '../../assets/restart.png';



function Main() {
  const [isStart, setIsStart] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const [showObstacle, setShowObstacle] = useState(false);
  const interval = useRef<any>();

  const handleStart = (e: any) => {
    if (e.keyCode === 32) {
      setIsStart(true);
      if(isGameOver){
        setIsGameOver(false);
        }
    }
  };

  const handleReStart = (e:any) => {
    e.preventDefault();
    if(isGameOver){
      setIsGameOver(false);
      setIsStart(true);
    }
  }
  /*Start game when press Space bar */
  useEffect(() => {
    document.addEventListener("keydown", handleStart);
    return () => {
      document.removeEventListener("keydown", handleStart);
    };
  }, [isStart, isGameOver]);

  useEffect(() => {
    const obstacle = document.querySelector("#obstacle");
    if (isStart && !isGameOver) {
      obstacle?.classList.add("move");
      interval.current = setInterval(() => {
        if (Math.floor(time) % 2 == 1) {
          setShowObstacle(true);
        } else {
          setShowObstacle(false);
        }

        setTime(time + 0.02);
        checkGameOver();
      }, 20);
    }

    return () => {
      clearInterval(interval.current);
      
    };
  }, [time, isStart, isGameOver]);

  const checkGameOver = () => {
    const dino = document.querySelector("#dino");
    const obstacle = document.querySelector("#obstacle");

    if (dino && obstacle) {
      const dinoTop = parseInt(getComputedStyle(dino).getPropertyValue("top"));
      const obstacleLeft = parseInt(
        getComputedStyle(obstacle).getPropertyValue("left")
      );
      console.log(dinoTop, obstacleLeft);

      if (dinoTop >= 90 && obstacleLeft < 125 && obstacleLeft > 60) {
        alert("Game over");
        setIsStart(false);
        setIsGameOver(true);
        obstacle?.classList.remove("move");
        setTime(0);
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="description-wrapper">
			<p className="title">T-Rex</p>
			<div className="description">Press <span className="bold">space bar</span> to start. Use the <span className="bold">up arrow key</span>  to jump.</div>
      </div>
      <div className="score-wrapper">
      <div className="current-score">HI </div>
      <div className="current-score">{ parseInt(((Math.round(time * 1e2) / 1e2) * 10).toString())} </div>
      </div>
      <div className="game">
       {isGameOver && <img className="restart" src={Restart} onClick={handleReStart}></img>}
        <Background isStart={isStart}></Background>
        <Dino></Dino>

        <Obstacle showObstacle={showObstacle}></Obstacle>
      </div>
     
    </div>
  );
}

export default Main;
