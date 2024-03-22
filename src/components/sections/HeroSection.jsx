import bgImage from "../../assets/importAssets/HeroBanner.png";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.png";

export default function HeroSection() {
  return (
    <div className="full font-mainFont" id="home">
      <div
        className="w-full h-auto bg-center bg-cover content"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="flex items-center">
          <div className="w-full text-white min-h-[518px]">
            <div className="flex flex-col items-center mt-48 justify-evenly content">
              <MotionDivLeftToRight>
                <h1 className="w-full font-black leading-none text-center text-title2 phone1:text-title4 phone3:text-title5 tablet1:text-title6 desktop2:text-title6">
                  BEM VINDO AO MUNDO DAS PISCINAS!
                </h1>
                <p className="w-full mt-12 text-center phone1:w-full phone1:font-medium phone1:text-paragraph4">
                  Aqui você será atendido por profissionais qualificados que
                  prestarão toda orientação que você precisa.
                  <br /> Continue navegando e encontre o que você precisa!
                </p>
              </MotionDivLeftToRight>
              <div className="w-full phone2:w-full tablet2:w-auto">

                <MotionDivRightToLeft>
                  <div className="flex justify-center w-full my-8 desktop2:mt-10">
                    <a
                      href="https://wa.me/5561992781077"
                      className="flex flex-row items-center justify-around w-auto h-16 mt-4 transition rounded-lg bg-primary hover:bg-tertiary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex p-4 text-center">
                        <img
                          src={WhatsAppIcon}
                          className="h-10 phone2:mr-2 phone3:mr-4"
                          alt="WhatsApp Icon"
                        />
                        <p className="flex items-center leading-none text-white text-title1">
                          Falar com atendente
                        </p>
                      </div>
                    </a>
                  </div>
                </MotionDivRightToLeft>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
