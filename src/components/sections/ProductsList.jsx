import React, { useState } from "react";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import imgProductExample2 from "../../assets/imgs/products/hth/cloros/auxiliares.png";
import HthProducts from "../util/productsData/hth/HthProducts";

export default function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
  };

  return (
    <div className="full bg-quinary">
      <div className="content py-[26px] phone3:py-[48px] flex flex-row">
        <div className="flex flex-col items-start justify-between desktop1:flex-row font-mainFont">
          <div className="bg-white w-full desktop1:w-[18%] mb-[32px] flex justify-around desktop1:flex-col p-2 phone3:p-4 rounded-[10px]">
            <h3 className="p-2 font-semibold phone2:w-[24%] text-paragraph2 desktop1:text-left desktop1:text-title1 text-secondary desktop1:w-auto">
              Filtrar por categoria
            </h3>
            <button
              className={`transition bg-red-700 hover:bg-[#0189BB] desktop1:my-[4px] text-white rounded-[10px] text-paragraph1 tablet1:text-paragraph3 text-center px-2 mx-1 phone3:p-2 phone2:w-[24%] desktop1:w-auto ${
                activeButton === "all" ? "bg-[#0188BB]" : ""
              }`}
              onClick={() => handleButtonClick("all")}
            >
              Mostrar todos
            </button>
            <button
              className={`transition bg-red-700 hover:bg-[#0189BB] desktop1:my-[4px] text-white rounded-[10px] text-paragraph1 tablet1:text-paragraph3 text-center px-2 mx-1 phone3:p-2 phone2:w-[24%] desktop1:w-auto ${
                activeButton === "cloros" ? "bg-[#0188BB]" : ""
              }`}
              onClick={() => handleButtonClick("cloros")}
            >
              Cloros
            </button>
            <button
              className={`transition bg-red-700 hover:bg-[#0189BB] desktop1:my-[4px] text-white rounded-[10px] text-paragraph1 tablet1:text-paragraph3 text-center px-2 mx-1 phone3:p-2 phone2:w-[24%] desktop1:w-auto ${
                activeButton === "auxiliares" ? "bg-[#0188BB]" : ""
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
                  img={HthProducts.hthProd1.img}
                  code={HthProducts.hthProd1.code}
                  description={HthProducts.hthProd1.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.hthProd1.fispqLink}
                  category={HthProducts.hthProd1.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.hthProd2.img}
                  code={HthProducts.hthProd2.code}
                  description={HthProducts.hthProd2.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.hthProd2.fispqLink}
                  category={HthProducts.hthProd2.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.hthProd3.img}
                  code={HthProducts.hthProd3.code}
                  description={HthProducts.hthProd3.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.hthProd3.fispqLink}
                  category={HthProducts.hthProd3.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.hthProd4.img}
                  code={HthProducts.hthProd4.code}
                  description={HthProducts.hthProd4.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.hthProd4.fispqLink}
                  category={HthProducts.hthProd4.category}
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
