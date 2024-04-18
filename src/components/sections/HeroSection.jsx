import bgImage from "../../assets/importAssets/bg2.jpg";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.png";
import whatsappNumber from "../../abstractions/whats";
import ImagesGalleryHero from "../interactives/ImagesGalleryHero";
import slide1 from "../../assets/banners/hero/product1.png";
import slide2 from "../../assets/banners/hero/product4.png";
import slide3 from "../../assets/banners/hero/product3.png";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

export default function HeroSection() {
  return (
    <div className="font-mainFont" id="home">
      <div
        className="w-full bg-center bg-cover"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="flex items-center">
          <div className="w-full text-white justify-evenly">
            <div className="h-40 desktop3:h-46" />
            <div className="flex mx-auto mb-[40px] w-[88%] max-w-[1110px] items-center gap-10 tablet2:gap-14 desktop3:gap-20">
              <div className="w-[650px] flex flex-col gap-8">
                <MotionDivLeftToRight>
                  <div className="font-black leading-none text-left text-title3 phone1:text-title5 phone3:text-title6 tablet1:text-title7 desktop2:text-[40px]">
                    <h1>BEM VINDO AO MUNDO DAS PISCINAS!</h1>
                  </div>
                </MotionDivLeftToRight>
                <MotionDivLeftToRight>
                  <div className="text-left phone1:w-full phone1:font-medium phone1:text-paragraph4">
                    <p>
                      Aqui você será atendido de forma humanizada por
                      profissionais qualificados e preparados para esclarecer
                      suas dúvidas.
                      <br /> Continue navegando e encontre o que você procura.
                    </p>
                  </div>
                </MotionDivLeftToRight>
                <div className="w-full phone2:w-full tablet2:w-auto">
                  <MotionDivRightToLeft>
                    <div className="flex justify-start w-full">
                      <a
                        href={whatsappContactLink}
                        className="flex flex-row items-center justify-around w-auto h-16 transition rounded-[40px] p-6 bg-red-700 hover:bg-red-900"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex p-4 text-center">
                          <img
                            src={WhatsAppIcon}
                            className="h-8 mr-[24px]"
                            alt="WhatsApp Icon"
                          />
                          <p className="flex items-center leading-none text-white text-title1">
                            Fale com um consultor
                          </p>
                        </div>
                      </a>
                    </div>
                  </MotionDivRightToLeft>
                </div>
              </div>
              <div className="w-[510px] h-[350px] flex items-center">
                <ImagesGalleryHero
                  slide1={slide1}
                  slide2={slide2}
                  slide3={slide3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
