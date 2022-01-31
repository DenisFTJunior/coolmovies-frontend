import * as React from "react";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import Modal from "@mui/material/Modal";
import { Alert, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import { actions as generalActions } from "../../utils/stateManager/slice/sync/generalSlice";
import { DetailModalProps } from "../../schema/components/Modal";

const EditModal = ({ items }: DetailModalProps) => {
  const dispatch = useStateDispatch();
  const generalState = useStateSelector((state) => state.general);
  const { closeModal } = generalActions;
  const isOpen = generalState.modal.isOpen;

  return (
    <Modal open={isOpen} onClose={() => dispatch(closeModal())}>
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

export default EditModal;
