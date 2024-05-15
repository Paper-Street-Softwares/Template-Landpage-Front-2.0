import ButtonWithIcone from "../interactives/ButtonWithIcon";

export default function FeatureCard(props) {
  const { img, title, description } = props;

  return (
    <div className="bg-white p-[36px] rounded-2xl desktop1:w-[30%] flex flex-col tablet1:flex-row gap-[36px] desktop1:flex-col w-full">
      <img
        src={img}
        alt=""
        className="tablet1:w-[50%] desktop1:w-full h-auto rounded-2xl"
      />
      <div className="">
        <h1 className="font-mainFont text-[32px] leading-[36px] mb-[16px]">
          {title}
        </h1>
        <p className="font-secondFont text-paragraph4 mb-[36px] text-quaternary">
          {description}
        </p>
        <ButtonWithIcone label="Saiba mais" />
      </div>
    </div>
  );
}
