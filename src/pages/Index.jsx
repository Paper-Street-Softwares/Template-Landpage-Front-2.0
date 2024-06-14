import Faq from "../components/sections/Faq";
import Footer from "../components/sections/Footer";
import Numbers from "../components/sections/Numbers";
import Features from "../components/sections/Features";
import TrustedBy from "../components/sections/TrustedBy";
import Services from "../components/sections/Services";
import CtaWhatsapp from "../components/sections/CtaWhatsapp";
import HeroSlides from "../components/sections/HeroSlides";
import About from "../components/sections/About";
import NavbarSection from "../components/sections/NavbarSection";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import FeaturesButton from "../components/sections/FeaturesButton";

export default function Index() {
  return (
    <div>
      <NavbarSection />
      <HeroSlides />
      <TrustedBy />
      <Numbers />
      <About />
      <Features />
      <FeaturesButton />
      <Services />
      <CtaWhatsapp />
      <Faq />
      <Footer />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
