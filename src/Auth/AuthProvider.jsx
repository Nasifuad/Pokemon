/* eslint-disable react/prop-types */
import { createContext } from "react";

const simpleObj = {
  name: "Nasif",
  age: 24,
  isCoder: true,
};
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={simpleObj}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
