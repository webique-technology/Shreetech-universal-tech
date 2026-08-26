import useIsMobile from "../hooks/useIsMobile";

const useDisableMotion = (breakpoint = 768) => {
  const disableMotion = useIsMobile(breakpoint);
  return disableMotion;
};

export default useDisableMotion;
