import React, { MouseEvent, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, Box } from "@mui/material";

import { CardProps } from "../../schema/components/Card";

const CardActions = ({ item, actions }: CardProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ position: "relative", top: 1, right: 1 }} role="cardActions">
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {actions.map((action) => (
          <MenuItem onClick={() => action.action(item)}>
            <MenuItem key={action.label} onClick={handleClose}>
              <ListItemIcon>{action.icon}</ListItemIcon>
              <ListItemText>{action.label}</ListItemText>
            </MenuItem>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default CardActions;
