import React, { useState } from "react";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import ImgCodeDescButtonCard from "../cards/ImgCodeDescButtonCard";
import imgProductExample from "../../assets/imgs/products/hth/cloros/baldeCloro.png";
import imgProductExample2 from "../../assets/imgs/products/hth/cloros/auxiliares.png";

export default function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="full">
      <div className="bg-quinary content py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Linha de Produtos"
          sectionHeaderDescription="Ao longo dos anos, fomos firmando parcerias hoje bastante consolidadas com marcas renomadas e de grande credibilidade no mercado. Encontre a marca que você deseja comprar e clique na categoria para ser levado para a página contendo os produtos desta marca."
        />
        <button
          className="bg-red-900 hover:bg-red-700"
          onClick={() => setSelectedCategory("cloros")}
        >
          Cloros
        </button>
        <button
          className="bg-blue-900 hover:bg-blue-700"
          onClick={() => setSelectedCategory("auxiliares")}
        >
          Auxiliares
        </button>
        <button
          className="bg-green-900 hover:bg-green-700"
          onClick={() => setSelectedCategory("all")}
        >
          Mostrar todos
        </button>
        <div className="flex flex-wrap items-start justify-start w-full gap-7">
          {selectedCategory === "cloros" || selectedCategory === "all" ? (
            <ImgCodeDescButtonCard
              img={imgProductExample}
              code="Esse é cloro"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsu."
              button1Label="Baixar Ficha FISPQ"
              button1Link="#"
              category="cloros"
            />
          ) : null}
          {selectedCategory === "cloros" || selectedCategory === "all" ? (
            <ImgCodeDescButtonCard
              img={imgProductExample}
              code="Esse é cloro"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
              button1Label="Baixar Ficha FISPQ"
              button1Link="#"
              category="cloros"
            />
          ) : null}
          {selectedCategory === "auxiliares" || selectedCategory === "all" ? (
            <ImgCodeDescButtonCard
              img={imgProductExample2}
              code="Auxiliar"
              description="It is a long established fact that a reader will be distracted by the readable."
              button1Label="Baixar Ficha FISPQ"
              button1Link="#"
              category="auxiliares"
            />
          ) : null}
          {selectedCategory === "auxiliares" || selectedCategory === "all" ? (
            <ImgCodeDescButtonCard
              img={imgProductExample2}
              code="Auxiliar"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use."
              button1Label="Baixar Ficha FISPQ"
              button1Link="#"
              category="auxiliares"
            />
          ) : null}
          {selectedCategory === "cloros" || selectedCategory === "all" ? (
            <ImgCodeDescButtonCard
              img={imgProductExample}
              code="Esse é cloro"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsu."
              button1Label="Baixar Ficha FISPQ"
              button1Link="#"
              category="cloros"
            />
          ) : null}
          {selectedCategory === "cloros" || selectedCategory === "all" ? (
            <ImgCodeDescButtonCard
              img={imgProductExample}
              code="Esse é cloro"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
              button1Label="Baixar Ficha FISPQ"
              button1Link="#"
              category="cloros"
            />
          ) : null}
          {selectedCategory === "auxiliares" || selectedCategory === "all" ? (
            <ImgCodeDescButtonCard
              img={imgProductExample2}
              code="Auxiliar"
              description="It is a long established fact that a reader will be distracted by the readable."
              button1Label="Baixar Ficha FISPQ"
              button1Link="#"
              category="auxiliares"
            />
          ) : null}
          {selectedCategory === "auxiliares" || selectedCategory === "all" ? (
            <ImgCodeDescButtonCard
              img={imgProductExample2}
              code="Auxiliar"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use."
              button1Label="Baixar Ficha FISPQ"
              button1Link="#"
              category="auxiliares"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
