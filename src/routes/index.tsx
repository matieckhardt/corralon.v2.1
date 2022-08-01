import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthProvider from "contexts/AuthProvider";
import Acopios from "./admin/acopios";
import Clientes from "./admin/clientes";
import PanelCliente from "./admin/clientes/panelCliente";
import Compras from "./admin/compras";
import Comprobantes from "./admin/comprobantes";
import Dashboard from "./admin/dashboard";
import AdminLayout from "./admin/layout";
import ListaPrecios from "./admin/listaPrecios";
import Materiales from "./admin/materiales";
import AdminNotFound from "./admin/NotFound";
import Presupuesto from "./admin/presupuesto";
import Productos from "./admin/productos";
import Proveedores from "./admin/proveedores";
import Remitos from "./admin/remitos";
import Resultados from "./admin/resultados";
import Usuarios from "./admin/usuarios";
import VentaRapida from "./admin/ventaRapida";
import Home from "./home";
import NotFound from "./NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AuthProvider />}>
          <Route path="login" element={<h1>Login</h1>} />
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="acopios" element={<Acopios />} />
            <Route path="clientes" element={<Clientes />}>
              <Route path="panel" element={<PanelCliente />} />
            </Route>
            <Route path="compras" element={<Compras />} />
            <Route path="comprobantes" element={<Comprobantes />} />
            <Route path="listaPrecios" element={<ListaPrecios />} />
            <Route path="materiales" element={<Materiales />} />
            <Route path="presupuesto" element={<Presupuesto />} />
            <Route path="productos" element={<Productos />} />
            <Route path="proveedores" element={<Proveedores />} />
            <Route path="remitos" element={<Remitos />} />
            <Route path="resultados" element={<Resultados />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="ventaRapida" element={<VentaRapida />} />
            <Route path="*" element={<AdminNotFound />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
