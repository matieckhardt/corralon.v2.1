import { createContext } from "react";

interface AuthContextType {
  token: string | null;
  setToken(value: string | null): void;
  handleLogin: Function;
  handleCreateProduct: Function;
  stateProveedores: [];
  stateProductos: [];
  stateRubros: [];
  setProveedores: Function;

}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
