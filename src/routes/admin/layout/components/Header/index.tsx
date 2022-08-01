import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

import Content, { ContentProps } from "./Content";

interface AppBarProps {
  open?: boolean;
  drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})<AppBarProps>(({ open, drawerWidth, theme }) => ({
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

interface MenuButtonProps {
  open?: boolean;
}

const MenuButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "open",
})<MenuButtonProps>(({ open, theme }) => ({
  marginRight: theme.spacing(2),
  ...(open && {
    display: "none",
  }),
}));

export interface HeaderProps extends ContentProps {
  open?: boolean;
  drawerWidth: number;
  onDrawerToggle: () => void;
}

export default function Header({
  open,
  drawerWidth,
  onDrawerToggle,
  onThemeToggle,
}: HeaderProps) {
  return (
    <AppBar open={open} drawerWidth={drawerWidth}>
      <Toolbar>
        <MenuButton
          color="inherit"
          edge="start"
          onClick={onDrawerToggle}
          open={open}
        >
          <MenuIcon />
        </MenuButton>
        <Content onThemeToggle={onThemeToggle} />
      </Toolbar>
    </AppBar>
  );
}
