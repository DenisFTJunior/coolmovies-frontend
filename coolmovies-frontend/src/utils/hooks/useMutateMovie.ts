import {
  DeleteMovieVars,
  SaveMovieVars,
  UpdateMovieVars,
} from "../../schema/api/mutation/Movie";
import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { actions as movieActions } from "../stateManager/slice/async/movie/movieSlice";

const useMutateMovie = () => {
  const dispatch = useStateDispatch();
  const { saveMovie, deleteMovie, updateMovie, fetchMovies } = movieActions;

  const action = (v: object) => dispatch(fetchMovies({ vars: v }));

  const update = (vars: UpdateMovieVars) => {
    dispatch(updateMovie({ vars }));
    action({});
  };
  const remove = (vars: DeleteMovieVars) => {
    dispatch(deleteMovie({ vars }));
    action({});
  };
  const save = (vars: SaveMovieVars) => {
    dispatch(saveMovie({ vars }));
    action({});
  };

  return { save, update, remove };
};

export default useMutateMovie;
