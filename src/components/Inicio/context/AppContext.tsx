import { useLocalStorage } from "@hooks/useLocalStorage";
import React, { createContext, useEffect, useState } from "react";

export enum TEMA {
  dark = 'DARK',
  light = 'LIGHT'
}

export interface AppContextType {
  toggleTema: () => void;
  tema: TEMA;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProps {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {

  const initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? TEMA.dark : TEMA.light;

  const { value: temaLS, setValue: setTemaLS } = useLocalStorage({
    key: 'tema',
    initialValue: TEMA.dark
  })

  const [tema, setTema] = useState(temaLS || initialTheme)

  const toggleTema = () => setTema(tema === TEMA.dark ? TEMA.light : TEMA.dark)

  useEffect(() => {
    setTemaLS(tema)
  }, [tema, setTemaLS])

  return (
    <AppContext.Provider value={{ tema, toggleTema }}>
      {children}
    </AppContext.Provider>
  );
};

