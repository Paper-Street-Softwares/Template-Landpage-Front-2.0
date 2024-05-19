import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = ({ texts }) => {
  const sequence = texts.reduce((acc, text) => {
    acc.push(text, 2000);
    return acc;
  }, []);

  sequence.push(() => {
    console.log("Sequence completed");
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">
        <TypeAnimation
          sequence={sequence}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
        />
      </h1>
    </div>
  );
};

export default TypingAnimation;
