import { useLocalStorage } from "@hooks/useLocalStorage";
import React, { createContext, useContext, useEffect, useState } from "react";

export enum TEMA {
  dark = 'DARK',
  light = 'LIGHT'
}

export enum IDIOMA {
  en = 'ENGLISH',
  es = 'ESPANOL'
}

interface AppContextType {
  idioma: IDIOMA;
  toggleTema: () => void;
  tema: TEMA;
  cambiarIdioma: (value: IDIOMA) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProps {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {

  const { value: idiomaLS, setValue: setIdiomaLS } = useLocalStorage({
    key: 'idioma',
    initialValue: IDIOMA.es
  })
  const { value: temaLS, setValue: setTemaLS } = useLocalStorage({
    key: 'tema',
    initialValue: TEMA.dark
  })

  const [tema, setTema] = useState(temaLS)
  const [idioma, setIdioma] = useState(idiomaLS)

  const toggleTema = () => setTema(tema === TEMA.dark ? TEMA.light : TEMA.dark)
  const cambiarIdioma = (nuevoIdioma: IDIOMA) => setIdioma(nuevoIdioma);

  useEffect(() => {
    setTemaLS(tema)
  }, [tema])


  useEffect(() => {
    setIdiomaLS(idioma)
  }, [idioma])




  return (
    <AppContext.Provider value={{ idioma, cambiarIdioma, tema, toggleTema }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
