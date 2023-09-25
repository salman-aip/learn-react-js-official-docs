"use client";

import { useEffect, useRef, useState } from "react";
import StopWatch from "./stopwatch";
import DOMManipulationRef from "./dom-manipulaion-ref";
import VideoPlayer from "./video-paying-ref";

export default function UseRefPage() {
  const intervalRef = useRef(0);
  let inputRef = useRef(0);

  let myValue = 10;

  useEffect(() => {
    console.log("render");
  }, [inputRef, myValue]);

  const handleClick = () => {
    inputRef.current = inputRef.current + 1;
    console.log("clicked " + inputRef.current + " times");
    myValue = myValue + 1;
    console.log(myValue);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white text-black h-screen">
        <button onClick={handleClick}>click me!</button>
        <h1 className="text-5xl">{inputRef.current}</h1>
        <h1 className="text-5xl">{myValue}</h1>

        <StopWatch />

        <DOMManipulationRef />

        <VideoPlayer />
      </div>
    </>
  );
}
