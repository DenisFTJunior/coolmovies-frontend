import React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import * as Icon from "@mui/icons-material";

import { TableAction } from "../../schema/components/Table";

const TableActions = ({ item, actions }: TableAction) => {
  return (
    <Paper sx={{ width: "20rem", maxWidth: "100%" }}>
      <MenuList>
        {actions.map((action) => (
          <MenuItem onClick={action.action(item)}>
            <ListItemIcon>{(Icon as any)[action.Icon]}</ListItemIcon>
            <ListItemText>{action.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export default TableActions;
