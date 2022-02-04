import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddBoxIcon from "@mui/icons-material/AddBox";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { actions as modalActions } from "../../utils/stateManager/slice/sync/modalSlice";

export default function EditButton() {
  const { toogleModal } = modalActions;

  const actions = [
    {
      icon: <VideoCallIcon />,
      name: "add Movie",
      onClick: () => {
        toogleModal({ modal: "editMovie" });
      },
    },
    {
      icon: <AddBoxIcon />,
      name: "add Review",
      onClick: () => {
        toogleModal({ modal: "editReview" });
      },
    },
    {
      icon: <GroupAddIcon />,
      name: "add User",
      onClick: () => {
        toogleModal({ modal: "editUser" });
      },
    },
    {
      icon: <PersonAddIcon />,
      name: "add Director",
      onClick: () => {
        toogleModal({ modal: "editDirector" });
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
    >
      <SpeedDial ariaLabel="Add button" icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction
            onClick={action.onClick}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
