import { createContext, useContext, ReactNode, useState } from "react";
import { IClientType } from "../pages/dashboard/pages/Client/types";

interface AppContextType {
  currentSection: string;
  updateCurrentSection: (state: string) => void;
  isForgetPasswordModalOpen: boolean;
  toggleIsForgetPasswordModalOpen: () => void;
  toggleIsUpdateProfileModalOpen: () => void;
  isUpdateProfileModalOpen: boolean;
  isCreateInvoiceModalOpen: boolean;
  toggleIsCreateInvoicedModalOpen: () => void;
  isCreateClientModalOpen: boolean;
  toggleIsCreateClientModalOpen: () => void;
  isClientDataRefetched: boolean;
  refetchClient: () => void;
  isInvoiceDataRefetched: boolean;
  refetchInvoice: () => void;
  clientDetailsForNewTransaction: IClientType;
  updateClientDetailsForNewTransaction: (value: IClientType) => void;
  isDeleteInvoiceModalOpen: boolean;
  toggleDeleteInvoiceModel: () => void;
}

export const defaultClientDetails = {
  business_address: "",
  created_date: "",
  customer_type: "",
  phone_number: "",
  email: "",
  id: "",
  name: "",
  owner_id: "",
  _id: "",
};

const AppContext = createContext<AppContextType>({
  currentSection: "",
  updateCurrentSection: () => {},
  isForgetPasswordModalOpen: false,
  toggleIsForgetPasswordModalOpen: () => {},
  isCreateInvoiceModalOpen: false,
  toggleIsCreateInvoicedModalOpen: () => {},
  isCreateClientModalOpen: false,
  toggleIsCreateClientModalOpen: () => {},
  isClientDataRefetched: false,
  isInvoiceDataRefetched: false,
  refetchClient: () => {},
  refetchInvoice: () => {},
  clientDetailsForNewTransaction: defaultClientDetails,
  updateClientDetailsForNewTransaction: () => {},

  isUpdateProfileModalOpen: false,
  toggleIsUpdateProfileModalOpen: () => {},
  isDeleteInvoiceModalOpen: false,
  toggleDeleteInvoiceModel: () => {},

});

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState<string>("Home");
  const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] =
    useState<boolean>(false);

  const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] =
    useState(false);
  const [isCreateInvoiceModalOpen, setIsCreateInvoiceModalOpen] =
    useState(false);

  const [isCreateClientModalOpen, setIsCreateClientModalOpen] = useState(false);
  const [isClientDataRefetched, setIsClientDataRefetched] = useState(false);
  const [isInvoiceDataRefetched, setIsInvoiceDataRefetched] = useState(false);

  const [clientDetailsForNewTransaction, setClientDetailsForNewTransaction] =
    useState<IClientType>(defaultClientDetails);

  const updateClientDetailsForNewTransaction = (value: IClientType) =>
    setClientDetailsForNewTransaction(value);

  const [isDeleteInvoiceModalOpen, setIsDeleteInvoiceModalOpen] =
    useState(false);

  const toggleDeleteInvoiceModel = () => {
    setIsDeleteInvoiceModalOpen(!isDeleteInvoiceModalOpen);
  };


  const refetchClient = () => {
    setIsClientDataRefetched(true);
    setTimeout(() => {
      setIsClientDataRefetched(false);
    }, 1000);
  };

  const refetchInvoice = () => {
    setIsInvoiceDataRefetched(true);
    setTimeout(() => {
      setIsInvoiceDataRefetched(false);
    }, 1000);
  };

  const toggleIsCreateClientModalOpen = () =>
    setIsCreateClientModalOpen(!isCreateClientModalOpen);

  const toggleIsUpdateProfileModalOpen = () => {
    setIsUpdateProfileModalOpen(!isUpdateProfileModalOpen);
  };

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
        isCreateClientModalOpen,
        isUpdateProfileModalOpen,
        toggleIsUpdateProfileModalOpen,
        toggleIsCreateClientModalOpen,
        toggleIsCreateInvoicedModalOpen,
        isClientDataRefetched,
        isInvoiceDataRefetched,
        refetchClient,
        refetchInvoice,
        clientDetailsForNewTransaction,
        updateClientDetailsForNewTransaction,
        toggleDeleteInvoiceModel,
        isDeleteInvoiceModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
