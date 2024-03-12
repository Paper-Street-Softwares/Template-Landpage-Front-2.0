import bgImg from "../assets/importAssets/bg2.jpg";
import BlankParallaxe from "../components/sectionElements/BlankParallaxe";
import AboutUs from "../components/sections/AboutUs";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BannersCarousel from "../components/sections/BannersCarousel";
import OurProducts from "../components/sections/OurProducts";
import FrequentlyAskedQuestions from "../components/sections/FrenquentlyAskedQuestions";

export default function ImportPage() {
  return (
    <div className="content">
      <AboutUs />
      <OurProducts />
      <BlankParallaxe bgImg={bgImg} />
      <BannersCarousel />
      <BackToTopButton />
      <FrequentlyAskedQuestions />
      <FloatingWhatsappButton />
    </div>
  );
}
