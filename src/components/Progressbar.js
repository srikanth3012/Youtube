import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Simulate the transition from 0% to 100% width
    const transitionDuration = 2000; // 2 seconds
    const interval = 10;
    const step = 100 / (transitionDuration / interval);

    const timer = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevWidth + step;
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative w-full h-1 bg-gray-200 rounded-full">
      <div
        className="absolute h-1 bg-red-900 rounded-full transition: width 0.5s ease;"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
