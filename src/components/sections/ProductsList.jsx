import React, { useState } from "react";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import imgProductExample from "../../assets/imgs/products/hth/cloros/baldeCloro.png";
import imgProductExample2 from "../../assets/imgs/products/hth/cloros/auxiliares.png";

export default function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="full">
      <div className="bg-quinary content py-[26px] phone3:py-[48px] flex flex-row">
        <div className="flex flex-col items-start justify-between desktop1:flex-row font-mainFont">
          <div className="bg-white w-full desktop1:w-[18%] mb-[32px] flex justify-around desktop1:flex-col p-4 rounded-[10px]">
            <h3 className="p-2 font-semibold desktop1:text-left desktop1:text-title1 text-secondary">
              Filtrar por categoria
            </h3>
            <button
              className="transition bg-white hover:bg-neutral-200 rounded-[5px] text-paragraph3 text-left p-2"
              onClick={() => setSelectedCategory("all")}
            >
              Mostrar todos
            </button>
            <button
              className="transition bg-white hover:bg-neutral-200 rounded-[5px] text-paragraph3 text-left p-2"
              onClick={() => setSelectedCategory("cloros")}
            >
              Cloros
            </button>
            <button
              className="transition bg-white hover:bg-neutral-200 rounded-[5px] text-paragraph3 text-left p-2"
              onClick={() => setSelectedCategory("auxiliares")}
            >
              Auxiliares
            </button>
          </div>
          <div className="flex flex-wrap items-start justify-between w-full gap-7 desktop1:w-[76%]">
            {selectedCategory === "cloros" || selectedCategory === "all" ? (
              <ImgCodeDescButtonCard
                img={imgProductExample}
                code="Esse é cloro"
                description="It is a long established fact that a reader "
                button1Label="Baixar Ficha FISPQ"
                button1Link="#"
                category="cloros"
              />
            ) : null}
            {selectedCategory === "cloros" || selectedCategory === "all" ? (
              <ImgCodeDescButtonCard
                img={imgProductExample}
                code="Esse é cloro"
                description="It is a long established fact that a reader will be distracted by the readable content."
                button1Label="Baixar Ficha FISPQ"
                button1Link="#"
                category="cloros"
              />
            ) : null}
            {selectedCategory === "auxiliares" || selectedCategory === "all" ? (
              <ImgCodeDescButtonCard
                img={imgProductExample2}
                code="Auxiliar"
                description="It is a long established."
                button1Label="Baixar Ficha FISPQ"
                button1Link="#"
                category="auxiliares"
              />
            ) : null}
            {selectedCategory === "auxiliares" || selectedCategory === "all" ? (
              <ImgCodeDescButtonCard
                img={imgProductExample2}
                code="Auxiliar"
                description="It is a long established fact that a."
                button1Label="Baixar Ficha FISPQ"
                button1Link="#"
                category="auxiliares"
              />
            ) : null}
            {selectedCategory === "cloros" || selectedCategory === "all" ? (
              <ImgCodeDescButtonCard
                img={imgProductExample}
                code="Esse é cloro"
                description="It is a long established fact that a reader will be."
                button1Label="Baixar Ficha FISPQ"
                button1Link="#"
                category="cloros"
              />
            ) : null}
            {selectedCategory === "cloros" || selectedCategory === "all" ? (
              <ImgCodeDescButtonCard
                img={imgProductExample}
                code="Esse é cloro"
                description="It is a long established fact that a reader will be distracted by the readable."
                button1Label="Baixar Ficha FISPQ"
                button1Link="#"
                category="cloros"
              />
            ) : null}
            {selectedCategory === "auxiliares" || selectedCategory === "all" ? (
              <ImgCodeDescButtonCard
                img={imgProductExample2}
                code="Auxiliar"
                description="It is a long established fact."
                button1Label="Baixar Ficha FISPQ"
                button1Link="#"
                category="auxiliares"
              />
            ) : null}
            {selectedCategory === "auxiliares" || selectedCategory === "all" ? (
              <ImgCodeDescButtonCard
                img={imgProductExample2}
                code="Auxiliar"
                description="It is a long established fact that a reader will be distracted by the."
                button1Label="Baixar Ficha FISPQ"
                button1Link="#"
                category="auxiliares"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
