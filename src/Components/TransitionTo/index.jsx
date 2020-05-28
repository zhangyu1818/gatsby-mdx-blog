import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { gsap, TimelineMax, Power1 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

const boxShadow = "0 0 100px 10px var(--shadow-color)";

const swipeTopDirection = (direction, reverse) => {
  const polarityPos = reverse ? "-" : "+";
  const polarityNeg = reverse ? "+" : "-";

  switch (direction) {
    case "down":
      return { y: `${polarityPos}=100vh`, ease: Power1.easeIn };
    case "up":
      return { y: `${polarityNeg}=100vh`, ease: Power1.easeIn };
    case "left":
      return { x: `${polarityNeg}=100%`, ease: Power1.easeIn };
    default:
      return { x: `${polarityPos}=100%`, ease: Power1.easeIn };
  }
};

const swipeBottomDirection = (direction, reverse = false, offset = 40) => {
  const polarityPos = reverse ? "-" : "";
  const polarityNeg = reverse ? "" : "-";

  switch (direction) {
    case "down":
      return { y: `${polarityNeg}${offset}vh`, ease: Power1.easeIn };
    case "up":
      return { y: `${polarityPos}${offset}vh`, ease: Power1.easeIn };
    case "left":
      return { x: `${polarityPos}${offset}%`, ease: Power1.easeIn };
    default:
      return { x: `${polarityNeg}${offset}%`, ease: Power1.easeIn };
  }
};

const swipe = ({ node, exit, direction, top, triggerName, entryOffset }) => {
  const scrollTop =
    (document.scrollingElement && document.scrollingElement.scrollTop) ||
    document.body.scrollTop ||
    window.pageYOffset;
  if (triggerName === "entry" && top === "entry") {
    return new TimelineMax()
      .set(node, {
        boxShadow: boxShadow,
        overflowY: "hidden",
        scrollTop: scrollTop,
      })
      .set(document.scrollingElement, { scrollTop })
      .from(node, exit.length, swipeTopDirection(direction, true))
      .set(node, { overflowY: "initial" });
  } else if (triggerName === "entry") {
    return new TimelineMax().from(
      node,
      exit.length,
      swipeBottomDirection(direction, false, entryOffset)
    );
  } else if (triggerName === "exit" && top === "exit") {
    return new TimelineMax()
      .set(node, {
        boxShadow: boxShadow,
        overflowY: "hidden",
        scrollTop: scrollTop,
      })
      .to(node, exit.length, swipeTopDirection(direction))
      .set(node, { overflowY: "initial" });
  } else {
    return new TimelineMax()
      .set(node, {
        boxShadow: boxShadow,
        overflowY: "hidden",
        scrollTop: scrollTop,
      })
      .to(node, exit.length, swipeBottomDirection(direction, true, entryOffset))
      .set(node, { overflowY: "initial" });
  }
};

function SwipeOver({
  exit,
  entry,
  swipe: removedProp,
  entryOffset = 40,
  ...props
}) {
  const top = props.top || "exit";
  const exitLength = props.duration || 0.7;
  const entryLength = exitLength / 3.5;
  const entryZ = top === "entry" ? 1 : 0;
  const exitZ = top === "exit" ? 1 : 0;

  return (
    <TransitionLink
      exit={{
        length: exitLength,
        trigger: ({ node, exit }) =>
          swipe({
            node,
            exit,
            direction: props.direction,
            top: top,
            entryOffset,
            triggerName: "exit",
          }),
        zIndex: exitZ,
      }}
      entry={{
        length: entryLength,
        trigger: ({ node, exit }) =>
          swipe({
            node,
            exit,
            direction: props.direction,
            top: top,
            entryOffset,
            triggerName: "entry",
          }),
        zIndex: entryZ,
      }}
      {...props}
    >
      {props.children}
    </TransitionLink>
  );
}

export default function TransitionTo(allProps) {
  const { children, ...props } = allProps;
  return (
    <>
      <SwipeOver {...props} duration={0.7}>
        {children}
      </SwipeOver>
    </>
  );
}
