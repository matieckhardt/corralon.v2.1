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
  stateClientes: [];
  setClientes: Function;
  setMateriales: Function;
  stateMateriales: [];
  stateUsuarios: [];
  setUsuarios: Function;
  stateAcopios: [];
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
