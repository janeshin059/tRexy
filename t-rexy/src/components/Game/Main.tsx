import { useEffect, useRef, useState } from "react";
import Background from "./Background/Background";
import Dino from "./Dino/Dino";
import Obstacle from "./Obstacle/Obstacle";
import "./Main.css";

function Main() {
  const [isStart, setIsStart] = useState(false);
  const [result, setResult] = useState(0);
  const [time, setTime] = useState(0);
  const [showObstacle, setShowObstacle] = useState(false);
  const interval = useRef<any>();

  const handleStart = (e: any) => {
    if (e.keyCode === 32) {
      setIsStart(true);
    }
  };

  /*Start game when press Space bar */
  useEffect(() => {
    document.addEventListener("keydown", handleStart);
    return () => {
      document.removeEventListener("keydown", handleStart);
    };
  }, [isStart]);

  useEffect(() => {
    const obstacle = document.querySelector("#obstacle");
    // if(!interval.current) {
    // 	return;
    // }
    if (isStart) {
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
  }, [time, isStart]);

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
        alert("game over");
        setIsStart(false);
        setTime(0);
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="description">
        {!isStart && <>welcome.press click to start</>}
      </div>
      <div className="game">
        <Background></Background>
        <Dino></Dino>

        <Obstacle showObstacle={showObstacle}></Obstacle>
      </div>
      <div className="current-score">HI </div>
    </div>
  );
}

export default Main;
