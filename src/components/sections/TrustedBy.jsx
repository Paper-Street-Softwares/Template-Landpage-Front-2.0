import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import imagem1 from "../../assets/imgs/logos/item1.png";
import imagem2 from "../../assets/imgs/logos/item2.png";
import imagem3 from "../../assets/imgs/logos/item3.png";
import imagem4 from "../../assets/imgs/logos/item4.png";
import imagem5 from "../../assets/imgs/logos/item5.png";
import imagem6 from "../../assets/imgs/logos/item6.png";
import imagem7 from "../../assets/imgs/logos/item7.png";
import imagem8 from "../../assets/imgs/logos/item8.png";
import imagem9 from "../../assets/imgs/logos/item9.png";
import imagem10 from "../../assets/imgs/logos/item10.jpg";


export default function TrustedBy() {
  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Trabalhamos com os principais empreendimentos"
        sectionHeaderSubtitle="Conectando você aos melhores e mais confiáveis empreendimentos do mercado"
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-full">
          <div className="flex flex-wrap justify-between w-full gap-[20px] tablet1:gap-[24px]">
            <img
              src={imagem1}
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px]  desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />
            <img
              src={imagem2}
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />
            <img
              src={imagem3}
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />

            <img
              src={imagem4}
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />
            <img
              src={imagem5}
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />
            <img
              src={imagem6}
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />

            <img
              src={imagem7}
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />
            <img
              src={imagem8}
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />
            <img
              src={imagem9}
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />
            <img
              src={imagem10}
              alt=""
              className=" max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />
            <img
              src={imagem10}
              alt=""
              className=" max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />
            <img
              src={imagem10}
              alt=""
              className=" w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] max-h-[40px] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
            />
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
