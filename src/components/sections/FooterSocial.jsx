import { Link } from "react-scroll";
import { Phone, Mail } from "lucide-react";
import links from "../../content/links";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import infos from "../../content/infos.jsx";
import content from "../../content/content";
import IconButton from "../interactives/IconButton";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

function FooterSocial() {
  return (
    <footer className="bg-darker full gap-y-[42px]  text-secondary font-secondFont text-left text-paragraph4 flex flex-col py-[26px] phone3:py-[48px] justify-between items-center">
      <div className=" w-[90%] max-w-[1215px] flex flex-col gap-y-[80px]  desktop1:flex-row desktop1:justify-between">
        <MotionDivDownToUp>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px] text-paragraph3">
            <div className="h-[115px] flex items-center">
              <img
                src={content.texts.navbar.logo.img}
                alt={content.texts.navbar.logo.alt}
                className="w-[80%] tablet1:w-[50%] desktop1:w-[80%] invert"
              ></img>
            </div>
            <div className="flex full gap-x-[12px] items-center opacity-70">
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
            <div className="flex full gap-x-[12px] items-center opacity-70">
              <Mail
                size={24}
                aria-label="Ícone de Carta"
                strokeWidth={1}
                className="text-secondary"
              />
              <p>{infos.mail}</p>
            </div>
            <div className="flex full gap-x-[12px] items-center opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-calendar-days"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              <p>{infos.footerInfos.expediente}</p>
            </div>
            <div className="flex full gap-x-[12px] items-center opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p>{infos.footerInfos.endereco}</p>
            </div>
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              ATÉ MAIS! 😉
            </h1>
            <p className="opacity-70">{infos.footerInfos.footerText}</p>
            <p className="opacity-70">Siga a gente nas redes sociais:</p>
            <div className="opacity-70">
              {" "}
              <div className="flex gap-[10px] items-center">
                <a
                  href={links.socialMedia.instagram}
                  target="_blank"
                  aria-label="Link para o Instagram"
                >
                  <IconButton
                    ariaLabel="Botão para o Instagram"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-instagram"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    }
                  />
                </a>
                <a
                  href={links.socialMedia.facebook}
                  target="_blank"
                  aria-label="Link para o Facebook"
                >
                  <IconButton
                    ariaLabel="Botão para o Facebook"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      
                    }
                  />
                </a>
                {/* <a href={links.socialMedia.linkedin} target="_blank">
                  <IconButton
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    }
                  />
                </a> */}
              </div>
            </div>
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
                    <span className="inline-block h-[24px]">
                      {content.texts.navbar.menuItems[0]}
                    </span>
                  </Link>
                </div>
                <div className="h-[36px] hover:underline">
                  <Link
                    to="service"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    href="#"
                  >
                    <span className="inline-block h-[24px]">
                      {content.texts.navbar.menuItems[2]}
                    </span>
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
                    offset={-20}
                    href="#"
                  >
                    <span className="inline-block h-[24px]">
                      {content.texts.navbar.menuItems[1]}
                    </span>
                  </Link>
                </div>
                <div className="h-[36px] hover:underline">
                  <Link
                    to="faq"
                    className="cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    href="#"
                  >
                    <span className="inline-block h-[48px]">
                      {content.texts.navbar.menuItems[3]}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionDivDownToUp>
      </div>

      <div className="hidden w-[88%] max-w-[1110px] h-px bg-secondary"></div>

      <div className="text-center w-[88%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-0">
        <p className="w-full opacity-75">
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

export default FooterSocial;
