import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as movieActions } from "../stateManager/slice/async/movie/movieSlice";
import { cleanRequest } from "./helpers/cleanRequest";

const useFetchingMovies = () => {
  const dispatch = useStateDispatch();
  const queryState = useStateSelector((state) => state.query);
  const queryVars = cleanRequest(queryState.movie);
  const { fetchMovies } = movieActions;

  const action = (v: object) =>
    dispatch(fetchMovies({ vars: { first: 20, ...v } }));
  action(queryVars);

  const stateMovie = useStateSelector((state) => state.movie);

  return [stateMovie.fetchedMovies, action, stateMovie];
};

export default useFetchingMovies;
