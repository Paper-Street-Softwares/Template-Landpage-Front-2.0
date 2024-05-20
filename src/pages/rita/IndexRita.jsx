import ContactBarSection from "../../components/sections/ContactBarSection";
import Faq from "../../components/sections/Faq";
import Footer from "../../components/sections/Footer";
import Numbers from "../../components/sections/Numbers";
import TrustedBy from "../../components/sections/TrustedBy";
import HeroSection from "../../components/sections/HeroSection";
import NavbarSection from "../../components/sections/NavbarSection";
import Featuresv1 from "../../components/sections/Featuresv1";
import Featuresv2 from "../../components/sections/Featuresv2";
import AboutImgLeft from "../../components/sections/AboutImgLeft";
import AboutImgRight from "../../components/sections/AboutImgRight";
import ResponsiveDemo from "../../components/interactives/Modal";


export default function IndexRita() {
  return (
    <div>
      <ContactBarSection />
      <NavbarSection />
      <HeroSection />
      <Featuresv1 />
      <Featuresv2 />
      <AboutImgLeft />
      <AboutImgRight />
      <Numbers />
      <ResponsiveDemo />
      <TrustedBy />
      <Faq />
      <Footer />
    </div>
  );
}
