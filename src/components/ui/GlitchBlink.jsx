import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const GlitchBlink = ({ text, color = "#39ff14" }) => {
  const letters = text.split("");

  // phase: "initial" -> whole word glitches together on mount
  //        "random"  -> after that, one random letter blinks every ~3s
  const [phase, setPhase] = useState("initial");
  const [blinkIndex, setBlinkIndex] = useState(null);
  const [blinkKey, setBlinkKey] = useState(0);

  // Move to random-blink phase after the initial glitch finishes
  useEffect(() => {
    const t = setTimeout(() => setPhase("random"), 1200);
    return () => clearTimeout(t);
  }, []);

  // Every 3s, pick a new random letter to blink
  useEffect(() => {
    if (phase !== "random") return;
    const interval = setInterval(() => {
      setBlinkIndex(Math.floor(Math.random() * letters.length));
      setBlinkKey((k) => k + 1); // forces remount so the animation replays
    }, 3000);
    return () => clearInterval(interval);
  }, [phase, letters.length]);

  return (
    <span>
      {letters.map((letter, index) => {
        const isInitial = phase === "initial";
        const isRandomBlink = phase === "random" && index === blinkIndex;

        return (
          <motion.span
            // key changes only for the actively-blinking letter,
            // forcing framer-motion to replay the animation each time
            key={isRandomBlink ? `${index}-${blinkKey}` : index}
            animate={
              isInitial || isRandomBlink
                ? { opacity: [1, 0, 1, 0, 1] }
                : { opacity: 1 }
            }
            transition={
              isInitial
                ? {
                    duration: 0.5,
                    repeat: 1,
                    repeatType: "loop",
                    delay: Math.random() * 0.4,
                  }
                : isRandomBlink
                ? { duration: 0.25, repeat: 1 }
                : { duration: 0 }
            }
            style={{
              display: "inline-block",
              color: isRandomBlink ? color : "inherit",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </span>
  );
};