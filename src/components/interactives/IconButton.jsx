export default function IconButton(props, className) {
  const { icon, label, ariaLabel } = props;

  return (
    <button
      className="flex flex-row items-center justify-center transition rounded-[10px] px-[12px] py-[10px] bg-primary hover:bg-secondary text-secondary hover:text-primary hover:border-primary hover:border-solid border-[1px] border-secondary"
      aria-label={ariaLabel}
    >
      <div className="flex items-center text-center gap-[10px]">
        <div className="flex flex-col justify-end">{icon}</div>
      </div>
    </button>
  );
}
