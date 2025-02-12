'use client'
import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust breakpoint as needed
    };

    // Initial check
    checkScreenSize();

    // Listen for window resize
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);
    return () => document.removeEventListener("mousemove", updatePosition);
  }, [isLargeScreen]);

  if (!isLargeScreen) return null; // Hide cursor on smaller screens

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        width: "32px",
        height: "32px",
        backgroundImage: "url('/images/microphone.png')",
        backgroundSize: "cover",
      }}
    />
  );
};

export default Cursor;

