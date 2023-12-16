import { useEffect, useState } from "react";

const useScrollY = () => {

  const [scrollY, setScrollY] = useState<number>(0);

  const isBrowser = typeof window !== undefined;

  const handleScroll = () => {
    const currentScrollY = isBrowser ? window.scrollY : 0;

    setScrollY(currentScrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive:true});

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

export default useScrollY;