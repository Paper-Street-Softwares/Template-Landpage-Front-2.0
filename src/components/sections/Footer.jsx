import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import mpaLogo from "../../assets/importAssets/Logo.png";

function Footer() {
  return (
    <footer className="bg-blue-800 full gap-y-[28px]  text-white font-mainFont text-left text-paragraph3 flex flex-col py-[28px] justify-between">
      <div className="bg-red-900 w-[88%] flex flex-col gap-y-[42px] ">
        <div className="flex flex-col bg-yellow-600 gap-y-[16px]">
          <img src={mpaLogo} className="w-[109px] h-[115px]"></img>
          <p className="full">Na sua piscinas fazemos tudo, você nada!</p>
          <div className="flex full gap-x-[8px] items-center">
            <div className="w-[24px] h-[24px] bg-blue-600"></div>
            <p>(11) 9.9488-9426</p>
          </div>
          <div className="flex full gap-x-[8px] items-center">
            <div className="w-[24px] h-[24px] bg-blue-600"></div>
            <p>contato@mpapiscinas.com.br</p>
          </div>
        </div>
        <div className="bg-green-600">Section Sobre</div>
        <div className="bg-blue-600">Section Navegação</div>
      </div>
      <div className="bg-red-900 w-[88%]">Section Créditos</div>
    </footer>
  );
}

export default Footer;
