import { useEffect } from "react";

import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as directorActions } from "../stateManager/slice/async/director/directorSlice";

const useFetchingDirectors = (id: string) => {
  const dispatch = useStateDispatch();
  const stateDirector = useStateSelector((state) => state.director);
  const { fetchDirector } = directorActions;

  const action = (v: string) => dispatch(fetchDirector({ vars: { id: v } }));
  action(id);

  return [stateDirector.fetchDirector, action, stateDirector];
};

export default useFetchingDirectors;
