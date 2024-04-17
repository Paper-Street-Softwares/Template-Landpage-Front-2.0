import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import Footer from "../components/sections/Footer";
import NetunoProductsList from "../components/sections/NetunoProductsList";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import imgLogo from "../assets/imgs/brands/netunoLogo.png";

export default function NetunoPage() {
  return (
    <div className="w-full">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de acessórios"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
      />
      <div className="flex flex-col mx-auto">
      <NetunoProductsList />
      <BackToTopButton />
      <FloatingWhatsappButton />
      <Footer />
      </div>
    </div>
  );
}
