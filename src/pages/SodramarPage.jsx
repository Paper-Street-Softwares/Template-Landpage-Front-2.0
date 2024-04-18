import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import SodramarProductsList from "../components/sections/SodramarProductsList";
import Footer from "../components/sections/Footer";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import imgLogo from "../assets/imgs/brands/sodramarLogo.png";

export default function SodramarPage() {
  return (
    <div className="content">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de acessórios"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
        alt="Logo da marca da Sodramar"
      />
      <SodramarProductsList />
      <BackToTopButton />
      <FloatingWhatsappButton />
      <Footer />
    </div>
  );
}
