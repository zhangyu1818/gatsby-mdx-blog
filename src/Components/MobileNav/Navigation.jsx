import React from "react";
import { motion } from "framer-motion";
import TransitionTo from "../TransitionTo";

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavItem = ({ children, to, ...props }) => {
  return (
    <motion.div className="mobile-nav-item" variants={itemVariants}>
      <TransitionTo to={to} {...props}>
        {children}
      </TransitionTo>
    </motion.div>
  );
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ config }) => (
  <motion.nav className="mobile-nav-list" variants={variants}>
    {config.map(item => (
      <NavItem key={item.name} {...item}>
        {item.name}
      </NavItem>
    ))}
  </motion.nav>
);

export default Navigation;
