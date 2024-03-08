import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; //

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        isVisible ? "block animate-fade-in" : "hidden"
      } fixed bottom-8 left-8 p-4 bg-primary text-white rounded-full focus:outline-none hover:bg-secondary transition`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
