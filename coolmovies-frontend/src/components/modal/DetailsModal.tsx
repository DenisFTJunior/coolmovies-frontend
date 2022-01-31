import * as React from "react";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import Modal from "@mui/material/Modal";
import { Alert, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import { actions as modalActions } from "../../utils/stateManager/slice/sync/modalSlice";
import { DetailModalProps } from "../../schema/components/Modal";

const DetailsModal = ({ items }: DetailModalProps) => {
  const dispatch = useStateDispatch();
  const modalState = useStateSelector((state) => state.modal);
  const { toogleModalDetail } = modalActions;
  const isOpen = modalState.modal.detail.isOpen;

  return (
    <Modal open={isOpen} onClose={() => dispatch(toogleModalDetail())}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "row wrap",
          width: "20rem",
        }}
      >
        <Alert severity="error">Please, fill all fields!</Alert>
        {items.map((item) => {
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="body1" component="span">
              {item.label}
            </Typography>
            <Typography variant="h6" component="span">
              {item.content}
            </Typography>
          </Box>;
        })}
      </Box>
    </Modal>
  );
};

export default DetailsModal;
