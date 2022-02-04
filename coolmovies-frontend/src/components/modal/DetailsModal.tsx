import * as React from "react";
import Modal from "@mui/material/Modal";
import { Alert, Stack, Typography } from "@mui/material";

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
  const [modalData, { closeModal }, state] = useModal(name);
  const [localData, setLocalData] = React.useState(modalData);

  React.useEffect(() => setLocalData(modalData), [modalData]);

  const { data, isOpen } = localData;

  if (!data) return <Loading />;

  return (
    <Modal open={isOpen} onClose={() => closeModal()}>
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
