import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import Footer from "../components/sections/Footer";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";

export default function HidroazulPage() {
  return (
    <div className="content">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de produtos"
        heroName="Hidroazul"
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
      />
      <BackToTopButton />
      <FloatingWhatsappButton />
      <Footer />
    </div>
  );
}