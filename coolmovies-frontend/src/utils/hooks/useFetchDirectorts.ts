import { useEffect } from "react";

import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as directorActions } from "../stateManager/slice/async/director/directorSlice";

const useFetchingDirector = (id: string) => {
  const dispatch = useStateDispatch();
  const stateDirector = useStateSelector((state) => state.director);
  const { fetchDirector } = directorActions;

  const action = (v: string) => dispatch(fetchDirector({ vars: { id: v } }));
  action(id);

  return [stateDirector.fetchDirector, action, stateDirector];
};

export const useFetchingDirectors = (vars: Object = {}) => {
  const dispatch = useStateDispatch();
  const stateDirector = useStateSelector((state) => state.director);
  const { fetchDirectors } = directorActions;

  const action = (v: Object) => dispatch(fetchDirectors({ vars: v }));
  action(vars);

  return [stateDirector.fetchedDirectors, action, stateDirector];
};

export default useFetchingDirector;
