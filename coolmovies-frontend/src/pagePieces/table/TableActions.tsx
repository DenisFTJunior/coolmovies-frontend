import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import * as Icon from "@mui/icons-material";

import { TableAction } from "../../schema/components/Table";

const TableActions = ({ item, actions }: TableAction) => {
  const [open, setOpen] = useState(false);
  if (!open)
    return (
      <Button
        variant="contained"
        disableElevation
        onClick={() => setOpen(true)}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button>
    );
  return (
    <Paper sx={{ width: "20rem", maxWidth: "100%", position: "absolute" }}>
      <MenuList>
        {actions.map((action) => (
          <MenuItem onClick={() => action.action(item)}>
            <ListItemIcon>{(Icon as any)[action.Icon]}</ListItemIcon>
            <ListItemText>{action.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export default TableActions;
