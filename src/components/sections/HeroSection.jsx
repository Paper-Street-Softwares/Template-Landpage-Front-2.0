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
        className="w-full h-auto bg-center bg-cover"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="flex items-center">
          <div className="w-full text-white ">
            <div className="h-40 tablet2:h-36" />
            <div className="flex flex-col mx-auto w-[88%] max-w-[1110px] items-center gap-6 mb-10 justify-evenly">
              <MotionDivLeftToRight>
                <div className="font-black leading-none text-center text-title2 phone1:text-title4 phone3:text-title5 tablet1:text-title6 desktop2:text-title6">
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
                          className="h-10 phone2:mr-2 phone3:mr-4"
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
