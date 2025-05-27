import { createContext, useState } from "react";

import DESSERT_DATA from "../pastry-data.json";

export const DessertsContext = createContext({
  desserts: [],
});

export const DessertsProvider = ({ children }) => {
  const [desserts, setDesserts] = useState(DESSERT_DATA);
  const value = { desserts, setDesserts };
  return (
    <DessertsContext.Provider value={value}>
      {children}
    </DessertsContext.Provider>
  );
};
