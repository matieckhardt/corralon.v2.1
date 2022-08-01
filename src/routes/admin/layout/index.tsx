import AppsIcon from "@mui/icons-material/Apps";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BadgeIcon from "@mui/icons-material/Badge";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import HandshakeIcon from "@mui/icons-material/Handshake";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import type { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const drawerWidth = 240;
const Container = styled("div")({ display: "flex", minHeight: "100vh" });
const Main = styled("main")({ flexGrow: 1, padding: 3 });
const drawerItems = [
  { icon: <DashboardIcon />, path: "/admin", label: "Dashboard" },
  { icon: <TrendingUpIcon />, path: "/admin/resultados", label: "Resultados" },
  {
    icon: <AssignmentIcon />,
    path: "/admin/listaPrecios",
    label: "Lista de Precios",
  },
  null,
  { icon: <PersonIcon />, path: "/admin/clientes", label: "Clientes" },
  { icon: <AppsIcon />, path: "/admin/materiales", label: "Materiales" },
  { icon: <HandshakeIcon />, path: "/admin/proveedores", label: "Proveedores" },
  { icon: <InventoryIcon />, path: "/admin/productos", label: "Productos" },
  null,
  { icon: <ShoppingCartIcon />, path: "/admin/compras", label: "Compras" },
  {
    icon: <ElectricBoltIcon />,
    path: "/admin/ventaRapida",
    label: "Venta Rapida",
  },
  { icon: <LocalShippingIcon />, path: "/admin/acopios", label: "Acopios" },
  {
    icon: <ReceiptIcon />,
    path: "/admin/comprobantes",
    label: "Comprobantes",
  },
  null,
  { icon: <BadgeIcon />, path: "/admin/usuarios", label: "Usuarios" },
];

export default function AdminLayout() {
  const prefersDark: PaletteMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const savedTheme = localStorage.getItem("colorTheme") as PaletteMode | null;
  const [themeMode, setThemeMode] = useState<PaletteMode>(
    savedTheme || prefersDark
  );

  useEffect(() => {
    localStorage.setItem("colorTheme", themeMode);
  }, [themeMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  const toggleTheme = useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }, [themeMode]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen]);

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const onLinkClick = useCallback(() => {
    if (!isDesktop) {
      setDrawerOpen(false);
    }
  }, [isDesktop]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header
          open={drawerOpen}
          drawerWidth={drawerWidth}
          onDrawerToggle={toggleDrawer}
          onThemeToggle={toggleTheme}
        />
        <Sidebar
          entries={drawerItems}
          drawerWidth={drawerWidth}
          open={drawerOpen}
          onDrawerToggle={toggleDrawer}
          onLinkClick={onLinkClick}
        />
        <Main>
          <Toolbar />
          <Outlet />
        </Main>
      </Container>
    </ThemeProvider>
  );
}
