import * as React from "react";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import Modal from "@mui/material/Modal";
import { Alert, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import { actions as generalActions } from "../../utils/stateManager/slice/sync/generalSlice";
import { actions as modalActions } from "../../utils/stateManager/slice/sync/modalSlice";
import { ModalProps } from "../../schema/components/Modal";

const EditModal = ({ items }: ModalProps) => {
  const [error, setError] = React.useState(false);
  const dispatch = useStateDispatch();

  //general state
  const generalState = useStateSelector((state) => state.general);
  const { setLocalValue, clearLocalValue } = generalActions;
  const localValue = generalState.localValue;
  if (localValue) dispatch(clearLocalValue());

  //modal state
  const modalState = useStateSelector((state) => state.modal);
  const { toogleModalEdit } = modalActions;
  const isOpen = modalState.modal.edit.isOpen;
  const data = modalState.modal.edit.data;
  const request = modalState.modal.edit.request

  dispatch(setLocalValue(data));

  const validate = () => {
    const validatedItems = items.reduce(
      (acc, v) =>
        v.required && !localValue[v.prop]
          ? { ...acc, [`${v.prop}__error`]: true }
          : { error: false },
      { error: false }
    );
    return Object.keys(validatedItems).filter((v) =>
      RegExp(/__error$/).test(v)
    );
  };

  const handleClick = () => {
    const hasError = validate();
    if (!hasError) return request(localValue);
    setError(true);
  };

  return (
    <Modal open={isOpen} onClose={() => dispatch(toogleModalEdit())}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "row wrap",
          width: "20rem",
        }}
      >
        {!!error && <Alert severity="error">Please, fill all fields!</Alert>}
        {items.map((item) => {
          if (!item.render) {
            return (
              <TextField
                value={localValue[item.prop]}
                id={`${item.prop}-input`}
                label={item.label}
                variant="outlined"
                onChange={(e) =>
                  setLocalValue({ ...localValue, [item.prop]: e.target.value })
                }
              />
            );
          } else {
            return item.render(data, item);
          }
        })}
        <LoadingButton
          onClick={handleClick}
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Save
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default EditModal;
