import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Alert, Stack, Typography } from "@mui/material";

import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import { actions as modalActions } from "../../utils/stateManager/slice/sync/modalSlice";
import { DetailModalProps } from "../../schema/components/Modal";

const DetailsModal = ({ items }: DetailModalProps) => {
  const dispatch = useStateDispatch();
  const modalState = useStateSelector((state) => state.modal);
  const { toogleModalDetail } = modalActions;
  const data = modalState.modal.edit.data;
  const isOpen = modalState.modal.detail.isOpen;

  return (
    <Modal open={isOpen} onClose={() => dispatch(toogleModalDetail())}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Alert severity="error">Please, fill all fields!</Alert>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            width: "36rem",
            maxWidth: "100%",
            flexWrap: "wrap",
          }}
        >
          {items.map((item) => {
            if (item.render) return item.render(data, item);
            return (
              <Stack direction="column" spacing={2}>
                <Typography variant="body1" component="span">
                  {item.label}
                </Typography>
                <Typography variant="h6" component="span">
                  {data[item.prop]}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Modal>
  );
};

export default DetailsModal;
