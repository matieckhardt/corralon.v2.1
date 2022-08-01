import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BadgeIcon from "@mui/icons-material/Badge";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import HandshakeIcon from "@mui/icons-material/Handshake";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  createTheme,
  CSSObject,
  PaletteMode,
  styled,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
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
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;
const Container = styled("div")({ display: "flex", minHeight: "100vh" });
const Main = styled("main")({ flexGrow: 1, padding: 3 });

interface NavbarProps extends AppBarProps {
  open?: boolean;
}

const Navbar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<NavbarProps>(({ open, theme }) => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  [theme.breakpoints.up("md")]: {
    zIndex: theme.zIndex.drawer + 1,
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    }),
  },
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  overflowX: "hidden",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  width: `calc(${theme.spacing(7)} + 1px)`,
  overflowX: "hidden",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  display: "block",
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: drawerWidth,
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const DesktopDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open, theme }) => ({
  display: "none",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

interface DrawerItem {
  icon?: ReactNode;
  path: string;
  label: string;
}

const drawerItems: (DrawerItem | null)[] = [
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
    if (drawerOpen && !isDesktop) {
      setDrawerOpen(false);
    }
  }, [drawerOpen, isDesktop]);

  const drawer = (
    <>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="end"
          onClick={toggleDrawer}
          sx={{ marginLeft: "auto" }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List disablePadding>
        {drawerItems.map((val, idx) =>
          val ? (
            <ListItem disablePadding key={idx}>
              <ListItemButton
                onClick={onLinkClick}
                component={Link}
                to={val.path}
              >
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
      <Container>
        <Navbar position="fixed" open={drawerOpen}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2, ...(drawerOpen && { display: { md: "none" } }) }}
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
              {themeMode === "dark" ? <Brightness7Icon /> : <Brightness3Icon />}
            </IconButton>
            <IconButton color="inherit" edge="end">
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </Navbar>
        <MobileDrawer
          variant="temporary"
          open={drawerOpen}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </MobileDrawer>
        <DesktopDrawer variant="permanent" open={drawerOpen}>
          {drawer}
        </DesktopDrawer>
        <Main>
          <Toolbar />
          <Outlet />
        </Main>
      </Container>
    </ThemeProvider>
  );
}
