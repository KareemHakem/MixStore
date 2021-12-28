import { useRef, useState, useEffect } from "react";

export const useComponentVisible = (document) => {
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const ref = useRef(null);
  const handleHoverOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    } else {
      setIsComponentVisible(true);
    }
  };
  useEffect(() => {
    document?.addEventListener("mouseover", handleHoverOutside);
    return () => {
      document?.removeEventListener("mouseover", handleHoverOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isComponentVisible === false) {
      setTimeout(() => {
        setIsComponentVisible(true);
      }, 300);
    }
  }, [isComponentVisible]);
  return { setIsComponentVisible, isComponentVisible, ref };
};

