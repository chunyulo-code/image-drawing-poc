"use client";

import React, { useRef, useState } from "react";
import Canvas from "./Canvas";

export default function page() {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [color, setColor] = useState("#000000");

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
  return (
    <div className="w-full">
      <h1 className="text-xl text-center">React Drawing App</h1>

      <div className="">
        <span>Color Picker : </span>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="">
          <input
            type="button"
            className=""
            value="clear canvas"
            onClick={clearCanvas}
          />
        </div>
      </div>
      <div className="h-[500px]">
        <Canvas canvasRef={canvasRef} ctx={ctx} color={color} />
      </div>
    </div>
  );
}
