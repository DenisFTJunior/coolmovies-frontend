import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import { actions as generalActions } from "../../utils/stateManager/slice/sync/generalSlice";
import { ModalItems } from "../../schema/components/Modal";
import { TextField } from "@mui/material";

const EditModal = ({ items }: ModalItems) => {
  const dispatch = useStateDispatch();
  const generalState = useStateSelector((state) => state.general);
  const { closeModal, setLocalValue, clearLocalValue } = generalActions;
  const isOpen = generalState.modal.isOpen;
  const localValue = generalState.localValue;
  if (localValue) dispatch(clearLocalValue());

  return (
    <Modal open={isOpen} onClose={() => dispatch(closeModal())}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "row wrap",
        }}
      >
        {items.map((item) => {
          if (!item.Element) {
            return (
              <TextField
                label={item.label}
                variant="outlined"
                onChange={(e) =>
                  setLocalValue({ ...localValue, [item.prop]: e.target.value })
                }
              />
            );
          } else {
            return item.Element;
          }
        })}
      </Box>
    </Modal>
  );
};

export default EditModal;
