import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

import useFetchingMovies from "../../utils/hooks/useFetchMovies";
import { SelectProps } from "../../schema/components/Select";

const SelectMovie = ({ onBlur }: SelectProps) => {
  const [value, setValue] = useState(null);
  const [movies] = useFetchingMovies({});

  return (
    <Box sx={{ backgroundColor: "#fff", width: "80%" }}>
      <Autocomplete
        value={value}
        onChange={(e, v) => setValue(v)}
        disablePortal
        options={movies}
        sx={{ width: "100%", zIndex: 300 }}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e, value)}
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
