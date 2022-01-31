import React from "react";
import { Alert } from "@mui/material";

import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import { actions as directorActions } from "../../utils/stateManager/slice/async/director/directorSlice";
import Loading from "../Loading";
import AvatarWithName from "../AvatarWithName";

export const ShowDirectorById = ({ directorId }: { directorId: string }) => {
  const dispatch = useStateDispatch();

  const stateDirector = useStateSelector((state) => state.director);
  const { fetchDirector, clearDirectorData } = directorActions;

  //clear data ----------------------------------------------------------
  if (stateDirector.fetchedDirectors) dispatch(clearDirectorData());

  //loading -------------------------------------------------------------
  if (!stateDirector.fetchedDirectors) return <Loading />;

  //Fetch ---------------------------------------------------------------
  dispatch(fetchDirector({ vars: { id: directorId } }));

  //error ---------------------------------------------------------------
  if (stateDirector.error)
    return <Alert severity="error">{stateDirector.error}</Alert>;
  return <AvatarWithName name={stateDirector.fetchedDirectors.name} />;
};
