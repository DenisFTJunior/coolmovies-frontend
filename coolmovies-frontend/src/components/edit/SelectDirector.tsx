import React, { FormEvent, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useFetchingDirectors } from "../../utils/hooks/useFetchDirectorts";
import useMutateDirector from "../../utils/hooks/useMutateDirector";
import { Director } from "../../schema/api/Director";
import { SelectProps } from "../../schema/components/Select";

const filter = createFilterOptions<DirectorOptionType>();

const SelectDirector = ({ onBlur, id }: SelectProps) => {
  const [directors] = useFetchingDirectors();
  const { save } = useMutateDirector();

  const [value, setValue] = useState<DirectorOptionType | null>(null);
  const [open, toggleOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState<DirectorOptionType>({
    name: "",
    age: 0,
  });

  const selectDirectorForUpdate = directors?.allMovieDirectors.directors.filter(
    (director: Director) => director.id === id
  );
  useEffect(() => {
    if (value === null && selectDirectorForUpdate)
      setValue(selectDirectorForUpdate[0] || null);
  }, [directors]);

  const handleClose = () => {
    setDialogValue({
      name: "",
      age: 0,
    });
    toggleOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue({
      name: dialogValue.name,
      age: dialogValue.age,
    });
    if (value !== null) save({ movieDirector: value });
    handleClose();
  };

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                name: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e, value)}
        loading={!directors}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        options={directors?.allMovieDirectors.directors}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: "100%", zIndex: 300 }}
        renderInput={(params) => (
          <TextField
            sx={{ position: "relative", zIndex: 1500 }}
            {...params}
            label="Directors"
          />
        )}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new Director</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any Director in our list? Please, add it!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.name}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  name: event.target.value,
                })
              }
              label="Name"
              type="text"
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="age"
              value={dialogValue.age}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  age: parseInt(event.target.value),
                })
              }
              label="Age"
              type="number"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

interface DirectorOptionType {
  inputValue?: string;
  id?: string;
  name: string;
  age?: number;
}

export default SelectDirector;
