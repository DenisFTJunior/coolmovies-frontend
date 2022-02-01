import { useEffect } from "react";

import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as directorActions } from "../stateManager/slice/async/director/directorSlice";

const useFetchingDirectors = (directorId: string) => {
  const dispatch = useStateDispatch();
  const stateDirector = useStateSelector((state) => state.director);
  const { fetchDirector, clearDirectorData } = directorActions;

  if (stateDirector.fetchedDirectors) dispatch(clearDirectorData());

  useEffect(() => {
    dispatch(fetchDirector({ vars: { id: directorId } }));
  }, []);

  return stateDirector;
};

export default useFetchingDirectors;
