import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Children } from "react";
import PropTypes from "prop-types";

export default function MotionDivDownToUp({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const childrenArray = Children.toArray(children);

  MotionDivDownToUp.propTypes = {
    children: PropTypes.any,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 200 }}
      transition={{ duration: 1 }}
    >
      {childrenArray}
    </motion.div>
  );
}
