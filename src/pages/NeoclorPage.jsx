import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import FooterProducts from "../components/sections/FooterProducts";
import NeoclorProductsList from "../components/sections/NeoclorProductsList";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import imgLogo from "../assets/imgs/brands/neoclorLogo.png";

export default function NeoclorPage() {
  return (
    <div className="w-full">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de produtos"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontra os produtos para o tratamento da água da sua piscina"
      />
      <div className="flex flex-col mx-auto">
        <NeoclorProductsList />
        <BackToTopButton />
        <FloatingWhatsappButton />
        <FooterProducts />
      </div>
    </div>
  );
}
