import PropTypes from "prop-types";

export default function ImgCodeDescButtonCard(props) {
  const { img, button1Label, button1Link, description, code } = props;

  ImgCodeDescButtonCard.propTypes = {
    img: PropTypes.any,
    description: PropTypes.any,
    button1Label: PropTypes.any,
    button1Link: PropTypes.any,
    code: PropTypes.any,
    category: PropTypes.any,
  };

  return (
    <div className="w-full phone3:w-[46%] tablet1:w-[47%] desktop3:w-[31%] bg-white p-[15px] rounded-[10px] flex flex-col gap-[10px]">
      <div className="flex justify-center items-center h-[200px] phone3:h-[200px] tablet1:h-[200px]">
        <img src={img} alt="hthLogo" className="max-h-[190px] max-w-[150px]" />
      </div>

      <p className="font-medium text-left font-mainFont text-paragraph3 text-quaternary">
        Código: {code}
      </p>
      <h3 className="font-medium text-left text-black font-mainFont text-paragraph3">
        Descrição
      </h3>
      <p className="text-left font-mainFont text-paragraph3 text-quaternary">
        {description}
      </p>
      <a href={button1Link} target="_blank" className="w-full">
        <button className="text-white bg-red-700 rounded-[10px] py-[8px] px-[31px] text-paragraph3 font-mainFont font-medium w-full transition hover:bg-red-900">
          {button1Label}
        </button>
      </a>
    </div>
  );
}
