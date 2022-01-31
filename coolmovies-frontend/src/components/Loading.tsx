import { Backdrop } from "@mui/material";

const Loading = () => (
  <Backdrop
    sx={{ color: "#fff", zIndex: 1000 }}
    open={true}
  />
);

export default Loading
