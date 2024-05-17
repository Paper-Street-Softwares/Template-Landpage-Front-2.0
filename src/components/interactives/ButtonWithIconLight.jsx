export default function ButtonWithIconLight(props) {
  const { icon, label } = props;

  return (
    <button
      onClick={() => window.open(whatsappContactLink, "_blank")}
      className="flex flex-row items-center justify-around transition rounded-[40px] px-[30px] py-[16px] bg-white hover:bg-white"
    >
      <div className="flex items-center text-center gap-[20px]">
        <div className="">{icon}</div>
        <p className="flex items-center text-black text-paragraph4 font-mainFont">
          {label}
        </p>
      </div>
    </button>
  );
}
