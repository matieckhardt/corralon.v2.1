import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import AuthContext from "./AuthContext";

export default function AuthProvider() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("accessToken")
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <Outlet />
    </AuthContext.Provider>
  );
}
