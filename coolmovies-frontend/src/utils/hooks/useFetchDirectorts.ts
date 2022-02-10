import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as directorActions } from "../stateManager/slice/async/director/directorSlice";
import { cleanRequest } from "./helpers/cleanRequest";

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
  const queryState = useStateSelector((state) => state.query);
  const stateDirector = useStateSelector((state) => state.director);
  const queryVars = cleanRequest(queryState.movie);
  const { fetchDirectors } = directorActions;

  const action = (v: Object) =>
    dispatch(fetchDirectors({ vars: { first: 20, ...v } }));
  action(queryVars);

  return [stateDirector.fetchedDirectors, action, stateDirector];
};

export default useFetchingDirector;
