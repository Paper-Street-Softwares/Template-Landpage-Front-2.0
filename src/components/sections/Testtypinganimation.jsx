import React from "react";
import TypingAnimation from "../sectionElements/TypingAnimation";
const Teste = () => {
  const texts = [
    "Olá, Paper",
    "Se olhar direitinho",
    "Acho que consegui!",
    "Posso por quantos textos eu quiser",
  ];

  return <TypingAnimation texts={texts} />;
};

export default Teste;
