import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Define a function that runs every time the mouse moves
    function handleMouseMove(e) {
      // Update state with the current mouse cursor position (x and y coordinates)
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    // Add an event listener to track mouse movement on the entire window
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup: remove the event listener when the component unmounts
    // or before re-running this effect (prevents memory leaks)
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
    </section>
  );
}
