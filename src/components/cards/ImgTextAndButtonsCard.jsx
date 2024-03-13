import PropTypes from "prop-types";

export default function ImgTextAndButtonsCard(props) {
  const { img, button1Label, button1Link, text } = props;

  ImgTextAndButtonsCard.propTypes = {
    img: PropTypes.any,
    button1Label: PropTypes.any,
    button1Link: PropTypes.any,
    text: PropTypes.any,
  };

  return (
    <div className="w-full tablet1:w-[45%] desktop1:w-[29%]  bg-white p-[15px] my-[14px] rounded-[10px] flex flex-col gap-[15px]">
      <div className="flex justify-center h-[125px] phone3:h-[80px] tablet1:h-[125px]">
        <img src={img} alt="hthLogo" />
      </div>
      <p className="text-center font-mainFont text-paragraph3 text-quaternary">
        {text}
      </p>
      <a href={button1Link} target="_blank" className="w-full">
        <button className="text-white bg-red-700 rounded-[10px] py-[8px] px-[31px] font-mainFont font-bold w-full transition hover:bg-red-900">
          {button1Label}
        </button>
      </a>
    </div>
  );
}
