import * as React from "react";
import SaveIcon from "@mui/icons-material/Save";
import Modal from "@mui/material/Modal";
import { LoadingButton } from "@mui/lab";
import { Alert, Stack, TextField } from "@mui/material";

import useLocalValue from "../../utils/hooks/useLocalValue";
import { Item } from "../../schema/components/Modal";
import useModal from "../../utils/hooks/useModal";
import Loading from "../Loading";

const EditModal = ({
  name,
  items,
  request,
}: {
  name: string;
  items: Item[];
  request: any;
}) => {
  const [error, setError] = React.useState(false);

  const [{ data, isOpen }, { closeModal }, state] = useModal(name);

  if (!data) return <Loading />;
  const localValue = useLocalValue(data);
  const handleChangeLocalValue = (v: any) => useLocalValue(v);

  const validate = () => {
    const validatedItems = items.reduce(
      (acc: Object, v: Item) =>
        v.required && !(localValue as any)[v.prop]
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
    <Modal open={isOpen} onClose={() => closeModal()}>
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
              value={(localValue as any)[item.prop]}
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
