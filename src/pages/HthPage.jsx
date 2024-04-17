import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import Footer from "../components/sections/Footer";
import ProductsList from "../components/sections/ProductsList";
import HeroProducts from "../components/sectionElements/HeroProducts";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import imgLogo from "../assets/imgs/brands/hthLogo.png";

export default function HthPage() {
  return (
    <div className="w-full">
      
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de produtos"
        heroImg={imgLogo}
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
      />
      <div className="w-[88%] max-w-[1110px]">
      <ProductsList />
      <BackToTopButton />
      <FloatingWhatsappButton />
      <Footer />
      </div>
    </div>
  );
}
