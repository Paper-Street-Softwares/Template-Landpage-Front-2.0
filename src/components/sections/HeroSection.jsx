import bgImage from "../../assets/importAssets/HeroBanner.png";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.png";

export default function HeroSection() {
  return (
    <div className="full font-mainFont">
      <div
        className="w-full bg-center bg-cover h-auto content"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="flex items-center justify-between">
          <div className="w-full text-white">
            <div className="flex flex-col items-center justify-center content mt-32">
              <MotionDivLeftToRight>
                <h1 className="w-full font-black leading-none text-center text-title2 phone1:text-title4 phone3:text-title4 tablet1:text-title5 desktop2:text-title6">
                  BEM VINDO AO MUNDO DAS PISCINAS!
                </h1>
                <p className="w-full mt-4 text-center phone1:w-full tablet1:text-paragraph5 desktop1:text-paragraph4 phone1:font-medium phone1:text-paragraph3 phone3:text-paragraph5">
                  Aqui você será atendido por profissionais qualificados que
                  prestarão toda orientação que você precisa.<br /> Continue navegando e
                  encontre o que você precisa!
                </p>
              </MotionDivLeftToRight>
              <div className="w-full phone2:w-full tablet2:w-auto">
              <MotionDivRightToLeft>
                <div className="flex justify-center w-full my-8 desktop3:mt-10">
                  <a
                    href="https://wa.me/55"
                    className="flex flex-row items-center justify-around w-auto h-16 transition bg-primary rounded-lg hover:bg-tertiary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex p-4 text-center">
                      <img
                        src={WhatsAppIcon}
                        className="h-10 phone2:mr-2 phone3:mr-4"
                        alt="WhatsApp Icon"
                      />
                        <p className="leading-none items-center flex text-white text-title1">
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
