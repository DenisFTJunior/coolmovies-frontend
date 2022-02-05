import React, { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import useFetchingMovies from "../../utils/hooks/useFetchMovies";
import { Box } from "@mui/material";

const filter = createFilterOptions<MovieOptionType>();

//fix
const SelectMovie = () => {
  const [movies, updateMovies, state] = useFetchingMovies({});

  const [value, setValue] = useState<MovieOptionType | null>(null);
  const [dialogValue, setDialogValue] = useState<MovieOptionType>({
    id: "",
    title: "",
    releaseDate: undefined,
    movieDirectorId: "",
  });

  const handleClose = () => {
    setDialogValue({
      id: "",
      title: "",
      releaseDate: undefined,
      movieDirectorId: "",
    });
    toggleOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue({
      id: dialogValue.id,
      title: dialogValue.title,
      releaseDate: dialogValue.releaseDate,
      movieDirectorId: dialogValue.movieDirectorId,
    });
    handleClose();
  };

  return (
    <Box sx={{width:"100%", backgroundColor:"#fff"}}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                title: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        loading={!movies}
        filterOptions={(options, params) => filter(options, params)}
        options={movies}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Movie Select" />}
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
