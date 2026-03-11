import { useRef, useLayoutEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import '../styles/VelocityScroll.css';
import Card from './Card';

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (ref.current) setWidth(ref.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);
  return width;
}

const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],           // your array of 9 testimonial objects
  velocity = 80,
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = 'parallax',
  scrollerClassName = 'scroller',
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityRow({
    children,
    baseVelocity,
    scrollContainerRef,
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });

    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping.input,
      velocityMapping.output,
      { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    const wrap = (min, max, v) => {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    };

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return '0px';
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      const vel = velocityFactor.get();

      if (vel < 0) directionFactor.current = -1;
      else if (vel > 0) directionFactor.current = 1;

      moveBy += directionFactor.current * Math.abs(moveBy) * Math.abs(vel);
      baseX.set(baseX.get() + moveBy);
    });

    const repeats = [];
    for (let i = 0; i < numCopies; i++) {
      repeats.push(
        <div
          key={i}
          ref={i === 0 ? copyRef : null}
          className="inline-flex gap-6 md:gap-8"
        >
          {children}
        </div>
      );
    }

    return (
      <div className={parallaxClassName} style={parallaxStyle}>
        <motion.div
          className={`inline-flex ${scrollerClassName}`}
          style={{ x, ...scrollerStyle }}
        >
          {repeats}
        </motion.div>
      </div>
    );
  }

  // Only render the two rows
 return (
    <section className="overflow-hidden py-10 md:py-16 gap-2 space-y-12 md:space-y-20">
      <div className="relative w-full">
        {/* Row 1 */}
        <VelocityRow
          baseVelocity={velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {texts.map((item, idx) => (
            <Card
              key={`row1-${idx}`}
              className="
                flex-shrink-0 w-80 sm:w-96 md:w-[28rem]   /* wider on larger screens */
                max-h-[340px] overflow-hidden               /* ← key: cap height */
                p-6 md:p-8
                shadow-xl rounded-2xl
                bg-white dark:bg-gray-800
                border border-gray-200/60 dark:border-gray-700/60
                flex flex-col justify-between
              "
            >
              <p className="
                text-base sm:text-lg md:text-xl
                leading-relaxed text-gray-700 dark:text-gray-200
                italic mb-5 line-clamp-5     /* ← limits quote to 5 lines */
              ">
                "{item.text}"
              </p>
              <div className="mt-auto">
                <span className="
                  block text-sm md:text-base
                  font-semibold text-indigo-600 dark:text-indigo-400
                ">
                  — {item.author}
                </span>
                {item.details && (
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {item.details}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </VelocityRow>

        {/* Row 2 – same card styles */}
        <VelocityRow
          baseVelocity={-velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {texts.map((item, idx) => (
            <Card
              key={`row2-${idx}`}
              className="
                flex-shrink-0 w-80 sm:w-96 md:w-[28rem]
                max-h-[340px] overflow-hidden
                p-6 md:p-8
                shadow-xl rounded-2xl
                bg-white dark:bg-gray-800
                border border-gray-200/60 dark:border-gray-700/60
                flex flex-col justify-between
              "
            >
              <p className="
                text-base sm:text-lg md:text-xl
                leading-relaxed text-gray-700 dark:text-gray-200
                italic mb-5 line-clamp-5
              ">
                "{item.text}"
              </p>
              <div className="mt-auto">
                <span className="
                  block text-sm md:text-base
                  font-semibold text-indigo-600 dark:text-indigo-400
                ">
                  — {item.author}
                </span>
                {item.details && (
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {item.details}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </VelocityRow>
      </div>
    </section>
  );
};

export default ScrollVelocity;