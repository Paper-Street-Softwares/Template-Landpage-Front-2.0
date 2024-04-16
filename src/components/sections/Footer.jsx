import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import mpaLogo from "../../assets/importAssets/Logo.png";
import { Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-secondary full gap-y-[42px]  text-white font-mainFont text-left text-paragraph3 flex flex-col py-[28px] justify-between">
      <div className=" w-[88%] flex flex-col gap-y-[42px] ">
        <div className="flex flex-col gap-y-[16px]">
          <img
            alt="Logo MPA Piscinas"
            src={mpaLogo}
            className="w-[109px] h-[115px]"
          ></img>
          <p className="full">Na sua piscinas fazemos tudo, você nada!</p>
          <div className="flex full gap-x-[8px] items-center">
            <Phone size={24} strokeWidth={1} className="text-white" />
            <p>(11) 9.9488-9426</p>
          </div>
          <div className="flex full gap-x-[8px] items-center">
            <Mail size={24} strokeWidth={1} className="text-white" />
            <p>contato@mpapiscinas.com.br</p>
          </div>
        </div>
        <div className="flex flex-col  gap-y-[16px]">
          <h1 className="font-medium text-title2">SOBRE</h1>
          <p>
            Agradecemos sua visita! Esperamos que em breve você se torne nosso
            cliente e desfrute de todos os benefícios que oferecemos.
          </p>
        </div>
        <div className="flex flex-col  gap-y-[16px]">
          <h1 className="font-medium text-title2">NAVEGAÇÃO</h1>
          <div className="flex justify-between full">
            <div className="w-[46%] flex flex-col gap-y-[16px] text-paragraph3">
              <a href="#" className="font-semibold h-[36px] ">
                Início
              </a>
              <a href="#" className="font-semibold h-[36px]">
                Sobre nós
              </a>
              <a href="#" className="font-semibold h-[36px]">
                Produtos e Acessórios
              </a>
            </div>
            <div className=" w-[46%] flex flex-col gap-y-[16px] text-paragraph3">
              <a href="#" className="font-semibold h-[36px] ">
                Curso e Palestras
              </a>
              <a href="#" className="font-semibold h-[36px]">
                Perguntas Frequentes
              </a>
              <a href="#" className="font-semibold h-[36px]">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center w-[88%] flex flex-col">
        <p className="w-full">
          2024 - MPA Piscinas - Todos os direitos reservados
        </p>
        <p>
          Gostaria de ter um site como este?{" "}
          <a
            className="underline"
            target="_blank"
            href="https://www.paperstreet.com.br"
          >
            Clique aqui
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
