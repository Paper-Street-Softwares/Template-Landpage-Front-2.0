import React, { useState } from "react";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import imgProductExample from "../../assets/imgs/products/hth/cloros/baldeCloro.png";
import imgProductExample2 from "../../assets/imgs/products/hth/cloros/auxiliares.png";

export default function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
  };

  return (
    <div className="full">
      <div className="bg-quinary content py-[26px] phone3:py-[48px] flex flex-row">
        <div className="flex flex-col items-start justify-between desktop1:flex-row font-mainFont">
          <div className="bg-white w-full desktop1:w-[18%] mb-[32px] flex justify-around desktop1:flex-col p-2 phone3:p-4 rounded-[10px]">
            <h3 className="p-2 font-semibold text-paragraph2 desktop1:text-left desktop1:text-title1 text-secondary">
              Filtrar por categoria
            </h3>
            <button
              className={`transition bg-red-700 hover:bg-red-900 desktop1:my-[4px] text-white rounded-[10px] text-paragraph1 tablet1:text-paragraph3 text-center px-2 mx-1 phone3:p-2 ${
                activeButton === "all" ? "bg-red-900" : ""
              }`}
              onClick={() => handleButtonClick("all")}
            >
              Mostrar todos
            </button>
            <button
              className={`transition bg-red-700 hover:bg-red-900 desktop1:my-[4px] text-white rounded-[10px] text-paragraph1 tablet1:text-paragraph3 text-center px-2 mx-1 phone3:p-2 ${
                activeButton === "cloros" ? "bg-red-900" : ""
              }`}
              onClick={() => handleButtonClick("cloros")}
            >
              Cloros
            </button>
            <button
              className={`transition bg-red-700 hover:bg-red-900 desktop1:my-[4px] text-white rounded-[10px] text-paragraph1 tablet1:text-paragraph3 text-center px-2 mx-1 phone3:p-2 ${
                activeButton === "auxiliares" ? "bg-red-900" : ""
              }`}
              onClick={() => handleButtonClick("auxiliares")}
            >
              Auxiliares
            </button>
          </div>
          <div className="flex flex-wrap items-start justify-between w-full gap-7 desktop1:w-[76%]">
            {(selectedCategory === "cloros" || selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={imgProductExample}
                  code="Esse é cloro"
                  description="It is a long established fact that a reader "
                  button1Label="Baixar Ficha FISPQ"
                  button1Link="#"
                  category="cloros"
                />
                <ImgCodeDescButtonCard
                  img={imgProductExample}
                  code="Esse é cloro"
                  description="It is a long established fact that a reader will be distracted by the readable content."
                  button1Label="Baixar Ficha FISPQ"
                  button1Link="#"
                  category="cloros"
                />
                <ImgCodeDescButtonCard
                  img={imgProductExample}
                  code="Esse é cloro"
                  description="It is a long established fact that a reader will be."
                  button1Label="Baixar Ficha FISPQ"
                  button1Link="#"
                  category="cloros"
                />
              </>
            )}
            {(selectedCategory === "auxiliares" ||
              selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={imgProductExample2}
                  code="Auxiliar"
                  description="It is a long established."
                  button1Label="Baixar Ficha FISPQ"
                  button1Link="#"
                  category="auxiliares"
                />
                <ImgCodeDescButtonCard
                  img={imgProductExample2}
                  code="Auxiliar"
                  description="It is a long established fact."
                  button1Label="Baixar Ficha FISPQ"
                  button1Link="#"
                  category="auxiliares"
                />
                <ImgCodeDescButtonCard
                  img={imgProductExample2}
                  code="Auxiliar"
                  description="It is a long established fact that a reader will be distracted by the."
                  button1Label="Baixar Ficha FISPQ"
                  button1Link="#"
                  category="auxiliares"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
