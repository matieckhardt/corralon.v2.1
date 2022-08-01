import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MouseEvent, useContext, useState } from "react";

import AuthContext from "contexts/AuthContext";

export default function AccountMenu() {
  const { setToken } = useContext(AuthContext);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);

  const onClick = (e: MouseEvent<HTMLButtonElement>) =>
    setAnchor(e.currentTarget);
  const onClose = () => setAnchor(null);
  const onLogout = () => setToken(null);

  return (
    <>
      <IconButton color="inherit" edge="end" onClick={onClick}>
        <AccountCircleIcon />
      </IconButton>
      <Menu anchorEl={anchor} open={open} onClose={onClose}>
        <MenuItem onClick={onLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cerrar Sesión</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
