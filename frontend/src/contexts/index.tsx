import { createContext, useContext, ReactNode, useState } from "react";

interface AppContextType {
  currentSection: string;
  updateCurrentSection: (state: string) => void;
}

const AppContext = createContext<AppContextType>({
  currentSection: "",
  updateCurrentSection: () => {},
});

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState("Home");

  const updateCurrentSection = (values: string) => setCurrentSection(values);

  return (
    <AppContext.Provider
      value={{
        currentSection,
        updateCurrentSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
