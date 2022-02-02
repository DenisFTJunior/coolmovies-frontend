import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Alert, Stack, Typography } from "@mui/material";

import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { DetailItem } from "../../schema/components/Modal";
import Loading from "../Loading";
import useModal from "../../utils/hooks/useModal";

const DetailsModal = ({
  name,
  items,
}: {
  name: string;
  items: DetailItem[];
}) => {
  const dispatch = useStateDispatch();
  const [{ data, isOpen }, { closeModal }, state] = useModal(name);

  if (!data) return <Loading />;

  return (
    <Modal open={isOpen} onClose={() => dispatch(closeModal(name))}>
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
          {items.map((item: DetailItem) => {
            return (
              <Stack direction="column" spacing={2}>
                <Typography variant="body1" component="span">
                  {item.label}
                </Typography>
                {item.render ? (
                  item.render(data, item)
                ) : (
                  <Typography variant="h6" component="span">
                    {data[item.prop]}
                  </Typography>
                )}
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Modal>
  );
};

export default DetailsModal;
