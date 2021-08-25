import { useEffect, useState } from "react";
import DinoImg from "../../../assets/dinosaur.png";
import "./Dino.css";

function Dino(props: {isDefault:boolean}) {
  const [isJumpMode, setisJumpMode] = useState(false);
  
  useEffect(() => {
    document.addEventListener("keydown", handleJump);
    return () => {
      document.removeEventListener("keydown", handleJump);
    };
  }, []);

  const handleJump = (e: any) => {
		const dino = document.querySelector("#dino");
    if (!dino) {
      return;
    }
    if ((e.keyCode === 38 && !isJumpMode) || (e.keyCode === 32 && !isJumpMode)) {
      setisJumpMode(true);
      dino.classList.add("jump");
    }

    setTimeout(() => {
      dino.classList.remove("jump");
      setisJumpMode(false);
      console.log(isJumpMode);
    }, 1000);
  };

  const item = localStorage.getItem('recent-image') ? localStorage.getItem('recent-image')?.toString(): DinoImg
  return (
    <>
    {props.isDefault ? <img id="dino" src={DinoImg}></img> : <img id="dino" src={item}></img>}
    </>
  );
}

export default Dino;
