import { Link } from "react-scroll";
import mpaLogo from "../../assets/importAssets/Logo.webp";
import { Phone, Mail } from "lucide-react";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivUpToDown from "../animation/MotionDivUpToDown";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import whatsappNumber from "../../abstractions/whats";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

function Footer() {
  return (
    <footer className="bg-secondary full gap-y-[42px]  text-white font-secondFont text-left text-paragraph4 flex flex-col py-[26px] phone3:py-[48px] justify-between items-center">
      <div className=" w-[90%] max-w-[1215px] flex flex-col gap-y-[42px]  desktop1:flex-row desktop1:justify-between">
        <MotionDivLeftToRight>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <img
              alt="Logo"
              src=""
              className="w-[109px] h-[115px] bg-gray-300"
            ></img>
            <p className="full">
              Rita Almeida: Transformando desejos em endereços.
            </p>
            <div className="flex full gap-x-[8px] items-center">
              <Phone
                size={24}
                aria-label="Ícone de Telefone"
                strokeWidth={1}
                className="text-white"
              />
              <a
                href={whatsappContactLink}
                target="_blank"
                className="hover:underline"
              >
                (87) 98812-4109
              </a>
            </div>
            <div className="flex full gap-x-[8px] items-center">
              <Mail
                size={24}
                aria-label="Ícone de Carta"
                strokeWidth={1}
                className="text-white"
              />
              <p>rcsalmeida2@yahoo.com.br</p>
            </div>
          </div>
        </MotionDivLeftToRight>
        <MotionDivUpToDown>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              SOBRE
            </h1>
            <div className="flex full gap-x-[8px] items-center">
              <p className="text-title4">👋</p>
              <p>Obrigada pela confiança!</p>
            </div>
            <div className="flex full gap-x-[8px] items-center">
              <p className="text-title4">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-bookmark"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
              </p>
              <p>Salve caso queira mais tarde!</p>
            </div>
          </div>
        </MotionDivUpToDown>
        <MotionDivRightToLeft>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              NAVEGAÇÃO
            </h1>
            <div className="flex justify-between full">
              <div className="w-[46%] flex flex-col gap-y-[16px] font-semibold ">
                <div className="h-[36px] ">
                  <Link
                    to="home"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    href="#"
                  >
                    Início
                  </Link>
                </div>
                <div className="h-[36px] ">
                  <Link
                    to="about"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    href="#"
                  >
                    Imóveis
                  </Link>
                </div>
              </div>
              <div className=" w-[46%] flex flex-col gap-y-[16px] font-semibold ">
                <div className="h-[36px] ">
                  <Link
                    to="courses"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    href="#"
                  >
                    Sobre Mim
                  </Link>
                </div>
                <div className="h-[36px] ">
                  <Link
                    to="faq"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    href="#"
                  >
                    Perguntas Frequentes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionDivRightToLeft>
      </div>

      <div className="hidden w-[88%] max-w-[1110px] h-px bg-white"></div>

      <div className="text-center w-[88%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-0">
        <MotionDivUpToDown>
          <p className="w-full">
            2024 - Rita Almeida Corretora de Imóveis - Todos os direitos
            reservados
          </p>
          <p>
            <a
              className="transition hover:underline"
              target="_blank"
              href="https://www.paperstreet.com.br"
            >
              {" "}
              Gostaria de ter um site como este? Clique aqui
            </a>
          </p>
        </MotionDivUpToDown>
      </div>
    </footer>
  );
}

export default Footer;
