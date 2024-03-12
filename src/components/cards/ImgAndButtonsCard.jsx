export default function ImgAndButtonsCard(props) {
  const { img, button1Label, button1Link, button2Label, button2Link } = props;

  return (
    <div className="w-full bg-white p-[15px] rounded-[10px] flex flex-col gap-[15px]">
      <div className="flex justify-center h-[125px]">
        <img src={img} alt="hthLogo" />
      </div>

      <a href={button1Link} target="_blank" className="w-full">
        <button className="text-white bg-red-700 rounded-[10px] py-[8px] px-[31px] font-mainFont font-bold w-full">
          {button1Label}
        </button>
      </a>

      <a href={button2Link} target="_blank" className="w-full">
        <button className="text-white bg-red-700 rounded-[10px] py-[8px] px-[31px] font-mainFont font-bold w-full">
          {button2Label}
        </button>
      </a>
    </div>
  );
}
