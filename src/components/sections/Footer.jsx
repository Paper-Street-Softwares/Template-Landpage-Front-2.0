import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";

function Footer() {
  return (
    <footer className="full bg-secondary text-white font-mainFont text-center text-paragraph3 flex flex-col py-[28px] justify-between">
      <div className="content flex flex-col justify-between h-[100%] ">
        <MotionDivLeftToRight>
          <p className="my-[5%] tablet1:my-[3%] tablet2:my-[2%]">
            Na sua piscina fazemos tudo, você nada!
          </p>
        </MotionDivLeftToRight>
        <MotionDivRightToLeft>
          <p className="my-[5%] tablet1:my-[3%] desktop3:my-[2%]">
            2024 - MPA Piscinas - Todos os direitos reservados - Website
            desenvolvido por Paper Street Softwares
          </p>
        </MotionDivRightToLeft>
      </div>
    </footer>
  );
}

export default Footer;
