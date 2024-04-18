import { Link } from "react-scroll";
import mpaLogo from "../../assets/importAssets/Logo.png";
import { Phone, Mail } from "lucide-react";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivUpToDown from "../animation/MotionDivUpToDown";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function Footer() {
  return (
    <footer className="bg-secondary full gap-y-[42px]  text-white font-mainFont text-left text-paragraph3 flex flex-col py-[28px] justify-between items-center">
      <div className=" w-[88%] max-w-[1110px] flex flex-col gap-y-[42px]  desktop1:flex-row desktop1:justify-between">
        <MotionDivLeftToRight>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <img
              alt="Logo MPA Piscinas"
              src={mpaLogo}
              className="w-[109px] h-[115px]"
            ></img>
            <p className="full">Na sua piscinas fazemos tudo, você nada!</p>
            <div className="flex full gap-x-[8px] items-center">
              <Phone size={24} strokeWidth={1} className="text-white" />
              <a
                href="https://wa.me/+5511994889426"
                target="_blank"
                className="underline"
              >
                (11) 9.9488-9426
              </a>
            </div>
            <div className="flex full gap-x-[8px] items-center">
              <Mail size={24} strokeWidth={1} className="text-white" />
              <p>contato@mpapiscinas.com.br</p>
            </div>
          </div>
        </MotionDivLeftToRight>
        <MotionDivUpToDown>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              SOBRE
            </h1>
            <p>
              Agradecemos sua visita! Esperamos que em breve você se torne nosso
              cliente e desfrute de todos os benefícios que oferecemos.
            </p>
          </div>
        </MotionDivUpToDown>
        <MotionDivRightToLeft>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              NAVEGAÇÃO
            </h1>
            <div className="flex justify-between full">
              <div className="w-[46%] flex flex-col gap-y-[16px] text-paragraph3 font-semibold ">
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
                    Sobre nós
                  </Link>
                </div>
                <div className="h-[36px] ">
                  <Link
                    to="products"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    href="#"
                  >
                    Produtos e Acessórios
                  </Link>
                </div>
              </div>
              <div className=" w-[46%] flex flex-col gap-y-[16px] text-paragraph3 font-semibold ">
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
                    Cursos e Palestras
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
                <div className="h-[36px] ">
                  <Link
                    to="contact"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-190}
                    href="#"
                  >
                    Contato
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionDivRightToLeft>
      </div>

      <div className="w-[88%] max-w-[1110px] h-px bg-white"></div>

      <div className="text-center w-[88%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-0">
        <MotionDivUpToDown>
          <p className="w-full">
            2024 - MPA Piscinas - Todos os direitos reservados
          </p>
          <p className="">
            Gostaria de ter um site como este?{" "}
            <a
              className="underline"
              target="_blank"
              href="https://www.paperstreet.com.br"
            >
              Clique aqui
            </a>
          </p>
        </MotionDivUpToDown>
      </div>
    </footer>
  );
}

export default Footer;
