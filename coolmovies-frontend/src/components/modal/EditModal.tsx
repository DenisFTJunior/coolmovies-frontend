import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Box,
  IconButton,
  ModalUnstyled,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { dissoc } from "ramda";

import useLocalValue from "../../utils/hooks/useLocalValue";
import { Item } from "../../schema/components/Modal";
import useModal from "../../utils/hooks/useModal";
import { LocalLoading } from "../Loading";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 200;
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

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const { data, isOpen } = modalData;
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
    return result.length > 0;
  };

  const handleClick = () => {
    setError(false);
    setLoading(true);
    const hasError = validate();
    if (!hasError) {
      isEditing
        ? updateRequest({
            id: localValue.id,
            [`${entity}Patch`]: dissoc("id")(localValue),
          })
        : request({ [entity]: localValue });
      setLoading(false);
      changeLocalValue({});
      return closeModal();
    }
    setLoading(false);
    setError(true);
  };

  return (
    <StyledModal open={isOpen}>
      <>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            width: "36rem",
            maxWidth: "100%",
            flexWrap: "wrap",
            background:
              "linear-gradient(180deg, #301553 0%, rgba(149, 93, 220, 0) 100%)",
            padding: 3,
            borderRadius: 10,
          }}
        >
          {!!error && <Alert severity="error">Please, fill all fields!</Alert>}
          <Box
            sx={{
              width: "80%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                width: "80%",
                backgroundColor: "#ffffff",
                borderRadius: 3,
                padding: "10px 20px",
              }}
            >
              {`${isEditing ? "Editing" : "Creating"} ${
                entity === "movieDirector"
                  ? "Movie Director"
                  : entity === "movieReview"
                  ? "Movie Review"
                  : entity
              }`}
            </Typography>
          </Box>
          {items.map((item: Item) => {
            if (item.render)
              return item.render(data, item, { changeLocalValue, localValue });
            return (
              <TextField
                sx={{ backgroundColor: "#fff", width: "80%" }}
                value={localValue ? (localValue as any)[item.prop] : ""}
                id={`${item.prop}-input`}
                label={item.label}
                variant="outlined"
                type={item.typeInput || "text"}
                onChange={(e) =>
                  changeLocalValue({
                    ...localValue,
                    [item.prop]:
                      item.typeInput === "number"
                        ? parseInt(e.target.value)
                        : e.target.value,
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
        <IconButton
          sx={{ position: "relative", top: "-25%", backgroundColor: "#fff" }}
          onClick={() => closeModal()}
        >
          <CloseIcon />
        </IconButton>
      </>
    </StyledModal>
  );
};

export default EditModal;
