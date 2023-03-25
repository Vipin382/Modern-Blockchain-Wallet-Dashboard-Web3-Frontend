import { createContext, useState } from "react";

export const Themecontext = createContext();

export const ThemeWrapper = ({ children }) => {
  const [mode, setMode] = useState("light");
//   useEffect(() => {
//     console.log(mode);
//   }, [mode]);
  return (
    <Themecontext.Provider value={{ themeMode: mode, setThemeMode: setMode }}>
      {children}
    </Themecontext.Provider>
  );
};
