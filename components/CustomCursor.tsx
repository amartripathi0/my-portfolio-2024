"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function CustomCursor() {
  const [currentCursorPos, setCurrentCursorPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCurrentCursorPos({ x: e.clientX - 10, y: e.clientY - 10 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
      style={{
        transform: `translateX(${currentCursorPos.x}px) translateY(${currentCursorPos.y}px)`,
        transition: "transform 0.3s linear",
      }}
      className={`max-sm:hidden bg-purple-700 p-2 rounded-full z-[9999] drop-shadow-glow blur-[1px] fixed left-0 top-0 pointer-events-none mix-blend-screen`}
    />
  );
}

export default CustomCursor;
