"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { question: "What is Next.js?", answer: "Next.js is a React framework for building fast web applications." },
  { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for creating custom designs." },
  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsFlipped(false);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="relative w-[600px] h-96 flex items-center justify-center">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="relative w-96 h-64"
            style={{ perspective: 1000 }}
            onClick={flipCard}
          >
            <motion.div
              className={`absolute inset-0 flex items-center justify-center bg-white border border-gray-300 rounded-lg ${isFlipped ? "rotate-y-180" : ""}`}
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                position: "absolute",
                width: "100%",
                height: "100%",
                transition: "transform 0.6s",
              }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
              <h3 className="text-xl font-bold">{cards[currentIndex].question}</h3>
            </motion.div>

            <motion.div
              className={`absolute inset-0 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg rotate-y-180`}
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                position: "absolute",
                width: "100%",
                height: "100%",
                transition: "transform 0.6s",
              }}
              animate={{ rotateY: isFlipped ? 0 : -180 }}
            >
              <p className="text-lg">{cards[currentIndex].answer}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white bg-black bg-opacity-50 rounded-full p-2"
      >
        &#9664;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
      >
        &#9654;
      </button>
    </div>
  );
}
