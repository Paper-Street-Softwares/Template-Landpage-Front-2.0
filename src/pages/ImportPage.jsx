import AboutUs from "../components/sections/AboutUs";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BannersCarousel from "../components/sections/BannersCarousel";
import OurProducts from "../components/sections/OurProducts";
import FrequentlyAskedQuestions from "../components/sections/FrenquentlyAskedQuestions";
import Courses from "../components/sections/Courses";
import AvoidAccidents from "../components/sections/AvoidAcidents";
import Numbers from "../components/sections/Numbers";
import NavbarSection from "../components/sections/NavbarSection";
import HeroSection from "../components/sections/HeroSection";
import CtaWhatsapp from "../components/sections/CtaWhatsapp";
import ProductsList from "../components/sections/ProductsList";
import Footer from "../components/sections/Footer";

export default function ImportPage() {
  return (
    <div className="content">
      <NavbarSection />
      <HeroSection />
      <AboutUs />
      <Numbers />
      <OurProducts />
      <AvoidAccidents />
      <CtaWhatsapp />
      <ProductsList />
      <Courses />
      <BannersCarousel />
      <BackToTopButton />
      <FrequentlyAskedQuestions />
      <FloatingWhatsappButton />
      <Footer />
    </div>
  );
}
