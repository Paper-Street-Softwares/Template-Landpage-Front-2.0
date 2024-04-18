import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import Footer from "../components/sections/Footer";
import HidroazulProductsList from "../components/sections/HidroazulProductsList";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import imgLogo from "../assets/imgs/brands/hidroazulLogo.png";

export default function HidroazulPage() {
  return (
    <div className="content">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de produtos"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
        alt="logo HIDROAZUL"
      />
      <HidroazulProductsList />
      <BackToTopButton />
      <FloatingWhatsappButton />
      <Footer />
    </div>
  );
}
