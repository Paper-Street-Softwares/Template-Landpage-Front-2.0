import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import SodramarProducts from "../util/productsData/sodramar/SodramarProducts";

export default function SodramarProductsList() {
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
                  img={SodramarProducts.limpeza.sodramarLimpeza1.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza1.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza1.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza1.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza2.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza2.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza2.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza2.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza3.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza3.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza3.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza3.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza4.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza4.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza4.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza4.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza5.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza5.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza5.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza5.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza6.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza6.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza6.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza6.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza7.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza7.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza7.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza7.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza8.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza8.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza8.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza8.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza9.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza9.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza9.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza9.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza10.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza10.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza10.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza10.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza11.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza11.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza11.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza11.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza12.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza12.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza12.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza12.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza13.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza13.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza13.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza13.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza14.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza14.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza14.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza14.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza15.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza15.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza15.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza15.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza16.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza16.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza16.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza16.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza17.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza17.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza17.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza17.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza18.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza18.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza18.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza18.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza19.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza19.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza19.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza19.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza20.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza20.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza20.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza20.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza21.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza21.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza21.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza21.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza22.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza22.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza22.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza22.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza23.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza23.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza23.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza23.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza24.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza24.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza24.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza24.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza25.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza25.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza25.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza25.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza26.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza26.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza26.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza26.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza27.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza27.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza27.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza27.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza28.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza28.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza28.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza28.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza29.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza29.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza29.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza29.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza30.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza30.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza30.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza30.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza31.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza31.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza31.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza31.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza32.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza32.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza32.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza32.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza33.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza33.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza33.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza33.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza34.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza34.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza34.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza34.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza35.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza35.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza35.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza35.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza36.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza36.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza36.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza36.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza37.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza37.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza37.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza37.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza38.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza38.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza38.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza38.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza39.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza39.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza39.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza39.category}
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.limpeza.sodramarLimpeza40.img}
                  code={SodramarProducts.limpeza.sodramarLimpeza40.code}
                  description={
                    SodramarProducts.limpeza.sodramarLimpeza40.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={SodramarProducts.limpeza.sodramarLimpeza40.category}
                />
              </>
            )}
            {(selectedCategory === "construção" ||
              selectedCategory === "all") && (
              <>
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução1.img}
                  code={SodramarProducts.construção.sodramarConstrução1.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução1.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução1.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução2.img}
                  code={SodramarProducts.construção.sodramarConstrução2.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução2.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução2.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução3.img}
                  code={SodramarProducts.construção.sodramarConstrução3.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução3.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução3.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução4.img}
                  code={SodramarProducts.construção.sodramarConstrução4.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução4.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução4.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução5.img}
                  code={SodramarProducts.construção.sodramarConstrução5.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução5.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução5.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução6.img}
                  code={SodramarProducts.construção.sodramarConstrução6.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução6.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução6.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução7.img}
                  code={SodramarProducts.construção.sodramarConstrução7.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução7.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução7.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução8.img}
                  code={SodramarProducts.construção.sodramarConstrução8.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução8.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução8.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução9.img}
                  code={SodramarProducts.construção.sodramarConstrução9.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução9.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução9.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução10.img}
                  code={SodramarProducts.construção.sodramarConstrução10.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução10.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução10.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução11.img}
                  code={SodramarProducts.construção.sodramarConstrução11.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução11.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução11.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução12.img}
                  code={SodramarProducts.construção.sodramarConstrução12.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução12.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução12.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução13.img}
                  code={SodramarProducts.construção.sodramarConstrução13.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução13.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução13.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução14.img}
                  code={SodramarProducts.construção.sodramarConstrução14.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução14.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução14.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução15.img}
                  code={SodramarProducts.construção.sodramarConstrução15.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução15.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução15.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução16.img}
                  code={SodramarProducts.construção.sodramarConstrução16.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução16.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução16.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução17.img}
                  code={SodramarProducts.construção.sodramarConstrução17.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução17.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução17.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução18.img}
                  code={SodramarProducts.construção.sodramarConstrução18.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução18.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução18.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução19.img}
                  code={SodramarProducts.construção.sodramarConstrução19.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução19.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução19.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução20.img}
                  code={SodramarProducts.construção.sodramarConstrução20.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução20.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução20.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução21.img}
                  code={SodramarProducts.construção.sodramarConstrução21.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução21.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução21.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução22.img}
                  code={SodramarProducts.construção.sodramarConstrução22.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução22.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução22.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução23.img}
                  code={SodramarProducts.construção.sodramarConstrução23.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução23.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução23.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução24.img}
                  code={SodramarProducts.construção.sodramarConstrução24.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução24.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução24.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução25.img}
                  code={SodramarProducts.construção.sodramarConstrução25.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução25.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução25.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução26.img}
                  code={SodramarProducts.construção.sodramarConstrução26.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução26.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução26.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução27.img}
                  code={SodramarProducts.construção.sodramarConstrução27.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução27.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução27.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução28.img}
                  code={SodramarProducts.construção.sodramarConstrução28.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução28.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução28.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução29.img}
                  code={SodramarProducts.construção.sodramarConstrução29.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução29.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução29.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução30.img}
                  code={SodramarProducts.construção.sodramarConstrução30.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução30.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução30.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução31.img}
                  code={SodramarProducts.construção.sodramarConstrução31.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução31.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução31.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução32.img}
                  code={SodramarProducts.construção.sodramarConstrução32.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução32.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução32.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução33.img}
                  code={SodramarProducts.construção.sodramarConstrução33.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução33.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução33.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução34.img}
                  code={SodramarProducts.construção.sodramarConstrução34.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução34.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução34.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução35.img}
                  code={SodramarProducts.construção.sodramarConstrução35.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução35.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução35.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução36.img}
                  code={SodramarProducts.construção.sodramarConstrução36.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução36.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução36.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução37.img}
                  code={SodramarProducts.construção.sodramarConstrução37.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução37.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução37.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução38.img}
                  code={SodramarProducts.construção.sodramarConstrução38.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução38.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução38.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução39.img}
                  code={SodramarProducts.construção.sodramarConstrução39.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução39.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução39.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução40.img}
                  code={SodramarProducts.construção.sodramarConstrução40.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução40.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução40.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução41.img}
                  code={SodramarProducts.construção.sodramarConstrução41.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução41.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução41.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução42.img}
                  code={SodramarProducts.construção.sodramarConstrução42.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução42.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução42.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução43.img}
                  code={SodramarProducts.construção.sodramarConstrução43.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução43.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução43.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução44.img}
                  code={SodramarProducts.construção.sodramarConstrução44.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução44.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução44.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução45.img}
                  code={SodramarProducts.construção.sodramarConstrução45.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução45.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução45.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução46.img}
                  code={SodramarProducts.construção.sodramarConstrução46.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução46.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução46.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução47.img}
                  code={SodramarProducts.construção.sodramarConstrução47.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução47.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução47.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução48.img}
                  code={SodramarProducts.construção.sodramarConstrução48.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução48.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução48.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução49.img}
                  code={SodramarProducts.construção.sodramarConstrução49.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução49.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução49.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução50.img}
                  code={SodramarProducts.construção.sodramarConstrução50.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução50.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução50.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução51.img}
                  code={SodramarProducts.construção.sodramarConstrução51.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução51.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução51.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução52.img}
                  code={SodramarProducts.construção.sodramarConstrução52.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução52.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução52.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução53.img}
                  code={SodramarProducts.construção.sodramarConstrução53.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução53.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução53.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução54.img}
                  code={SodramarProducts.construção.sodramarConstrução54.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução54.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução54.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução55.img}
                  code={SodramarProducts.construção.sodramarConstrução55.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução55.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução55.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução56.img}
                  code={SodramarProducts.construção.sodramarConstrução56.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução56.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução56.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução57.img}
                  code={SodramarProducts.construção.sodramarConstrução57.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução57.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução57.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução58.img}
                  code={SodramarProducts.construção.sodramarConstrução58.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução58.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução58.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução59.img}
                  code={SodramarProducts.construção.sodramarConstrução59.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução59.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução59.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução60.img}
                  code={SodramarProducts.construção.sodramarConstrução60.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução60.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução60.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução61.img}
                  code={SodramarProducts.construção.sodramarConstrução61.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução61.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução61.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução62.img}
                  code={SodramarProducts.construção.sodramarConstrução62.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução62.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução62.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução63.img}
                  code={SodramarProducts.construção.sodramarConstrução63.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução63.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução63.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução64.img}
                  code={SodramarProducts.construção.sodramarConstrução64.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução64.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução64.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução65.img}
                  code={SodramarProducts.construção.sodramarConstrução65.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução65.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução65.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução66.img}
                  code={SodramarProducts.construção.sodramarConstrução66.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução66.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução66.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução67.img}
                  code={SodramarProducts.construção.sodramarConstrução67.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução67.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução67.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução68.img}
                  code={SodramarProducts.construção.sodramarConstrução68.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução68.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução68.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução69.img}
                  code={SodramarProducts.construção.sodramarConstrução69.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução69.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução69.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução70.img}
                  code={SodramarProducts.construção.sodramarConstrução70.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução70.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução70.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução71.img}
                  code={SodramarProducts.construção.sodramarConstrução71.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução71.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução71.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução72.img}
                  code={SodramarProducts.construção.sodramarConstrução72.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução72.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução72.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução73.img}
                  code={SodramarProducts.construção.sodramarConstrução73.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução73.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução73.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução74.img}
                  code={SodramarProducts.construção.sodramarConstrução74.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução74.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução74.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução75.img}
                  code={SodramarProducts.construção.sodramarConstrução75.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução75.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução75.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução76.img}
                  code={SodramarProducts.construção.sodramarConstrução76.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução76.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução76.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução77.img}
                  code={SodramarProducts.construção.sodramarConstrução77.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução77.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução77.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução78.img}
                  code={SodramarProducts.construção.sodramarConstrução78.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução78.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução78.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução79.img}
                  code={SodramarProducts.construção.sodramarConstrução79.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução79.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução79.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução80.img}
                  code={SodramarProducts.construção.sodramarConstrução80.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução80.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução80.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução81.img}
                  code={SodramarProducts.construção.sodramarConstrução81.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução81.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução81.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução82.img}
                  code={SodramarProducts.construção.sodramarConstrução82.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução82.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução82.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução83.img}
                  code={SodramarProducts.construção.sodramarConstrução83.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução83.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução83.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução84.img}
                  code={SodramarProducts.construção.sodramarConstrução84.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução84.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução84.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução85.img}
                  code={SodramarProducts.construção.sodramarConstrução85.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução85.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução85.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução86.img}
                  code={SodramarProducts.construção.sodramarConstrução86.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução86.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução86.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução87.img}
                  code={SodramarProducts.construção.sodramarConstrução87.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução87.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução87.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução88.img}
                  code={SodramarProducts.construção.sodramarConstrução88.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução88.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução88.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução89.img}
                  code={SodramarProducts.construção.sodramarConstrução89.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução89.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução89.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução90.img}
                  code={SodramarProducts.construção.sodramarConstrução90.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução90.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução90.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução91.img}
                  code={SodramarProducts.construção.sodramarConstrução91.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução91.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução91.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução92.img}
                  code={SodramarProducts.construção.sodramarConstrução92.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução92.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução92.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução93.img}
                  code={SodramarProducts.construção.sodramarConstrução93.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução93.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução93.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução94.img}
                  code={SodramarProducts.construção.sodramarConstrução94.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução94.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução94.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução95.img}
                  code={SodramarProducts.construção.sodramarConstrução95.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução95.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução95.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução96.img}
                  code={SodramarProducts.construção.sodramarConstrução96.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução96.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução96.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução97.img}
                  code={SodramarProducts.construção.sodramarConstrução97.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução97.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução97.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução98.img}
                  code={SodramarProducts.construção.sodramarConstrução98.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução98.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução98.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução99.img}
                  code={SodramarProducts.construção.sodramarConstrução99.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução99.description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução99.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução100.img}
                  code={SodramarProducts.construção.sodramarConstrução100.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução100
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução100.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução101.img}
                  code={SodramarProducts.construção.sodramarConstrução101.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução101
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução101.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução102.img}
                  code={SodramarProducts.construção.sodramarConstrução102.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução102
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução102.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução103.img}
                  code={SodramarProducts.construção.sodramarConstrução103.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução103
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução103.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução104.img}
                  code={SodramarProducts.construção.sodramarConstrução104.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução104
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução104.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução105.img}
                  code={SodramarProducts.construção.sodramarConstrução105.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução105
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução105.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução106.img}
                  code={SodramarProducts.construção.sodramarConstrução106.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução106
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução106.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução107.img}
                  code={SodramarProducts.construção.sodramarConstrução107.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução107
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução107.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução108.img}
                  code={SodramarProducts.construção.sodramarConstrução108.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução108
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução108.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução109.img}
                  code={SodramarProducts.construção.sodramarConstrução109.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução109
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução109.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução110.img}
                  code={SodramarProducts.construção.sodramarConstrução110.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução110
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução110.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução111.img}
                  code={SodramarProducts.construção.sodramarConstrução111.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução111
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução111.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução112.img}
                  code={SodramarProducts.construção.sodramarConstrução112.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução112
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução112.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução113.img}
                  code={SodramarProducts.construção.sodramarConstrução113.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução113
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução113.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução114.img}
                  code={SodramarProducts.construção.sodramarConstrução114.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução114
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução114.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução115.img}
                  code={SodramarProducts.construção.sodramarConstrução115.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução115
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução115.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução116.img}
                  code={SodramarProducts.construção.sodramarConstrução116.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução116
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução116.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução117.img}
                  code={SodramarProducts.construção.sodramarConstrução117.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução117
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução117.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução118.img}
                  code={SodramarProducts.construção.sodramarConstrução118.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução118
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução118.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução119.img}
                  code={SodramarProducts.construção.sodramarConstrução119.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução119
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução119.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução120.img}
                  code={SodramarProducts.construção.sodramarConstrução120.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução120
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução120.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução121.img}
                  code={SodramarProducts.construção.sodramarConstrução121.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução121
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução121.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução122.img}
                  code={SodramarProducts.construção.sodramarConstrução122.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução122
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução122.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução123.img}
                  code={SodramarProducts.construção.sodramarConstrução123.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução123
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução123.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução124.img}
                  code={SodramarProducts.construção.sodramarConstrução124.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução124
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução124.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução125.img}
                  code={SodramarProducts.construção.sodramarConstrução125.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução125
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução125.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução126.img}
                  code={SodramarProducts.construção.sodramarConstrução126.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução126
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução126.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução127.img}
                  code={SodramarProducts.construção.sodramarConstrução127.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução127
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução127.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução128.img}
                  code={SodramarProducts.construção.sodramarConstrução128.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução128
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução128.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução129.img}
                  code={SodramarProducts.construção.sodramarConstrução129.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução129
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução129.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução130.img}
                  code={SodramarProducts.construção.sodramarConstrução130.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução130
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução130.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução131.img}
                  code={SodramarProducts.construção.sodramarConstrução131.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução131
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução131.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução132.img}
                  code={SodramarProducts.construção.sodramarConstrução132.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução132
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução132.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução133.img}
                  code={SodramarProducts.construção.sodramarConstrução133.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução133
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução133.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução134.img}
                  code={SodramarProducts.construção.sodramarConstrução134.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução134
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução134.category
                  }
                />
                <ImgCodeDescButtonCard
                  img={SodramarProducts.construção.sodramarConstrução135.img}
                  code={SodramarProducts.construção.sodramarConstrução135.code}
                  description={
                    SodramarProducts.construção.sodramarConstrução135
                      .description
                  }
                  button1Label="Não Possui Ficha FISPQ"
                  category={
                    SodramarProducts.construção.sodramarConstrução135.category
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
