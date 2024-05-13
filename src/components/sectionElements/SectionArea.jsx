export default function SectionArea({ children }) {
  SectionArea.propTypes = {
    children: PropTypes.any,
  };
  const childrenArray = Children.toArray(children);
  return (
    <div className="w-full py-[40px] tablet1:py-[64px] desktop1:py-[96px] ">
      {childrenArray}
    </div>
  );
}
