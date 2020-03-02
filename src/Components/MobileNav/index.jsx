import React from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import Navigation from "./navigation";

import "./style.scss";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100vw - 74px) 30px)`,
    pointerEvents: "unset",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(1px at calc(100vw - 74px) 30px)",
    pointerEvents: "none",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const defaultConfig = [
  { name: "Home", to: "/", direction: "right", top: "entry" },
  { name: "Blog", to: "/blog", direction: "left" },
  // { name: "Projects", to: "/projects", direction: "left" },
];

const MobileNav = ({ config = defaultConfig }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.header
      className="mobile-nav"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="mobile-nav-container" variants={sidebar}>
        <Navigation config={config} />
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.header>
  );
};

export default MobileNav;
