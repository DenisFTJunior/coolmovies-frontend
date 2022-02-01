import { Box } from "@mui/material";
import React from "react";

import MoviesRecommended from "../../../pagePieces/MoviesRecommended";

const RecommendedSection = () => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <MoviesRecommended />
  </Box>
);

export default RecommendedSection;
