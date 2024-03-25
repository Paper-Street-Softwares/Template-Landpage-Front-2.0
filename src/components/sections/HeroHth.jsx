import bgImage from "../../assets/importAssets/HeroBanner.png";
import HeroProducts from "../sectionElements/HeroProducts";

export default function HeroHth() {
  return (
    <div className="z-10 full font-mainFont">
      <div
        className="w-full bg-center bg-cover"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
          <div className="h-36" />
          <div className="mx-auto content">
            <HeroProducts
            heroTitle="Nossa linha de produtos"
            heroName="HTH"
            heroParagraph="Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina."
            />
            <div className="h-4" />
          </div>
      </div>
    </div>
  );
}
