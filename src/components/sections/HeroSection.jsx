import bgImage from "../../assets/importAssets/bg2.jpg";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.png";
import whatsappNumber from "../../abstractions/whats";

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
            <div className="h-40 desktop3:h-52" />
            <div className="flex flex-col mx-auto mb-[40px] w-[88%] max-w-[1110px] items-center gap-10 tablet2:gap-14 desktop3:gap-20">
              <MotionDivLeftToRight>
                <div className="font-black leading-none text-center text-title3 phone1:text-title5 phone3:text-title6 tablet1:text-title7 desktop2:text-title7">
                  <h1>BEM VINDO AO MUNDO DAS PISCINAS!</h1>
                </div>
              </MotionDivLeftToRight>
              <MotionDivLeftToRight>
                <div className="text-center phone1:w-full phone1:font-medium phone1:text-paragraph4">
                  <p>
                    Aqui você será atendido de forma humanizada por
                    profissionais qualificados e preparados para esclarecer suas
                    dúvidas.
                    <br /> Continue navegando e encontre o que você procura.
                  </p>
                </div>
              </MotionDivLeftToRight>
              <div className="w-full phone2:w-full tablet2:w-auto">
                <MotionDivRightToLeft>
                  <div className="flex justify-center w-full">
                    <a
                      href={whatsappContactLink}
                      className="flex flex-row items-center justify-around w-auto h-16 transition rounded-lg bg-primary hover:bg-tertiary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex p-4 text-center">
                        <img
                          src={WhatsAppIcon}
                          className="h-10 mr-[8px]"
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
          </div>
        </div>
      </div>
    </div>
  );
}
