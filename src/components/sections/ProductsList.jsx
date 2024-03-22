import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import HthProducts from "../util/productsData/hth/HthProducts";

export default function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="full bg-quinary">
      <div className="content py-[26px] phone3:py-[48px] flex flex-row">
        <div className="flex flex-col items-start justify-between tablet2:flex-col desktop1:flex-row font-mainFont">
          <div className="w-full  desktop1:w-[21%]">
            <h3 className="mb-[10px] w-full text-center bg-white rounded-[10px] p-[15px] tablet2:mb-[10px] font-semibold text-paragraph5 desktop1:text-paragraph4 text-secondary desktop1:w-auto">
              Filtrar por categoria
            </h3>
            <div className="bg-white w-full desktop1:flex-col mb-[32px] flex flex-col phone3:justify-evenly phone3:flex-row p-[20px] phone3:p-4 rounded-[10px]">
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
          </div>
          <div className="flex flex-wrap items-start justify-between w-full gap-7 desktop1:w-[76%]">
            {(selectedCategory === "cloros" || selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros1.img}
                  code={HthProducts.cloros.hthCloros1.code}
                  description={HthProducts.cloros.hthCloros1.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros1.fispqLink}
                  category={HthProducts.cloros.hthCloros1.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros2.img}
                  code={HthProducts.cloros.hthCloros2.code}
                  description={HthProducts.cloros.hthCloros2.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros2.fispqLink}
                  category={HthProducts.cloros.hthCloros2.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros3.img}
                  code={HthProducts.cloros.hthCloros3.code}
                  description={HthProducts.cloros.hthCloros3.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros3.fispqLink}
                  category={HthProducts.cloros.hthCloros3.category}
                />
              </>
            )}
            {(selectedCategory === "auxiliares" ||
              selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares1.img}
                  code={HthProducts.auxiliares.hthAuxiliares1.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares1.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares1.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares1.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares2.img}
                  code={HthProducts.auxiliares.hthAuxiliares2.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares2.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares2.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares2.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares3.img}
                  code={HthProducts.auxiliares.hthAuxiliares3.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares3.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares3.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares3.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares4.img}
                  code={HthProducts.auxiliares.hthAuxiliares4.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares4.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares4.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares4.category}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
