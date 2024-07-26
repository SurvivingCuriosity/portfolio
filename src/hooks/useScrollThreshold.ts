import { useState, useEffect } from 'react';

// Custom hook para manejar el scroll hacia abajo con un umbral
export const useScrollThreshold = (threshold: number) => {

  const [umbralAlcanzado, setUmbralAlcanzado] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setUmbralAlcanzado(scrollY > prevScrollY);
    setPrevScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    if (prevScrollY > threshold) {
      setUmbralAlcanzado(true)
    } else {
      setUmbralAlcanzado(false)
    }
  }, [prevScrollY, threshold]);

  return umbralAlcanzado;
};