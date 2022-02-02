import React from "react";
import { Alert } from "@mui/material";

import Loading from "../Loading";
import AvatarWithName from "../AvatarWithName";
import useFetchingDirectors from "../../utils/hooks/useFetchDirectorts";

export const ShowDirectorById = ({ id }: { id: string }) => {

  const [directors, updateDirectorsQuery, state ] = useFetchingDirectors(id);

  if (!directors) return <Loading />;
  //error ---------------------------------------------------------------
  if (state.error)
    return <Alert severity="error">{state.error}</Alert>;
  return <AvatarWithName name={directors.name} />;
};

