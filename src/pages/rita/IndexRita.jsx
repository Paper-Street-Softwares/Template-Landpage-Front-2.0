import ContactBarSection from "../../components/sections/ContactBarSection";
import Faq from "../../components/sections/Faq";
import Footer from "../../components/sections/Footer";
import Numbers from "../../components/sections/Numbers";
import TrustedBy from "../../components/sections/TrustedBy";

export default function IndexRita() {
  return (
    <div>
      <ContactBarSection />
      <TrustedBy />
      <Numbers />
      <Faq />
      <Footer />
    </div>
  );
}
