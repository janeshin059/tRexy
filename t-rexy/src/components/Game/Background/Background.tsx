import { useEffect, useRef, useState } from "react";
import HorizonImg from "../../../assets/horizon.jpg";

const UPDATE = 150;
const SPEED = 10;

function Background() {
  const interval: { current: NodeJS.Timeout | null } = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    return () => {
      clearInterval(interval.current as NodeJS.Timeout);
    };
  }, []);

  useEffect(() => {
    draw();
    moveBackGround();
    return () => {
      clearInterval(interval.current as NodeJS.Timeout);
    };
  }, [offset]);

  const draw = () => {
    const canvas = document.querySelector(
      "canvas#background"
    ) as HTMLCanvasElement;

    const ctx = canvas.getContext("2d");
    const img = new Image();

  	img.src = HorizonImg;
    img.onload = function () {

      ctx?.drawImage(
        img,
        offset,
        0,
        img.width - offset,
        img.height,
        0,
        0,
        img.width- offset,
        img.height
      );
      ctx?.drawImage(img, 0, 0, offset, img.height, img.width - offset, 0, offset, img.height); //이어서 그리기
    };

  };

  const moveBackGround = () => {
		const img = new Image();
		img.src = HorizonImg;

    interval.current = setInterval(() => {
      if (offset === img.width - SPEED) {
        setOffset(0);
      } else {
        setOffset(offset + SPEED);
      }
    }, UPDATE);
  };

  return (
    <div style={{ position: "absolute", top: '200px' }}>
      <canvas width="600px" height="400px" id="background"></canvas>
    </div>
  );
}

export default Background;
