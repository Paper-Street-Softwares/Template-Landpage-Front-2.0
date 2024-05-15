import ContactBarSection from "../../components/sections/ContactBarSection";
import Faq from "../../components/sections/Faq";
import Footer from "../../components/sections/Footer";
import Numbers from "../../components/sections/Numbers";
import TrustedBy from "../../components/sections/TrustedBy";
import HeroSection from "../../components/sections/HeroSection";
import NavbarSection from "../../components/sections/NavbarSection";
import Featuresv1 from "../../components/sections/Featuresv1";
import Featuresv2 from "../../components/sections/Featuresv2";

export default function IndexRita() {
  return (
    <div>
      <ContactBarSection />
      {/* <NavbarSection /> */}
      <HeroSection />
      <Featuresv1 />
      <Featuresv2 />
      <Numbers />
      <TrustedBy />
      <Faq />
      <Footer />
    </div>
  );
}
