import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    setIsPointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!isPointer) return;

    const move = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    const loop = () => {
      setPos((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.15,
        y: prev.y + (targetRef.current.y - prev.y) * 0.15,
      }));
      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafRef.current);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [isPointer]);

  if (!isPointer) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: pos.x - 4, y: pos.y - 4 }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#141412]" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: pos.x - 20, y: pos.y - 20 }}
        animate={{ scale: isHovering ? 1.4 : 1, opacity: isHovering ? 1 : 0.35 }}
        transition={{ duration: 0.25 }}
      >
        <div className="w-10 h-10 rounded-full border border-[#B8622C]" style={{ borderWidth: "1.5px" }} />
      </motion.div>
    </>
  );
}
