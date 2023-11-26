import { createContext, useContext, ReactNode, useState } from "react";

interface AppContextType {
  currentSection: string;
  updateCurrentSection: (state: string) => void;
  isForgetPasswordModalOpen: boolean;
  toggleIsForgetPasswordModalOpen: () => void;
  isCreateInvoiceModalOpen: boolean;
  toggleIsCreateInvoicedModalOpen: () => void;
}

const AppContext = createContext<AppContextType>({
  currentSection: "",
  updateCurrentSection: () => {},
  isForgetPasswordModalOpen: false,
  toggleIsForgetPasswordModalOpen: () => {},
  isCreateInvoiceModalOpen: false,
  toggleIsCreateInvoicedModalOpen: () => {},
});

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState<string>("Home");
  const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] =
    useState<boolean>(false);

  const [isCreateInvoiceModalOpen, setIsCreateInvoiceModalOpen] =
    useState(false);

  const toggleIsCreateInvoicedModalOpen = () =>
    setIsCreateInvoiceModalOpen(!isCreateInvoiceModalOpen);

  const toggleIsForgetPasswordModalOpen = () =>
    setIsForgetPasswordModalOpen(!isForgetPasswordModalOpen);

  const updateCurrentSection = (values: string) => setCurrentSection(values);

  return (
    <AppContext.Provider
      value={{
        currentSection,
        updateCurrentSection,
        isForgetPasswordModalOpen,
        toggleIsForgetPasswordModalOpen,
        isCreateInvoiceModalOpen,
        toggleIsCreateInvoicedModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
