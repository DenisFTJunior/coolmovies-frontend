import React from "react";
import Avatar from "@mui/material/Avatar";

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: "#dcdcdc",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const userAvatar = ({ name }: { name: string }) => {
  return <Avatar {...stringAvatar(name)} />;
};

export default userAvatar;
