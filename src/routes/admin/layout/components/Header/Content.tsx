import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { memo } from "react";

import AccountMenu from "./AccountMenu";

const ThemeToggle = styled(IconButton)({
  marginLeft: "auto",
});

export interface ContentProps {
  onThemeToggle: () => void;
}

function Content({ onThemeToggle }: ContentProps) {
  const theme = useTheme();
  return (
    <>
      <Typography noWrap variant="h6" component="h1">
        Panel Administrador
      </Typography>
      <ThemeToggle color="inherit" onClick={onThemeToggle}>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness3Icon />
        )}
      </ThemeToggle>
      <AccountMenu />
    </>
  );
}

export default memo(Content);
