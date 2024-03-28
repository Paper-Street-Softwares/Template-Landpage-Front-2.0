import NavbarSectionProducts from "../components/sections/NavbarSectionProducts";
import Footer from "../components/sections/Footer";
import ProductsList from "../components/sections/ProductsList";
import HeroProducts from "../components/sectionElements/HeroProducts";

export default function HthPage() {
  return (
    <div className="content">
      <NavbarSectionProducts />
      <HeroProducts
        heroTitle="Nossa linha de produtos"
        heroName="HTH"
        heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
      />
      <ProductsList />
      <Footer />
    </div>
  );
}
