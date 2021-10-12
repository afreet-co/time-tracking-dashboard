import { createContext, FC, useContext, useState } from "react";

export type FilterType = "daily" | "weekly" | "monthly";

export type AppContextType = {
  filter: FilterType;
  changeFilter: (filter: FilterType) => void;
};

const initialValue: AppContextType = {
  changeFilter: (filter) => {},
  filter: "daily",
};

export const AppContext = createContext<AppContextType>(initialValue);

export const AppContextProvider: FC = ({ children }) => {
  const [filter, setFilter] = useState<FilterType>("daily");
  const changeFilter = (filter) => {
    setFilter(filter);
  };
  return (
    <AppContext.Provider
      value={{
        changeFilter,
        filter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
