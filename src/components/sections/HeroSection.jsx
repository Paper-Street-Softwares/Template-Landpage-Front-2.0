import bgImage from "../../assets/importAssets/HeroBanner.png";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.png";

export default function HeroSection() {
  return (
    <div className="full font-mainFont">
      <div
        className="w-full bg-center bg-cover content min-h-[550px] phone2:min-h-[480px] phone3:min-h-[600px] tablet1:min-h-[500px] tablet2:min-h-[450px] "
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="flex items-center justify-center">
          <div className="w-full text-white">
            <div className="flex flex-col items-center justify-center content h-4 -mt-24 phone2:-mt-20 phone3:-mt-32 tablet1:-mt-20 tablet2:-mt-24">
              <MotionDivLeftToRight>
                <h1 className="font-black text-title2 leading-none w-full desktop1:my-4 phone1:text-title4 text-center phone3:text-title5 tablet1:text-title5 desktop3:text-title6">
                  BEM VINDO AO MUNDO DAS PISCINAS!
                </h1>
                <p className="w-full mt-4 text-center phone1:w-full tablet1:text-paragraph5 phone2 desktop1:my-4 desktop1:w-[80%] desktop1:text-paragraph4 phone1:font-medium phone1:text-paragraph3 phone3:text-title1">
                  Aqui você será atendido por profissionais qualificados que
                  prestarão toda orientação que você precisa.<br /> Continue navegando e
                  encontre o que você precisa!
                </p>
              </MotionDivLeftToRight>
              <div className="w-full phone2:w-full tablet2:w-auto">
              <MotionDivRightToLeft>
                <div className="flex justify-center w-full my-4 phone2:mt-4 desktop3:mt-10">
                  <a
                    href="https://wa.me/55"
                    className="flex flex-row items-center justify-around w-full h-16 transition rounded-lg bg-red-700 hover:bg-red-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex justify-around text-center p-4">
                      <img
                        src={WhatsAppIcon}
                        className="h-20 phone3:h-24 mr-4 phone2:ml-4"
                        alt="WhatsApp Icon"
                      />
                      <div className="flex items-center">
                        <p className="leading-none text-white text-title1 whitespace-normal">
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
