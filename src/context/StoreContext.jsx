import { createContext, useContext } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const StoreContext = createContext();
export const useStore = () => {
  const store = useContext(StoreContext);
  return store;
};

export const StoreProvider = ({ children }) => {
  const querySnapshop = getDocs(collection(db, "posts"));

  return (
    <StoreContext.Provider value={{ querySnapshop }}>
      {children}
    </StoreContext.Provider>
  );
};
