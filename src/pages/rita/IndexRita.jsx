import Faq from "../../components/sections/Faq";
import Footer from "../../components/sections/Footer";
import Numbers from "../../components/sections/Numbers";
import TrustedBy from "../../components/sections/TrustedBy";
import Featuresv2 from "../../components/sections/Featuresv2";
import HeroSection from "../../components/sections/HeroSection";
import AboutImgLeft from "../../components/sections/AboutImgLeft";
import NavbarSection from "../../components/sections/NavbarSection";
import FloatingWhatsappButton from "../../components/interactives/FloatingWhatsappButton";
import BackToTopButton from "../../components/interactives/BackToTopButton";
import CtaWhatsapp from "../../components/sections/CtaWhatsapp";

export default function IndexRita() {
  return (
    <div>
      <NavbarSection />
      <HeroSection />
      <TrustedBy />
      <Numbers />
      <AboutImgLeft />
      <Featuresv2 />
      <CtaWhatsapp />
      <Faq />
      <Footer />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
