import { authLogin } from "apis";
import { addTokenCredential, getTokenCredencial } from "helpers";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AuthContext from "./AuthContext";

export default function AuthProvider() {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(getTokenCredencial());

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
    <AuthContext.Provider value={{ token, setToken, handleLogin }}>
      <Outlet />
    </AuthContext.Provider>
  );
}
