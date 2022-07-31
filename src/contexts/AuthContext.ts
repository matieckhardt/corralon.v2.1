import { createContext } from "react";

interface AuthContextType {
  token: string | null;
  setToken(value: string | null): void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
