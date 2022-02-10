import { MoviesVars } from "../../schema/api/Movies";
import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as movieActions } from "../stateManager/slice/async/movie/movieSlice";
import { cleanRequest } from "./helpers/cleanRequest";

const useFetchingMovies = (vars: MoviesVars) => {
  const dispatch = useStateDispatch();
  const queryState = useStateSelector((state) => state.query);
  const queryVars = cleanRequest(queryState.queries.movie);
  const { fetchMovies } = movieActions;

  const action = (v: MoviesVars = queryVars) =>
    dispatch(fetchMovies({ vars: { first: 10, ...v, ...vars } }));
  action();

  const stateMovie = useStateSelector((state) => state.movie);

  return [stateMovie.fetchedMovies, action, stateMovie];
};

export default useFetchingMovies;
