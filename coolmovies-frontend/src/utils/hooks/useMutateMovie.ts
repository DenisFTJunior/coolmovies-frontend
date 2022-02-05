import {
  DeleteMovieVars,
  SaveMovieVars,
  UpdateMovieVars,
} from "../../schema/api/mutation/Movie";
import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { actions as userActions } from "../stateManager/slice/async/movie/movieSlice";

const useMutateMovie = () => {
  const dispatch = useStateDispatch();
  const { saveMovie, deleteMovie, updateMovie } = userActions;

  const update = (vars: UpdateMovieVars) => dispatch(updateMovie({ vars }));
  const remove = (vars: DeleteMovieVars) => dispatch(deleteMovie({ vars }));
  const save = (vars: SaveMovieVars) => dispatch(saveMovie({ vars }));

  return { save, update, remove };
};

export default useMutateMovie;
