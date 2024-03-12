export default function ParallaxSectionWithContent(props) {
  const bgImg = props.bgImg;

  return (
    <div
      className="relative bg-center bg-cover full h-60 content"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      id=""
    ></div>
  );
}
