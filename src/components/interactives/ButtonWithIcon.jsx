export default function ButtonWithIcon(props) {
  const { icon, label } = props;

  return (
    <button
      onClick={() => window.open(whatsappContactLink, "_blank")}
      className="flex flex-row items-center justify-around w-auto transition rounded-[40px] px-[30px] py-[16px] bg-black hover:bg-black"
    >
      <div className="flex items-center text-center gap-[20px]">
        <div className="">{icon}</div>
        <p className="flex items-center text-white text-paragraph4 font-mainFont">
          {label}
        </p>
      </div>
    </button>
  );
}
