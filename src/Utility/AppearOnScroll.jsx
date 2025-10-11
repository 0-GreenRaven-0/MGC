import { useEffect, useRef, useState } from 'react';

const AppearOnScroll = ({ children, animationClass, delay, retrigger = false }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }

          if (!retrigger) {
            observer.unobserve(ref.current);
          }
        } else if (retrigger) {
          // reset visibility if it leaves the screen
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, retrigger]);

  return (
    <div
      ref={ref}
      className={`${visible ? animationClass : 'opacity-0'} transition-all duration-700`}
    >
      {children}
    </div>
  );
};

export default AppearOnScroll;
