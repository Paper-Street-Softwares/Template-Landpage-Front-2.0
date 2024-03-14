import bgImage from "../../assets/importAssets/HeroBanner.png";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.png";

export default function HeroSection() {
  return (
    <div className="h-full full font-mainFont">
      <div
        className="w-full bg-center bg-cover content min-h-[518px]"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="w-full h-full mt-10 text-white">
          <div className="flex flex-col items-center justify-center mt-24 phone1:mt-40 phone1:h-20 phone3:mt-52">
            <MotionDivLeftToRight>
              <h1 className="font-black leading-none w-[60%] phone1:text-title4 phone1:w-full text-center phone3:text-title5 tablet1:text-title6">
                BEM VINDO AO MUNDO DAS PISCINAS!
              </h1>
              <p className="mt-4 text-center w-[75%] phone1:w-full phone1:font-medium phone1:text-paragraph3 phone3:text-paragraph4 tablet1:text-title1">
                Aqui você será atendido por profissionais qualificados que
                prestarão toda orientação que você precisa. Continue navegando e
                encontre o que você precisa!
              </p>
            </MotionDivLeftToRight>
          </div>
          <div className="w-full mb-20 -mt-10 tablet2:w-auto">
            <MotionDivRightToLeft>
              <div className="flex justify-center w-full phone1:mt-32 phone3:mt-40 phone1:w-full">
                <a
                  href="https://wa.me/55"
                  className="flex flex-row items-center justify-around w-64 h-16 transition rounded-lg bg-primary hover:bg-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex">
                    <img
                      src={WhatsAppIcon}
                      className="h-20 ml-4"
                      alt="WhatsApp Icon"
                    />

                    <div className="flex items-center ml-6">
                      <p className="leading-none text-white text-title1">
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
  );
}
