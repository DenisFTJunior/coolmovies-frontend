import * as React from "react";
import SaveIcon from "@mui/icons-material/Save";
import Modal from "@mui/material/Modal";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Backdrop,
  Box,
  ModalUnstyled,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";

import useLocalValue from "../../utils/hooks/useLocalValue";
import { Item } from "../../schema/components/Modal";
import useModal from "../../utils/hooks/useModal";
import Loading, { LocalLoading } from "../Loading";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1500;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditModal = ({
  name,
  items,
  request,
  updateRequest,
  entity,
}: {
  name: string;
  entity: string;
  items: Item[];
  request: any;
  updateRequest: any;
}) => {
  const [modalData, { closeModal }, state] = useModal(name);

  const [localData, setLocalData] = React.useState(modalData);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => setLocalData(modalData), [modalData]);

  const { data, isOpen } = localData;
  const isEditing = data?.id ? true : false;

  const [localValue, changeLocalValue] = useLocalValue(data);

  if (!data && isOpen && isEditing) return <LocalLoading />;

  const validate = () => {
    const validatedItems = items.reduce(
      (acc: Object, v: Item) =>
        !localValue || (v.required && !(localValue as any)[v.prop])
          ? { ...acc, [`${v.prop}__error`]: true }
          : { error: false },
      { error: false }
    );
    console.log("validatedItems", validatedItems);
    const result = Object.keys(validatedItems).filter((v) =>
      RegExp(/__error$/).test(v)
    );
    console.log("result", result.length > 0);
    return result.length > 0;
  };

  const handleClick = () => {
    setError(false);
    setLoading(true);
    const hasError = validate();
    if (!hasError) {
      setLoading(false);
      isEditing
        ? updateRequest({ [entity]: localValue })
        : request({ [entity]: localValue });
      return closeModal();
    }
    setLoading(false);
    setError(true);
  };

  return (
    <StyledModal
      open={isOpen}
      onClose={() => closeModal()}
      BackdropComponent={Backdrop}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          width: "36rem",
          maxWidth: "100%",
          flexWrap: "wrap",
          backgroundColor: "#D8BAFF",
          padding: 3,
          borderRadius: 10,
        }}
      >
        {!!error && <Alert severity="error">Please, fill all fields!</Alert>}
        <Typography variant="h5">
          {`${isEditing ? "Editing" : "Creating"} ${entity}`}
        </Typography>
        {items.map((item: Item) => {
          if (item.render) return item.render(data, item);
          return (
            <TextField
              sx={{ backgroundColor: "#fff", width: "80%" }}
              value={localValue ? (localValue as any)[item.prop] : ""}
              id={`${item.prop}-input`}
              label={item.label}
              variant="outlined"
              onChange={(e) =>
                changeLocalValue({
                  ...localValue,
                  [item.prop]: e.target.value,
                })
              }
            />
          );
        })}
        <LoadingButton
          sx={{
            ":hover": { backgroundColor: "#fff" },
            backgroundColor: "#DEDEDE",
            width: "80%",
          }}
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>
      </Stack>
    </StyledModal>
  );
};

export default EditModal;
