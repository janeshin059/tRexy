import { useEffect, useRef, useState } from "react";
import Background from "./Background/Background";
import Dino from "./Dino/Dino";
import Obstacle from "./Obstacle/Obstacle";
import "./Main.css";
import Restart from "../../assets/restart.png";
import { useHistory } from "react-router-dom";
import PaletteImg from "../../assets/pixel_palette.png";
import DinoImg from "../../assets/dinosaur.png";

function Main(props: { isDefault: boolean }) {
  const [isStart, setIsStart] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const interval = useRef<any>();
  const history = useHistory();

  const handleStart = (e: any) => {
    if (e.keyCode === 32) {
      setIsStart(true);
      if (isGameOver) {
        setIsGameOver(false);
      }
    }
  };

  const handleReStart = (e: any) => {
    e.preventDefault();
    if (isGameOver) {
      setIsGameOver(false);
      setIsStart(true);
    }
  };
  /*Start game when press Space bar */
  useEffect(() => {
    document.addEventListener("keydown", handleStart);
    return () => {
      document.removeEventListener("keydown", handleStart);
    };
  }, [isStart, isGameOver]);

  useEffect(() => {
    const obstacle = document.querySelector("#obstacle");
    const obstacle2 = document.querySelector("#obstacle2");
    if (isStart && !isGameOver) {
      obstacle?.classList.add("move");
      obstacle2?.classList.add("move-2");

      interval.current = setInterval(() => {
        setTime(time + 0.02);
        checkGameOver();
      }, 10);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [time, isStart, isGameOver]);

  const checkGameOver = () => {
    const dino = document.querySelector("#dino");
    const obstacle = document.querySelector("#obstacle");
    const obstacle2 = document.querySelector("#obstacle2");

    if (dino && obstacle && obstacle2) {
      const dinoTop = parseInt(getComputedStyle(dino).getPropertyValue("top"));
      const obstacleLeft = parseInt(
        getComputedStyle(obstacle).getPropertyValue("left")
      );

      const obstacle2Left = parseInt(
        getComputedStyle(obstacle2).getPropertyValue("left")
      );
      if (
        (dinoTop >= 90 && obstacleLeft < 125 && obstacleLeft > 65) ||
        (dinoTop >= 90 && obstacle2Left < 120 && obstacle2Left > 65)
      ) {
        alert("Game over");
        setIsStart(false);
        setIsGameOver(true);
        obstacle?.classList.remove("move");

        obstacle2?.classList.remove("move-2");
        setTime(0);
      }
    }
  };

  const handleDrawingClick = () => {
    history.push("/drawing");
  };

  const handleDefaultModeClick = () => {
    history.push("/trex");
  };

  return (
    <div className="wrapper">
      <div className="description-wrapper">
        <p className="title">T-Rex</p>
        <div className="description">
          Press <span className="bold">space bar</span> to start. Use the
          <span className="bold"> up arrow key</span> to jump.
        </div>
      </div>
      <div className="score-wrapper">
        <div className="current-score">
          {parseInt(((Math.round(time * 1e2) / 1e2) * 10).toString())}
        </div>
      </div>
      <div className="game">
        {isGameOver && (
          <img className="restart" src={Restart} onClick={handleReStart}></img>
        )}
        <Background isStart={isStart}></Background>
        <Dino isDefault={props.isDefault}></Dino>
        <Obstacle></Obstacle>
      </div>

      <div className="gamemode-wrapper">
        {!isStart && (
          <button onClick={handleDrawingClick} className="draw-btn">
            <img className="palette" src={PaletteImg}></img>
          </button>
        )}

        {(!isStart && !props.isDefault) && (
          <button onClick={handleDefaultModeClick} className="dino-btn">
            <img src={DinoImg}></img>
          </button>
        )}
      </div>
    </div>
  );
}

export default Main;
