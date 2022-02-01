import React from "react";

import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => (
  <Backdrop sx={{ color: "#fff", zIndex: 1000 }} open={true}>
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default Loading;
