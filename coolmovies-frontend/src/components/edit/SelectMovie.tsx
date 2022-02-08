import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

import useFetchingMovies from "../../utils/hooks/useFetchMovies";
import { SelectProps } from "../../schema/components/Select";
import { Movie } from "../../schema/api/Movie";
import { Review } from "../../schema/api/Review";

const SelectMovie = ({ onBlur, id }: SelectProps) => {
  const [value, setValue] = useState<Review | null>(null);
  const [movies] = useFetchingMovies({});

  const selectMovieForUpdate = movies?.allMovies.movies.filter(
    (movie: Movie) => movie.id === id
  );
  useEffect(() => {
    if (value === null && selectMovieForUpdate)
      setValue(selectMovieForUpdate[0] || null);
  }, [movies]);

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Autocomplete
        value={value}
        onChange={(e, v) => setValue(v)}
        loading={!movies}
        getOptionLabel={(option) => option.title}
        options={movies.allMovies.movies}
        sx={{ width: "100%", zIndex: 300 }}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e, value)}
        renderOption={(props, option) => <li {...props}>{option?.title}</li>}
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

export default SelectMovie;
