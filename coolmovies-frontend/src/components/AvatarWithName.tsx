import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Typography } from "@mui/material";

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: "#dcdcdc",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const AvatarWithName = ({ name }: { name: string }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 10 }}>
      <Avatar {...stringAvatar(name)} />
      <Typography variant="h5" component="h5">
        {name}
      </Typography>
    </Box>
  );
};

export default AvatarWithName;
