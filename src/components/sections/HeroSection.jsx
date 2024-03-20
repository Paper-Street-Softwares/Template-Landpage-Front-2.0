import bgImage from "../../assets/importAssets/HeroBanner.png";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.png";

export default function HeroSection() {
  return (
    <div className="full font-mainFont">
      <div
        className="w-full bg-center bg-cover h-128 content phone3:h-[600px] tablet1:h-128 tablet2:h-120 desktop1:h-112"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="flex items-center justify-between">
          <div className="w-full text-white">
            <div className="flex flex-col items-center justify-center h-4 -mt-24 content phone3:-mt-32 tablet1:-mt-24">
              <MotionDivLeftToRight>
                <h1 className="w-full font-black leading-none text-center text-title2 desktop1:my-4 phone1:text-title4 phone3:text-title4 tablet1:text-title5 desktop1:w-[90%] desktop2:text-title6">
                  BEM VINDO AO MUNDO DAS PISCINAS!
                </h1>
                <p className="w-full mt-4 text-center phone1:w-full tablet1:text-paragraph5 desktop1:my-4 desktop1:w-[80%] desktop1:text-paragraph4 phone1:font-medium phone1:text-paragraph3 phone3:text-paragraph5">
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
                    className="flex flex-row items-center justify-around w-full h-16 transition bg-red-700 rounded-lg hover:bg-red-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex justify-around p-4 text-center">
                      <img
                        src={WhatsAppIcon}
                        className="h-20 mr-4 phone3:h-24 phone2:ml-4"
                        alt="WhatsApp Icon"
                      />
                      <div className="flex items-center">
                        <p className="leading-none text-white whitespace-normal text-title1">
                          Falar com atendente
                        </p>
                      </div>
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
