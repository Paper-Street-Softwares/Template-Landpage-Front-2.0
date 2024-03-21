import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
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
        <div className="flex flex-col items-start justify-between tablet2:flex-col font-mainFont">
          <h3 className="mb-[10px] w-full text-center bg-white rounded-[10px] p-[15px] tablet2:mb-[10px] font-semibold text-paragraph5 desktop1:text-left desktop1:text-title1 text-secondary desktop1:w-auto">
            Filtrar por categoria
          </h3>
          <div className="bg-white w-full desktop1:w-[22%] mb-[32px] flex flex-col phone3:justify-evenly phone3:flex-row p-[20px] phone3:p-4 rounded-[10px]">
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCategory === "all"}
                  onChange={() => handleCheckboxChange("all")}
                />
              }
              label="Todos"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCategory === "cloros"}
                  onChange={() => handleCheckboxChange("cloros")}
                />
              }
              label="Cloros"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCategory === "auxiliares"}
                  onChange={() => handleCheckboxChange("auxiliares")}
                />
              }
              label="Auxiliares"
            />
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
