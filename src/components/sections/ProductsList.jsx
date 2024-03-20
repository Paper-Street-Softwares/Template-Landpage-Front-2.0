import { useState } from "react";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import imgProductExample2 from "../../assets/imgs/products/hth/cloros/auxiliares.png";
import HthProducts from "../util/productsData/hth/HthProducts";

export default function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="full bg-quinary">
      <div className="content py-[26px] phone3:py-[48px] flex flex-row">
        <div className="flex flex-col items-start justify-between desktop1:flex-row font-mainFont">
          <div className="bg-white w-full desktop1:w-[18%] mb-[32px] flex justify-around desktop1:flex-col p-2 phone3:p-4 rounded-[10px]">
            <h3 className="p-2 font-semibold w-[30%] phone3:w-[40%] text-paragraph2 phone3:text-paragraph3 tablet1:text-paragraph5 desktop1:text-left desktop1:text-title1 text-secondary desktop1:w-auto">
              Filtrar por categoria
            </h3>
            <label className="checkbox-label text-paragraph2 phone3:text-paragraph3 w-[22%] flex flex-col text-center justify-evenly tablet1:text-paragraph5 desktop1:text-paragraph4 tablet1:flex-row desktop1:p-2">
              <input
                type="checkbox"
                checked={selectedCategory === "all"}
                onChange={() => handleCheckboxChange("all")}
              />
              <p className="flex items-center justify-center h-auto leading-none desktop1:ml-2">
                Todos
              </p>
            </label>
            <label className="checkbox-label text-paragraph2 phone3:text-paragraph3 w-[22%] flex flex-col text-center justify-evenly tablet1:text-paragraph5 desktop1:text-paragraph4 tablet1:flex-row desktop1:p-2">
              <input
                type="checkbox"
                checked={selectedCategory === "cloros"}
                onChange={() => handleCheckboxChange("cloros")}
              />
              <p className="flex items-center justify-center h-auto leading-none desktop1:ml-2">
                Cloros
              </p>
            </label>
            <label className="checkbox-label text-paragraph2 phone3:text-paragraph3 w-[22%] flex flex-col text-center justify-evenly tablet1:text-paragraph5 desktop1:text-paragraph4 tablet1:flex-row desktop1:p-2">
              <input
                type="checkbox"
                checked={selectedCategory === "auxiliares"}
                onChange={() => handleCheckboxChange("auxiliares")}
              />
              <p className="flex items-center justify-center h-auto leading-none desktop1:ml-2">
                Auxiliares
              </p>
            </label>
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
