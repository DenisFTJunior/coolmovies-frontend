import * as React from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  IconButton,
  ModalUnstyled,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import { DetailItem } from "../../schema/components/Modal";
import { LocalLoading } from "../Loading";
import useModal from "../../utils/hooks/useModal";

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

const DetailsModal = ({
  name,
  items,
}: {
  name: string;
  items: DetailItem[];
}) => {
  const [modalData, { closeModal }] = useModal(name);

  const { data, isOpen } = modalData;
  console.log("data", data);

  if (!data && isOpen) return <LocalLoading />;

  return (
    <StyledModal open={isOpen}>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          width: "36rem",
          maxHeight: "80%",
          background:
            "linear-gradient(180deg, #301553 0%, rgba(149, 93, 220, 0) 100%)",
          padding: 1,
          borderRadius: 2,
          overflowY: "scroll",
        }}
      >
        <IconButton
          sx={{
            position: "relative",
            left: "15rem",
            top: "1rem",
            width: 36,
            height: 36,
            backgroundColor: "#fff",
          }}
          onClick={() => {
            closeModal();
          }}
        >
          <CloseIcon />
        </IconButton>

        {items.map((item: DetailItem) => {
          return (
            <Stack
              sx={{
                width: "80%",
                background: "#fff",
                borderRadius: 2,
                padding: 1,
                margin: 1,
              }}
            >
              <Typography variant="body1" component="span">
                {item.label}
              </Typography>
              {item.render ? (
                item.render(data, item)
              ) : (
                <Typography variant="h6" component="span">
                  {data ? data[item.prop] : ""}
                </Typography>
              )}
            </Stack>
          );
        })}
      </Stack>
    </StyledModal>
  );
};

export default DetailsModal;
