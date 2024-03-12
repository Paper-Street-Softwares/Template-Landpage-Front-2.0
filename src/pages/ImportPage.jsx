import bgImg from "../assets/importAssets/bg.jpg";
import BlankParallaxe from "../components/sectionElements/BlankParallaxe";
import MarginBetweenSection from "../components/sectionElements/MarginBetweenSection";
import AboutUs from "../components/sections/AboutUs";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BannersCarousel from "../components/sections/BannersCarousel";
import FAQ from "../components/sections/FAQ";
import OurProducts from "../components/sections/OurProducts";

export default function ImportPage() {
  return (
    <div className="content">
      <MarginBetweenSection />
      <OurProducts />
      <MarginBetweenSection />
      <AboutUs />
      <MarginBetweenSection />
      <BlankParallaxe bgImg={bgImg} />
      <MarginBetweenSection />
      <BannersCarousel />
      <MarginBetweenSection />
      <FAQ />
      <BackToTopButton />
      <FloatingWhatsappButton />
      <MarginBetweenSection />
    </div>
  );
}
