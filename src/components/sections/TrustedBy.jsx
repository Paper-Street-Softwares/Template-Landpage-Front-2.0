import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function TrustedBy() {
  return (
    <SectionArea>
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Trabalhamos com os principais empreendimentos"
        sectionHeaderSubtitle="Conectando você aos melhores e mais confiáveis empreendimentos do mercado"
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-full">
          <div className="flex flex-wrap justify-between w-full gap-[20px] tablet1:gap-[24px]">
            <img
              src="src\assets\imgs\logos\image 28.png"
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            />
            <img
              src="src\assets\imgs\logos\image 29.png"
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            />
            <img
              src="src/assets/imgs/logos/image 30.png"
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            />

            <img
              src="src\assets\imgs\logos\image 31.png"
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            />
            <img
              src="src\assets\imgs\logos\image 32.png"
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            />
            <img
              src="src\assets\imgs\logos\image 33.png"
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            />

            {/* <img
              src="src\assets\imgs\logos\images 3.png"
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            />
            <img
              src="src\assets\imgs\logos\download 3.png"
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            />
            <img
              src="src\assets\imgs\logos\download 4.png"
              alt=""
              className="max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            />
            <img
              src="src\assets\imgs\logos\download 3.png"
              alt=""
              className=" max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            />
            <img
              src="src\assets\imgs\logos\download 4.png"
              alt=""
              className=" max-h-[40px] w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            />
            <img
              src="src\assets\imgs\logos\download 4.png"
              alt=""
              className=" w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] max-h-[40px] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%] desktop3:max-h-[120px]"
            /> */}
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
