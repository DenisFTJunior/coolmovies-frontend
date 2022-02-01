import React from "react";
import { Alert } from "@mui/material";

import Loading from "../Loading";
import AvatarWithName from "../AvatarWithName";
import useFetchingDirectors from "../../utils/hooks/useFetchDirectorts";

export const ShowDirectorById = ({ directorId }: { directorId: string }) => {

  const stateDirector = useFetchingDirectors(directorId);

  if (!stateDirector.fetchedDirectors) return <Loading />;
  //error ---------------------------------------------------------------
  if (stateDirector.error)
    return <Alert severity="error">{stateDirector.error}</Alert>;
  return <AvatarWithName name={stateDirector.fetchedDirectors.name} />;
};
