import { createContext } from "react";

interface AuthContextType {
  token: string | null;
  setToken(value: string | null): void;
  handleLogin: Function;
  stateProveedores: [];
  setProveedores: Function;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
