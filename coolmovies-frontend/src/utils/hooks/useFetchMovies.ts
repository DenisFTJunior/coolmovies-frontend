import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as movieActions } from "../stateManager/slice/async/movie/movieSlice";

const useFetchingMovies = (vars: any = {}) => {
  const dispatch = useStateDispatch();
  const { fetchMovies } = movieActions;

  const action = (v: object) => dispatch(fetchMovies({ vars }));
  action(vars);

  const stateMovie = useStateSelector((state) => state.movie);

  return [stateMovie.fetchedMovies, action, stateMovie];
};

export default useFetchingMovies;
