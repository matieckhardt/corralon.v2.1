
import { authLogin, getAllProveedores } from "apis";
import { addTokenCredential, getTokenCredencial } from "helpers";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AuthContext from "./AuthContext";

export default function AuthProvider() {
  const navigate = useNavigate();
  const [stateProveedores, setStateProveedores] = useState<any>([]);
  const [token, setToken] = useState<string | null>(getTokenCredencial());

  const setProveedores = () => {
    getAllProveedores().then((resp) => {
      setStateProveedores(resp.data);
    });
  }

  const handleLogin = (obj: any) => {
    authLogin(obj).then((resp) => {
      const { token } = resp.data;
      setToken({
        ...token,
        token: token,
      });
      addTokenCredential(token);
      navigate("/admin");
    });
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, handleLogin, stateProveedores, setProveedores }}>
      <Outlet />
    </AuthContext.Provider>
  );
}
