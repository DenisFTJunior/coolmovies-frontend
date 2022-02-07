import React from "react";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";

function stringAvatar(name: string) {
  console.log(name);
  return {
    sx: {
      bgcolor: "#dcdcdc",
      width: 24,
      height: 24,
      fontSize: 10,
    },
    children: `${name?.split(" ")[0][0]}${
      name?.split(" ")[1] ? name?.split(" ")[1][0] : ""
    }`,
  };
}

const AvatarWithName = ({ name }: { name: string }) => {
  return (
    <Stack
      gap={3}
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Avatar {...stringAvatar(name)} />
      <Typography component="h5">{name}</Typography>
    </Stack>
  );
};

export default AvatarWithName;
