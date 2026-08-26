import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initial check
    setIsMobile(window.innerWidth <= breakpoint);

    let timeoutId = null;

    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth <= breakpoint);
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
