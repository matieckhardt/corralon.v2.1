import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { memo, ReactNode } from "react";
import { Link } from "react-router-dom";

export interface LinkEntry {
  icon: ReactNode;
  label: string;
  path: string;
}

export interface ContentProps {
  entries: (LinkEntry | null)[];
  onLinkClick: () => void;
}

function Content({ entries, onLinkClick }: ContentProps) {
  return (
    <List disablePadding>
      {entries &&
        entries.map((val, idx) =>
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
  );
}

export default memo(Content);
