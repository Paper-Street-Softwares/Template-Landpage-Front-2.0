import NavbarSection from "../components/sections/NavbarSection";
import HeroProducts from "../components/sections/HeroProducts"
import Footer from "../components/sections/Footer";
import ProductsList from "../components/sections/ProductsList";

export default function HthProducts() {
  return (
    <div className="content">
      <NavbarSection />
      <HeroProducts />
      <ProductsList />
      <Footer />
    </div>
  );
}
