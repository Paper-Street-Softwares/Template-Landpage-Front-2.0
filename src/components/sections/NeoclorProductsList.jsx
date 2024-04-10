import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import NeoclorProducts from "../util/productsData/neoclor/NeoclorProducts";

export default function NeoclorProductsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="full bg-quinary">
      <div className="content py-[26px] phone3:py-[48px] flex flex-row">
        <div className="flex flex-col items-start justify-between tablet2:flex-col desktop1:flex-row font-mainFont">
          <div className="w-full desktop1:w-[21%]">
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
          <div className="flex flex-wrap items-start justify-start w-full gap-7 desktop1:w-[76%]">
            {(selectedCategory === "cloros" || selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={NeoclorProducts.cloros.neoclorCloros1.img}
                  code={NeoclorProducts.cloros.neoclorCloros1.code}
                  description={
                    NeoclorProducts.cloros.neoclorCloros1.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={NeoclorProducts.cloros.neoclorCloros1.fispqLink}
                  category={NeoclorProducts.cloros.neoclorCloros1.category}
                />
                <ImgCodeDescButtonCard
                  img={NeoclorProducts.cloros.neoclorCloros2.img}
                  code={NeoclorProducts.cloros.neoclorCloros2.code}
                  description={
                    NeoclorProducts.cloros.neoclorCloros2.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={NeoclorProducts.cloros.neoclorCloros2.fispqLink}
                  category={NeoclorProducts.cloros.neoclorCloros2.category}
                />
                <ImgCodeDescButtonCard
                  img={NeoclorProducts.cloros.neoclorCloros3.img}
                  code={NeoclorProducts.cloros.neoclorCloros3.code}
                  description={
                    NeoclorProducts.cloros.neoclorCloros3.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={NeoclorProducts.cloros.neoclorCloros3.fispqLink}
                  category={NeoclorProducts.cloros.neoclorCloros3.category}
                />
                <ImgCodeDescButtonCard
                  img={NeoclorProducts.cloros.neoclorCloros4.img}
                  code={NeoclorProducts.cloros.neoclorCloros4.code}
                  description={
                    NeoclorProducts.cloros.neoclorCloros4.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={NeoclorProducts.cloros.neoclorCloros4.fispqLink}
                  category={NeoclorProducts.cloros.neoclorCloros4.category}
                />
                <ImgCodeDescButtonCard
                  img={NeoclorProducts.cloros.neoclorCloros5.img}
                  code={NeoclorProducts.cloros.neoclorCloros5.code}
                  description={
                    NeoclorProducts.cloros.neoclorCloros5.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={NeoclorProducts.cloros.neoclorCloros5.fispqLink}
                  category={NeoclorProducts.cloros.neoclorCloros5.category}
                />
                <ImgCodeDescButtonCard
                  img={NeoclorProducts.cloros.neoclorCloros6.img}
                  code={NeoclorProducts.cloros.neoclorCloros6.code}
                  description={
                    NeoclorProducts.cloros.neoclorCloros6.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={NeoclorProducts.cloros.neoclorCloros6.fispqLink}
                  category={NeoclorProducts.cloros.neoclorCloros6.category}
                />
              </>
            )}
            {(selectedCategory === "auxiliares" ||
              selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={NeoclorProducts.auxiliares.neoclorAuxiliares1.img}
                  code={NeoclorProducts.auxiliares.neoclorAuxiliares1.code}
                  description={
                    NeoclorProducts.auxiliares.neoclorAuxiliares1.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    NeoclorProducts.auxiliares.neoclorAuxiliares1.fispqLink
                  }
                  category={
                    NeoclorProducts.auxiliares.neoclorAuxiliares1.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={NeoclorProducts.auxiliares.neoclorAuxiliares2.img}
                  code={NeoclorProducts.auxiliares.neoclorAuxiliares2.code}
                  description={
                    NeoclorProducts.auxiliares.neoclorAuxiliares2.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    NeoclorProducts.auxiliares.neoclorAuxiliares2.fispqLink
                  }
                  category={
                    NeoclorProducts.auxiliares.neoclorAuxiliares2.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={NeoclorProducts.auxiliares.neoclorAuxiliares3.img}
                  code={NeoclorProducts.auxiliares.neoclorAuxiliares3.code}
                  description={
                    NeoclorProducts.auxiliares.neoclorAuxiliares3.description
                  }
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={
                    NeoclorProducts.auxiliares.neoclorAuxiliares3.fispqLink
                  }
                  category={
                    NeoclorProducts.auxiliares.neoclorAuxiliares3.category
                  }
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
