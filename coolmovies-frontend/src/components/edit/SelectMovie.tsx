import React, { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import useFetchingMovies from "../../utils/hooks/useFetchMovies";
import { Box } from "@mui/material";

const SelectMovie = () => {
  const [movies] = useFetchingMovies({});

  return (
    <Box sx={{ backgroundColor: "#fff", width: "80%" }}>
      <Autocomplete
        disablePortal
        options={movies}
        sx={{ width: "100%", zIndex: 300 }}
        renderInput={(params) => (
          <TextField
            sx={{ position: "relative", zIndex: 1500 }}
            {...params}
            label="Movies"
          />
        )}
      />
    </Box>
  );
};

interface MovieOptionType {
  inputValue?: string;
  id?: string;
  title: string;
  movieDirectorId?: string;
  releaseDate?: Date;
}

export default SelectMovie;
