// import { useLocalStorage } from "@hooks/useLocalStorage";
// import React, { createContext, useContext } from "react";

// interface AppContextType {
//   idioma: string;
//   setIdioma: (value: string) => void;
//   tema: string;
//   setTema: (value: string) => void;
// }

// const AppContext = createContext<AppContextType>({
//   idioma: "es",
//   setIdioma: () => {},
//   tema: "light",
//   setTema: () => {},
// });

// interface AppContextProps {
//   children: React.ReactNode;
// }

// export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
//   const [idioma, setIdioma] = useLocalStorage("idioma", "en");
//   const [tema, setTema] = useLocalStorage("tema", "light");

//   return( 
//     <AppContext.Provider value={{ idioma, setIdioma, tema, setTema }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = (): AppContextType => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error("useAppContext must be used within an AppContextProvider");
//   }
//   return context;
// };
