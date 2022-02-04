import React, { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import useFetchingMovies from "../../utils/hooks/useFetchMovies";

const filter = createFilterOptions<MovieOptionType>();

const SelectUser = () => {
  const [movies, updateMovies, state] = useFetchingMovies({});

  const [value, setValue] = useState<MovieOptionType | null>(null);
  const [open, toggleOpen] = useState(false);
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
    <>
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
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
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
      {/* modal */}
    </>
  );
};

interface MovieOptionType {
  inputValue?: string;
  id?: string;
  title: string;
  movieDirectorId?: string;
  releaseDate?: Date;
}

export default SelectUser;
