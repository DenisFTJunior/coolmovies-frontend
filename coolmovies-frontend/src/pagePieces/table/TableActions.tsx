import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Backdrop, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { TableAction } from "../../schema/components/Table";

const TableActions = ({ item, actions }: TableAction) => {
  const [open, setOpen] = useState(false);
  if (!open)
    return (
      <Button
        sx={{ width: "100%", height: "100%", marginTop: 1 }}
        variant="contained"
        disableElevation
        onClick={() => setOpen(true)}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button>
    );
  return (
    <Backdrop
      sx={{
        backgroundColor: "#fff",
        color: "#fff",
        zIndex: 10,
        position: "relative",
      }}
      open={open}
      onClick={() => setOpen(false)}
    >
      <Paper
        sx={{
          width: "20rem",
          maxWidth: "100%",
        }}
      >
        <MenuList>
          {actions.map((action) => (
            <MenuItem onClick={() => action.action(item)}>
              <ListItemIcon>{action.icon}</ListItemIcon>
              <ListItemText>{action.label}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
      <IconButton>
        <CloseIcon />
      </IconButton>
    </Backdrop>
  );
};

export default TableActions;
