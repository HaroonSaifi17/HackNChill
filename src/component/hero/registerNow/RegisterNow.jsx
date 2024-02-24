import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
        <span className="mx-2"> {children}&nbsp;&nbsp;</span>
      </motion.div>
    </div>
  );
}

export default function RegisterNow() {
  return (
    <ParallaxText baseVelocity={-3}>
      The code will be with you Always!{" "}
    </ParallaxText>
  );
}
