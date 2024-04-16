import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";

function Footer() {
  return (
    <footer className="bg-blue-800 full gap-y-[28px]  text-white font-mainFont text-left text-paragraph3 flex flex-col py-[28px] justify-between">
      <div className="bg-red-900 w-[88%] flex flex-col gap-y-[42px] ">
        <div className="bg-yellow-600">Section Logo</div>
        <div className="bg-green-600">Section Sobre</div>
        <div className="bg-blue-600">Section Navegação</div>
      </div>
      <div className="bg-red-900 w-[88%]">Section Créditos</div>
    </footer>
  );
}

export default Footer;
