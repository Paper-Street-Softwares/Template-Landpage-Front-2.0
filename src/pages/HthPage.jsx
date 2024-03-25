import NavbarSection from "../components/sections/NavbarSection";
import HeroHth from "../components/sections/HeroHth"
import Footer from "../components/sections/Footer";
import ProductsList from "../components/sections/ProductsList";

export default function HthPage() {
  return (
    <div className="content">
      <NavbarSection />
      <HeroHth />
      <ProductsList />
      <Footer />
    </div>
  );
}
