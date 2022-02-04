import React, { FormEvent, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useFetchingDirectors } from "../../utils/hooks/useFetchDirectorts";
import useMutateDirector from "../../utils/hooks/useMutateDirector";

const filter = createFilterOptions<DirectorOptionType>();

const SelectUser = () => {
  const [directors, updateDirectors, state] = useFetchingDirectors();
  const { save } = useMutateDirector();

  const [value, setValue] = useState<DirectorOptionType | null>(null);
  const [open, toggleOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState<DirectorOptionType>({
    name: "",
    age: 0,
  });

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
    <>
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
        options={directors}
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
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="User Select" />}
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
    </>
  );
};

interface DirectorOptionType {
  inputValue?: string;
  id?: string;
  name: string;
  age?: number;
}

export default SelectUser;
