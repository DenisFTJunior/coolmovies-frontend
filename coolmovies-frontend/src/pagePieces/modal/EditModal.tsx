import * as React from "react";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import Modal from "@mui/material/Modal";
import { Alert, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import useLocalValue from "../../utils/hooks/useLocalValue";
import { actions as modalActions } from "../../utils/stateManager/slice/sync/modalSlice";
import { Item, ModalProps } from "../../schema/components/Modal";

const EditModal = () => {
  const [error, setError] = React.useState(false);
  const dispatch = useStateDispatch();

  //modal state
  const modalState = useStateSelector((state) => state.modal);
  const { closeModal } = modalActions;
  const isOpen = modalState.modal.edit.isOpen;
  const data = modalState.modal.edit.data;
  const items = modalState.modal.edit.items;
  const request = modalState.modal.edit.request;

  const localValue = useLocalValue(data);
  const handleChangeLocalValue = (v: any) => useLocalValue(v);

  const validate = () => {
    const validatedItems = items.reduce(
      (acc: Object, v: Item) =>
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
    <Modal open={isOpen} onClose={() => dispatch(closeModal())}>
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
        {!!error && <Alert severity="error">Please, fill all fields!</Alert>}
        {items.map((item: Item) => {
          if (item.render) return item.render(data, item);
          return (
            <TextField
              value={localValue[item.prop]}
              id={`${item.prop}-input`}
              label={item.label}
              variant="outlined"
              onChange={(e) =>
                handleChangeLocalValue({
                  ...localValue,
                  [item.prop]: e.target.value,
                })
              }
            />
          );
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
      </Stack>
    </Modal>
  );
};

export default EditModal;
