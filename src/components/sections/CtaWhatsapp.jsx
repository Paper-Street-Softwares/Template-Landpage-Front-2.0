import SectionContent from "../sectionElements/SectionContent";
import imgCta from "../../assets/importAssets/CtaWhatsapp.png";
import imgBackground from "../../assets/importAssets/bg2.jpg";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.png";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";

export default function CtaWhatsapp() {
  return (
    <div
      className="full mt-12 phone1:mt-[15%] phone2:mt-[20%] bg-blue-500 phone3:mt-[20%] bg-center bg-cover tablet1:mt-28 content"
      style={{
        backgroundImage: `url(${imgBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "",
      }}
      id="contact"
    >
      <SectionContent>
        <div className="w-full">
          <div className="flex flex-row items-center justify-between h-28 phone1:h-40 phone3:h-48 desktop1:h-60">
            <div className="flex flex-col w-full justify-evenly items-left h-28 phone1:h-40 phone3:h-48 desktop1:h-52">
              <h1 className="text-left text-white text-paragraph1 phone1:text-paragraph4 phone3:text-paragraph5 max-w-32 phone3:max-w-none font-poppins tablet1:text-title2 tablet2:text-title4 desktop1:text-title5 desktop2:text-title6">
                <MotionDivLeftToRight>
                  Contate-nos através do <strong>Whatsapp</strong>
                </MotionDivLeftToRight>
              </h1>
              <MotionDivLeftToRight>
                <div className="w-full">
                  <a
                    href="https://wa.me/5573999612263"
                    className="flex flex-row items-center justify-around w-[90%] h-8 phone1:h-12 px-1 transition rounded-lg max-w-32 tablet1:h-20 phone3:max-w-48 tablet1:max-w-60 phone3:w-[90%] bg-primary hover:bg-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={WhatsAppIcon}
                      className="h-[45%] phone3:h-[60%] tablet1:h-14"
                      alt="WhatsApp Icon"
                    ></img>
                    <p className="text-white text-paragraph1 phone1:text-paragraph3 phone3:text-paragraph5 tablet1:pr-[3%] tablet1:font-bold desktop1:font-medium tablet1:text-title3">
                      Clique aqui
                    </p>
                  </a>
                </div>
              </MotionDivLeftToRight>
            </div>

            <div className="w-[90%] max-w-40 phone1:w-[100%] phone1:max-w-none phone3:max-w-60 tablet1:w-[45%]">
              <img className="" alt="Foto Edilson" src={imgCta} />
            </div>
          </div>
        </div>
      </SectionContent>
    </div>
  );
}
