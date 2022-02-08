import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import {
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
  cleanRequest,
}: {
  name: string;
  entity: string;
  items: Item[];
  request: any;
  updateRequest: any;
  cleanRequest: any;
}) => {
  const [modalData, { closeModal }] = useModal(name);

  const [loading, setLoading] = React.useState(false);

  const { data, isOpen } = modalData;
  const isEditing = data && data?.id ? true : false;

  const [localValue, changeLocalValue] = useLocalValue(data);

  if (!data && isOpen && isEditing) return <LocalLoading />;

  React.useEffect(() => {
    if (data) changeLocalValue(data);
  }, [data]);

  console.log("data", data);
  
  const cleanError = () =>
    items.map((v) =>
      localValue && (localValue as any)[`${v.prop}__error`]
        ? dissoc(`${v.prop}__error`)(localValue)
        : {}
    );

  const validate = () => {
    cleanError();
    const validatedItems = items.reduce(
      (acc: Object, v: Item) =>
        !localValue || (v.required && !(localValue as any)[v.prop])
          ? { ...acc, [`${v.prop}__error`]: true }
          : { error: false },
      { error: false }
    );
    changeLocalValue({ ...localValue, ...validatedItems });
    const result = Object.keys(validatedItems).filter((v) =>
      RegExp(/__error$/).test(v)
    );
    return result.length > 0;
  };

  const handleClick = () => {
    setLoading(true);
    const hasError = validate();
    if (!hasError) {
      isEditing
        ? updateRequest({
            id: localValue.id,
            [`${entity}Patch`]: cleanRequest(localValue),
          })
        : request({ [entity]: localValue });
      setLoading(false);
      changeLocalValue({});
      return closeModal();
    }
    setLoading(false);
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
            padding: "2rem 1rem",
            borderRadius: 10,
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
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
            <IconButton
              sx={{
                position: "relative",
                left: "6.5rem",
                width: 36,
                height: 36,
                backgroundColor: "#fff",
              }}
              onClick={() => {
                changeLocalValue({});
                closeModal();
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          {items.map((item: Item) => {
            if (item.render)
              return (
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  sx={{ width: "80%" }}
                >
                  {item.render(data, item, { changeLocalValue, localValue })}
                  {localValue && (localValue as any)[`${item.prop}__error`] && (
                    <Typography sx={{ color: "#ff6347" }}>
                      Fill this required field!
                    </Typography>
                  )}
                </Stack>
              );
            return (
              <Stack
                sx={{ width: "80%" }}
                direction="column"
                justifyContent="flex-start"
              >
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                  }}
                  variant="filled"
                  value={localValue ? (localValue as any)[item.prop] : ""}
                  id={`${item.prop}-input`}
                  label={item.label}
                  type={item.typeInput || "text"}
                  focused
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
                {localValue && (localValue as any)[`${item.prop}__error`] && (
                  <Typography sx={{ color: "#ff6347" }}>
                    Fill this required field!
                  </Typography>
                )}
              </Stack>
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
      </>
    </StyledModal>
  );
};

export default EditModal;
