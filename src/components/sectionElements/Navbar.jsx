import PropTypes from "prop-types";
import { Children } from "react";

export default function Navbar({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="relative flex w-full h-auto mx-auto my-4 opacity-0 content animate-fade-in">
      <div className="flex justify-between w-full">{childrenArray}</div>
    </div>
  );
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};
