import Faq from "../components/sections/Faq";
import About from "../components/sections/About";
import Footer from "../components/sections/Footer";
import Numbers from "../components/sections/Numbers";
import Services from "../components/sections/Services";
import Features from "../components/sections/Features";
import TrustedBy from "../components/sections/TrustedBy";
import CtaWhatsapp from "../components/sections/CtaWhatsapp";
import NavbarSection from "../components/sections/NavbarSection";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import HeroBgLeft from "../components/sections/HeroBgLeft";
import FooterSocial from "../components/sections/FooterSocial";
import AboutMockUpSocial from "../components/sections/AboutMockUpSocial";

export default function Index() {
  return (
    <div>
      <NavbarSection />
      <HeroBgLeft />
      <Features />
      <Services />
      <Numbers />
      <About />
      <AboutMockUpSocial />
      <CtaWhatsapp />
      <TrustedBy />
      <Faq />
      <FooterSocial />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
