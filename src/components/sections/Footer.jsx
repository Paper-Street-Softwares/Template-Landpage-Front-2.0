import { Link } from "react-scroll";
import { Phone, Mail } from "lucide-react";
import links from "../../content/links";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import infos from "../../content/infos.jsx";
import content from "../../content/content";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

function Footer() {
  return (
    <footer className="bg-darker full gap-y-[42px] text-secondary font-secondFont text-left text-paragraph4 flex flex-col py-[26px] phone3:py-[48px] justify-between items-center">
      <div className=" w-[90%] max-w-[1215px] flex flex-col gap-y-[80px]  desktop1:flex-row desktop1:justify-between">
        <MotionDivDownToUp>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <div className="h-[115px] flex items-center">
              <img
                src={content.texts.navbar.logo.img}
                alt={content.texts.navbar.logo.alt}
                className="w-[50%] tablet1:w-[50%] desktop1:w-[80%]"
              ></img>
            </div>
            <div className="flex full gap-x-[8px] items-center opacity-70">
              <Phone
                size={24}
                aria-label="Ícone de Telefone"
                strokeWidth={1}
                className="text-secondary"
              />
              <a
                href={whatsappContactLink}
                target="_blank"
                className="hover:underline"
              >
                {infos.phone}
              </a>
            </div>
            <div className="flex full gap-x-[8px] items-center opacity-70">
              <Mail
                size={24}
                aria-label="Ícone de Carta"
                strokeWidth={1}
                className="text-secondary"
              />
              <p>{infos.mail}</p>
            </div>
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              ATÉ MAIS!
            </h1>
            <p className="opacity-70">{infos.footerInfos.footerText}</p>
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              NAVEGAÇÃO
            </h1>
            <div className="flex justify-between full opacity-70 ">
              <div className="w-[46%] flex flex-col gap-y-[16px] font-semibold ">
                <div className="h-[36px] hover:underline">
                  <Link
                    to="home"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    href="#"
                  >
                    {content.texts.navbar.menuItems[0]}
                  </Link>
                </div>
                <div className="h-[36px] hover:underline">
                  <Link
                    to="service"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    href="#"
                  >
                    {content.texts.navbar.menuItems[2]}
                  </Link>
                </div>
              </div>
              <div className=" w-[46%] flex flex-col gap-y-[16px] font-semibold ">
                <div className="h-[36px] hover:underline">
                  <Link
                    to="about"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    href="#"
                  >
                    {content.texts.navbar.menuItems[1]}
                  </Link>
                </div>
                <div className="h-[36px] hover:underline">
                  <Link
                    to="faq"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    href="#"
                  >
                    {content.texts.navbar.menuItems[3]}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionDivDownToUp>
      </div>

      <div className="hidden w-[88%] max-w-[1110px] h-px bg-secondary"></div>

      <div className="text-center w-[88%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-0">
        <p className="w-full opacity-70">
          {`${infos.footerInfos.year} - ${infos.name} - Todos os direitos reservados`}
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
      </div>
    </footer>
  );
}

export default Footer;
