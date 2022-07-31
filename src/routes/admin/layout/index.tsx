import AccountCircle from "@mui/icons-material/AccountCircle";
import Apps from "@mui/icons-material/Apps";
import Assignment from "@mui/icons-material/Assignment";
import Badge from "@mui/icons-material/Badge";
import Brightness3 from "@mui/icons-material/Brightness3";
import Brightness7 from "@mui/icons-material/Brightness7";
import Dashboard from "@mui/icons-material/Dashboard";
import ElectricBolt from "@mui/icons-material/ElectricBolt";
import Handshake from "@mui/icons-material/Handshake";
import Inventory from "@mui/icons-material/Inventory";
import LocalShipping from "@mui/icons-material/LocalShipping";
import MenuIcon from "@mui/icons-material/Menu";
import Person from "@mui/icons-material/Person";
import Receipt from "@mui/icons-material/Receipt";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import TrendingUp from "@mui/icons-material/TrendingUp";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ReactNode, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

interface DrawerItem {
  icon?: ReactNode;
  path: string;
  label: string;
}

const drawerWidth = 240;
const drawerItems: (DrawerItem | null)[] = [
  { icon: <Dashboard />, path: "/admin", label: "Dashboard" },
  { icon: <TrendingUp />, path: "/admin/resultados", label: "Resultados" },
  {
    icon: <Assignment />,
    path: "/admin/listaPrecios",
    label: "Lista de Precios",
  },
  null,
  { icon: <Person />, path: "/admin/clientes", label: "Clientes" },
  { icon: <Apps />, path: "/admin/materiales", label: "Materiales" },
  { icon: <Handshake />, path: "/admin/proveedores", label: "Proveedores" },
  { icon: <Inventory />, path: "/admin/productos", label: "Productos" },
  null,
  { icon: <ShoppingCart />, path: "/admin/compras", label: "Compras" },
  {
    icon: <ElectricBolt />,
    path: "/admin/ventaRapida",
    label: "Venta Rapida",
  },
  { icon: <LocalShipping />, path: "/admin/acopios", label: "Acopios" },
  {
    icon: <Receipt />,
    path: "/admin/comprobantes",
    label: "Comprobantes",
  },
  null,
  { icon: <Badge />, path: "/admin/usuarios", label: "Usuarios" },
];

export default function AdminLayout() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const savedTheme = localStorage.getItem("colorTheme") as
    | "dark"
    | "light"
    | null;
  const [themeMode, setThemeMode] = useState<"dark" | "light">(
    savedTheme || prefersDark
  );

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  useEffect(() => {
    localStorage.setItem("colorTheme", themeMode);
  }, [themeMode]);

  function toggleTheme() {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }

  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <List disablePadding>
        {drawerItems.map((val, idx) =>
          val ? (
            <ListItem disablePadding key={idx}>
              <ListItemButton component={Link} to={val.path}>
                <ListItemIcon>{val.icon}</ListItemIcon>
                <ListItemText primary={val.label} />
              </ListItemButton>
            </ListItem>
          ) : (
            <Divider key={idx} />
          )
        )}
      </List>
    </>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography noWrap variant="h6" component="h1">
              Panel Administrador
            </Typography>
            <IconButton
              color="inherit"
              onClick={toggleTheme}
              sx={{ marginLeft: "auto" }}
            >
              {themeMode === "dark" ? <Brightness7 /> : <Brightness3 />}
            </IconButton>
            <IconButton color="inherit" edge="end">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        >
          <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={toggleDrawer}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            open
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { md: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
