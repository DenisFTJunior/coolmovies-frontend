import React, { FormEvent, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import useFetchingUsers from "../../utils/hooks/useFetchUsers";
import useMutateUsers from "../../utils/hooks/useMutateUsers";
import { Box } from "@mui/material";
import { LocalLoading } from "../Loading";

const filter = createFilterOptions<UserOptionType>();

const SelectUser = ({
  onBlur,
  id,
}: {
  onBlur: (e: React.FocusEvent<HTMLInputElement>, value: any) => void;
  id?: string;
}) => {
  const [users] = useFetchingUsers({});
  const { save } = useMutateUsers();

  const [value, setValue] = useState<UserOptionType | null>(null);

  const [open, toggleOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState<UserOptionType>({
    id: "",
    name: "",
  });

  const handleClose = () => {
    setDialogValue({
      id: "",
      name: "",
    });
    toggleOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue({
      name: dialogValue.name,
    });
    if (!(value === null)) save({ user: value });
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
        loading={!users}
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
        options={users?.allUsers?.users}
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
            label="Users"
          />
        )}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any User in our list? Please, add it!
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

interface UserOptionType {
  inputValue?: string;
  id?: string;
  name: string;
}

export default SelectUser;
