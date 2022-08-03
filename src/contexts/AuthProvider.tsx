import { createProduct, getAllProductos } from "apis/productos";
import { authLogin, getAllProveedores } from "apis/proveedores";
import { getAllRubros } from "apis/rubros";
import { addTokenCredential, getTokenCredencial } from "helpers";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AuthContext from "./AuthContext";

export default function AuthProvider() {
  const navigate = useNavigate();
  const [stateProveedores, setStateProveedores] = useState<any>([]);
  const [stateProductos, setStateProductos] = useState<any>([]);
  const [stateRubros, setStateRubros] = useState<any>([]);
  const [token, setToken] = useState<string | null>(getTokenCredencial());

  const setProveedores = () => getAllProveedores().then(({data}) => setStateProveedores(data));

  const setProductos = () => getAllProductos().then(({data}) => setStateProductos(data));
  const setRubros = () => getAllRubros().then(({data}) => setStateRubros(data))
  

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

  const handleCreateProduct = (obj: any) => {
    createProduct(obj).then((resp) => console.log(resp));
  };

  useEffect(() => {
    setProveedores();
    setProductos();
    setRubros();
    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        stateProveedores,
        stateProductos,
        stateRubros,
        setToken,
        handleLogin,
        setProveedores,
        handleCreateProduct,
      }}
    >
      <Outlet />
    </AuthContext.Provider>
  );
}
