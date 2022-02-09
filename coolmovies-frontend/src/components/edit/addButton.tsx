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
import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";

export default function EditButton() {
  const dispatch = useStateDispatch();
  const { toogleModal } = modalActions;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttons = [
    {
      icon: <VideoCallIcon />,
      name: "add Movie",
      onClick: () => {
        dispatch(toogleModal({ modal: "editMovie" }));
      },
    },
    {
      icon: <AddBoxIcon />,
      name: "add Review",
      onClick: () => {
        dispatch(toogleModal({ modal: "editReview" }));
      },
    },
    {
      icon: <GroupAddIcon />,
      name: "add User",
      onClick: () => {
        dispatch(toogleModal({ modal: "editUser" }));
      },
    },
    {
      icon: <PersonAddIcon />,
      name: "add Director",
      onClick: () => {
        dispatch(toogleModal({ modal: "editDirector" }));
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
      data-testid="addButton"
    >
      <SpeedDial
        ariaLabel="Add button"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {buttons.map((button) => (
          <SpeedDialAction
            data-testid="buttonAddOption"
            onClick={button.onClick}
            key={button.name}
            icon={button.icon}
            tooltipTitle={button.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
