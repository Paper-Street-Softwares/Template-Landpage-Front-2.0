import SectionContent from "../sectionElements/SectionContent";
import imgCta from "../../assets/imgs/cta/person.png";
import imgBackground from "../../assets/imgs/paralaxe/bgOffice.png";
import MotionDivUpToDown from "../animation/MotionDivUpToDown";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import whatsappNumber from "../../abstractions/whats";
import ButtonWithIcon from "../interactives/ButtonWithIcon";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

export default function CtaWhatsapp() {
  return (
    <div
      className="mt-12 phone1:mt-[15%] phone2:mt-[20%] phone3:mt-[20%] bg-center bg-cover tablet1:mt-28"
      style={{
        backgroundImage: `url(${imgBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "",
      }}
      id="contact"
    >
      <SectionContent>
        <div className="flex justify-center w-full font-mainFont">
          <div className="w-[88%] max-w-[1110px] flex flex-row items-end justify-between h-28 phone1:h-40 phone3:h-48 desktop1:h-80">
            <div className="flex flex-col w-full  justify-evenly items-left h-28 phone1:h-40 phone3:h-48 desktop1:h-52 desktop1:mb-[70px]">
              <h1 className="text-left text-white text-paragraph1 phone1:text-paragraph4 phone3:text-paragraph5 max-w-32 phone3:max-w-none font-poppins tablet1:text-title2 tablet2:text-title4 desktop1:text-title5 desktop2:text-title6">
                <MotionDivUpToDown>
                  <p className="mb-[20px]">
                    Simule e contrate agora mesmo
                    <br />o seu <strong>seguro</strong>
                  </p>
                </MotionDivUpToDown>
              </h1>
              <MotionDivDownToUp>
                <div className="w-full">
                  <ButtonWithIcon
                    label="Fazer simulação"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-whatsapp"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
                    }
                  />
                </div>
              </MotionDivDownToUp>
            </div>
            <div className="phone1:min-h-[197px] phone1:max-h-[229.39px] phone2:min-h-[229.40px] phone2:max-h-[261px] phone3:min-h-[262px] phone3:max-h-[334px] tablet1:min-h-[235px] tablet1:max-h-[292px] tablet2:min-h-[292px] tablet2:max-h-[335px] desktop1:min-h-[335px] desktop3:max-h-[335px] w-[90%] max-w-40 phone1:w-[100%] phone1:max-w-none phone3:max-w-60 tablet1:w-[45%]">
              <MotionDivDownToUp>
                <img alt="Foto Pessoa" src={imgCta} />
              </MotionDivDownToUp>
            </div>
          </div>
        </div>
      </SectionContent>
    </div>
  );
}
