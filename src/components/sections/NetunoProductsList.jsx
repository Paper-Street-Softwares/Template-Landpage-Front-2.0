import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import NetunoProducts from "../util/productsData/netuno/NetunoProducts";

export default function NetunoProductsList() {
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
                    checked={selectedCategory === "limpeza"}
                    onChange={() => handleCheckboxChange("limpeza")}
                  />
                }
                label="Limpeza"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategory === "construção"}
                    onChange={() => handleCheckboxChange("construção")}
                  />
                }
                label="Construção"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-start w-full gap-7 desktop1:w-[76%]">
            {(selectedCategory === "limpeza" || selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza1.img}
                  code={NetunoProducts.limpeza.netunoLimpeza1.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza1.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza1.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza2.img}
                  code={NetunoProducts.limpeza.netunoLimpeza2.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza2.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza2.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza3.img}
                  code={NetunoProducts.limpeza.netunoLimpeza3.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza3.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza3.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza4.img}
                  code={NetunoProducts.limpeza.netunoLimpeza4.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza4.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza4.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza5.img}
                  code={NetunoProducts.limpeza.netunoLimpeza5.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza5.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza5.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza6.img}
                  code={NetunoProducts.limpeza.netunoLimpeza6.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza6.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza6.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza7.img}
                  code={NetunoProducts.limpeza.netunoLimpeza7.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza7.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza7.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza8.img}
                  code={NetunoProducts.limpeza.netunoLimpeza8.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza8.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza8.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza9.img}
                  code={NetunoProducts.limpeza.netunoLimpeza9.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza9.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza9.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza10.img}
                  code={NetunoProducts.limpeza.netunoLimpeza10.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza10.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza10.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza11.img}
                  code={NetunoProducts.limpeza.netunoLimpeza11.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza11.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza11.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza12.img}
                  code={NetunoProducts.limpeza.netunoLimpeza12.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza12.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza12.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza13.img}
                  code={NetunoProducts.limpeza.netunoLimpeza13.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza13.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza13.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza14.img}
                  code={NetunoProducts.limpeza.netunoLimpeza14.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza14.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza14.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza15.img}
                  code={NetunoProducts.limpeza.netunoLimpeza15.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza15.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza15.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza16.img}
                  code={NetunoProducts.limpeza.netunoLimpeza16.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza16.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza16.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza17.img}
                  code={NetunoProducts.limpeza.netunoLimpeza17.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza17.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza17.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza18.img}
                  code={NetunoProducts.limpeza.netunoLimpeza18.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza18.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza18.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza19.img}
                  code={NetunoProducts.limpeza.netunoLimpeza19.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza19.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza19.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza20.img}
                  code={NetunoProducts.limpeza.netunoLimpeza20.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza20.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza20.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza21.img}
                  code={NetunoProducts.limpeza.netunoLimpeza21.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza21.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza21.category}
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.limpeza.netunoLimpeza22.img}
                  code={NetunoProducts.limpeza.netunoLimpeza22.code}
                  description={
                    NetunoProducts.limpeza.netunoLimpeza22.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={NetunoProducts.limpeza.netunoLimpeza22.category}
                />
              </>
            )}
            {(selectedCategory === "construção" ||
              selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={NetunoProducts.construção.netunoConstrução1.img}
                  code={NetunoProducts.construção.netunoConstrução1.code}
                  description={
                    NetunoProducts.construção.netunoConstrução1.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    NetunoProducts.construção.netunoConstrução1.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.construção.netunoConstrução2.img}
                  code={NetunoProducts.construção.netunoConstrução2.code}
                  description={
                    NetunoProducts.construção.netunoConstrução2.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    NetunoProducts.construção.netunoConstrução2.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.construção.netunoConstrução3.img}
                  code={NetunoProducts.construção.netunoConstrução3.code}
                  description={
                    NetunoProducts.construção.netunoConstrução3.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    NetunoProducts.construção.netunoConstrução3.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.construção.netunoConstrução4.img}
                  code={NetunoProducts.construção.netunoConstrução4.code}
                  description={
                    NetunoProducts.construção.netunoConstrução4.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    NetunoProducts.construção.netunoConstrução4.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.construção.netunoConstrução5.img}
                  code={NetunoProducts.construção.netunoConstrução5.code}
                  description={
                    NetunoProducts.construção.netunoConstrução5.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    NetunoProducts.construção.netunoConstrução5.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={NetunoProducts.construção.netunoConstrução6.img}
                  code={NetunoProducts.construção.netunoConstrução6.code}
                  description={
                    NetunoProducts.construção.netunoConstrução6.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    NetunoProducts.construção.netunoConstrução6.category
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
