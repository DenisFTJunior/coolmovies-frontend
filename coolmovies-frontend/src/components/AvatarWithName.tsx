import React from "react";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";

function stringAvatar(name: string) {
  console.log(name);
  return {
    sx: {
      bgcolor: "#dcdcdc",
      width: {xs:16, md:24},
      height: {xs:16, md:24},
      fontSize: {xs:6, md:10},
    },
    children: `${name?.split(" ")[0][0]}${
      name?.split(" ")[1] ? name?.split(" ")[1][0] : ""
    }`,
  };
}

const AvatarWithName = ({ name }: { name: string }) => {
  return (
    <Stack
      gap={1}
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Avatar {...stringAvatar(name)} />
      <Typography component="h5" sx={{ fontSize: { xs: ".6rem", md: "1rem" } }}>
        {name}
      </Typography>
    </Stack>
  );
};

export default AvatarWithName;
