import { createContext, useState } from "react";

import DESSERT_DATA from "../pastry-data.json";

export const CrumbsContext = createContext({
  crumbs: [],
});

export const CrumbsProvider = ({ children }) => {
  const [crumbs, setCrumbs] = useState(DESSERT_DATA);
  const value = { crumbs, setCrumbs };
  return (
    <CrumbsContext.Provider value={value}>{children}</CrumbsContext.Provider>
  );
};
