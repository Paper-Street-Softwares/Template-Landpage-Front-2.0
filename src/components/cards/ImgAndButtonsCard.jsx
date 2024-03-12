export default function ImgAndButtonsCard(props) {
  const { img, button1Label, button1Link, button2Label, button2Link } = props;

  return (
    <div className="w-full tablet1:w-[45%] desktop1:w-[23%]  bg-white p-[15px] my-[14px] rounded-[10px] flex flex-col gap-[15px]">
      <div className="flex justify-center h-[125px] w-full">
        <img src={img} alt="hthLogo" className="" />
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
