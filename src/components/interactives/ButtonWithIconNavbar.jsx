export default function ButtonWithIcon(props, className) {
  const { icon, label } = props;

  return (
    <button className="flex flex-row items-center justify-around transition rounded-[40px] px-[18px] py-[10px] bg-black hover:bg-white text-white hover:text-black hover:border-black hover:border-solid border-[1px] border-black">
      <div className="flex items-center text-center gap-[10px]">
        <div className="">{icon}</div>
        <p className="flex items-cente text-paragraph3 font-mainFont font-medium">
          {label}
        </p>
      </div>
    </button>
  );
}
