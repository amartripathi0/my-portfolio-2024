"use client";
import React, { useEffect, useState } from "react";

function CustomCursor() {
  const [currentCursorPos, setCurrentCursorPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCurrentCursorPos({ x: e.clientX - 15, y: e.clientY - 15});
    });

    return window.removeEventListener("mousemove", (e) => {
      setCurrentCursorPos({ x: e.clientX, y: e.clientY });
    });

    
  }, [setCurrentCursorPos]);

  return <div  
  style={{
    left : currentCursorPos.x,
    top : currentCursorPos.y
  }}
  className={`bg-purple-700 h-4 w-4 rounded-full z-[9999] blur-xs backdrop-blur-lg fixed  transition-transform translate-x-${currentCursorPos.x} translate-y-${currentCursorPos.y} opacity-70 ease-in-out`} />;
}

export default CustomCursor;
