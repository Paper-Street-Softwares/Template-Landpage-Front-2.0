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
        className="relative w-full bg-center bg-cover desktop1:h-[600px] "
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <svg
          id="wave"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            transform: "rotate(0deg)",
            transition: "0.3s",
          }}
          viewBox="0 0 1440 55"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(255, 255, 255, 1)" offset="0%"></stop>
              <stop stopColor="rgba(255, 255, 255, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,0L48,11.7C96,23,192,47,288,46.7C384,47,480,23,576,15C672,7,768,13,864,23.3C960,33,1056,47,1152,45C1248,43,1344,27,1440,23.3C1536,20,1632,30,1728,43.3C1824,57,1920,73,2016,76.7C2112,80,2208,70,2304,68.3C2400,67,2496,73,2592,63.3C2688,53,2784,27,2880,18.3C2976,10,3072,20,3168,28.3C3264,37,3360,43,3456,40C3552,37,3648,23,3744,23.3C3840,23,3936,37,4032,40C4128,43,4224,37,4320,31.7C4416,27,4512,23,4608,18.3C4704,13,4800,7,4896,5C4992,3,5088,7,5184,21.7C5280,37,5376,63,5472,68.3C5568,73,5664,57,5760,45C5856,33,5952,27,6048,30C6144,33,6240,47,6336,51.7C6432,57,6528,53,6624,55C6720,57,6816,63,6864,66.7L6912,70L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
        <div className="flex items-center">
          <div className="w-full text-white justify-evenly">
            <div className="h-40 desktop3:h-46" />
            <div className="flex flex-col desktop1:flex-row mx-auto mb-[40px] w-[88%] max-w-[1110px] items-center gap-10 tablet2:gap-14 desktop3:gap-20">
              <div className="desktop1:w-[650px] flex flex-col gap-8">
                <MotionDivLeftToRight>
                  <div className="font-black leading-none text-center desktop1:text-left text-title3 phone1:text-title5 phone3:text-title6 tablet1:text-title7 desktop1:text-[40px]">
                    <h1>BEM VINDO AO MUNDO DAS PISCINAS!</h1>
                  </div>
                </MotionDivLeftToRight>
                <MotionDivLeftToRight>
                  <div className="text-center desktop1:text-left phone1:w-full phone1:font-medium phone1:text-paragraph4">
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
                    <div className="flex justify-center w-full desktop1:justify-start">
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
              <div className="desktop1:w-[510px]  desktop1:h-[350px] flex items-center">
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
