import React, { useState, useEffect } from "react";
import Image from "next/image";

const PixelCat = () => {
  const [position, setPosition] = useState({ top: "80%", left: "10%" });
  const [direction, setDirection] = useState(1); // 1 = facing right, -1 = facing left
  const [isClient, setIsClient] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    setIsClient(true);

    // Check localStorage for cat preference
    const saved = localStorage.getItem("catEnabled");
    if (saved !== null) {
      setIsEnabled(saved === "true");
    }

    // Listen for toggle events from dashboard
    const handleToggle = (e) => {
      setIsEnabled(e.detail.enabled);
    };

    window.addEventListener("catToggle", handleToggle);

    return () => {
      window.removeEventListener("catToggle", handleToggle);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const moveCat = () => {
      setPosition((prev) => {
        const currentTop = parseFloat(prev.top);
        const currentLeft = parseFloat(prev.left);

        // Move by a random amount between -300px and +300px
        const maxMove = 300;
        const deltaX = (Math.random() - 0.5) * 2 * maxMove;
        const deltaY = (Math.random() - 0.5) * 2 * maxMove;

        let newTop = currentTop + deltaY;
        let newLeft = currentLeft + deltaX;

        // Boundary checks
        const maxTop = window.innerHeight - 100;
        const maxLeft = window.innerWidth - 100;

        if (newTop < 0) newTop = 0;
        if (newTop > maxTop) newTop = maxTop;
        if (newLeft < 0) newLeft = 0;
        if (newLeft > maxLeft) newLeft = maxLeft;

        setDirection(deltaX > 0 ? -1 : 1);

        return {
          top: `${newTop}px`,
          left: `${newLeft}px`,
        };
      });
    };

    // Move periodically
    const interval = setInterval(moveCat, 5000); // More frequent but shorter walks looks more natural

    return () => clearInterval(interval);
  }, []);

  if (!isClient || !isEnabled) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        transition: "top 4s ease-in-out, left 4s ease-in-out",
        zIndex: 50,
        pointerEvents: "none",
        transform: `scaleX(${direction})`,
      }}
      className="w-8 h-8 md:w-12 md:h-12"
    >
      <Image
        src="/cat.png"
        alt="Stray Cat"
        layout="fill"
        objectFit="contain"
        className="drop-shadow-lg"
      />
    </div>
  );
};

export default PixelCat;
