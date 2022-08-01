import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Content, { ContentProps } from "./Content";

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
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

interface DrawerPropsWithWidth extends DrawerProps {
  drawerWidth: number;
}

const MobileDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "drawerWidth",
})<DrawerPropsWithWidth>(({ drawerWidth }) => ({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: drawerWidth,
  },
}));

const DesktopDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})<DrawerPropsWithWidth>(({ open, drawerWidth, theme }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    "& .MuiDrawer-paper": openedMixin(theme, drawerWidth),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const CloseButton = styled(IconButton)({ marginLeft: "auto" });

export interface SidebarProps extends ContentProps {
  open?: boolean;
  drawerWidth: number;
  onDrawerToggle: () => void;
}

export default function Sidebar({
  open,
  drawerWidth,
  entries,
  onDrawerToggle,
  onLinkClick,
}: SidebarProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const drawer = (
    <>
      <Toolbar>
        <CloseButton color="inherit" edge="end" onClick={onDrawerToggle}>
          <ChevronLeftIcon />
        </CloseButton>
      </Toolbar>
      <Divider />
      <Content entries={entries} onLinkClick={onLinkClick} />
    </>
  );

  return (
    <>
      {isDesktop ? (
        <DesktopDrawer
          variant="permanent"
          open={open}
          drawerWidth={drawerWidth}
        >
          {drawer}
        </DesktopDrawer>
      ) : (
        <MobileDrawer
          variant="temporary"
          open={open}
          drawerWidth={drawerWidth}
          onClose={onDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </MobileDrawer>
      )}
    </>
  );
}
