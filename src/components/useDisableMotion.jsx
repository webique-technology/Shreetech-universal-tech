import { useEffect, useState } from "react";

const useDisableMotion = (breakpoint = 768) => {
  const [disableMotion, setDisableMotion] = useState(false);

  useEffect(() => {
    const check = () => setDisableMotion(window.innerWidth <= breakpoint);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return disableMotion;
};

export default useDisableMotion;
