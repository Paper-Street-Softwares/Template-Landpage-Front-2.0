import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import Footer from "../components/sections/Footer";
import SuallProductsList from "../components/sections/SuallProductsList";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import imgLogo from "../assets/imgs/brands/suallLogo.png";

export default function SuallPage() {
  return (
    <div className="content">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de produtos"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
        alt="logo SUALL"
      />
      <SuallProductsList />
      <BackToTopButton />
      <FloatingWhatsappButton />
      <Footer />
    </div>
  );
}
