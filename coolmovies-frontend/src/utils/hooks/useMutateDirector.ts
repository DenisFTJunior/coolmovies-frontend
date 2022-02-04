import {
  UpdateDirectorVars,
  SaveDirectorVars,
  DeleteDirectorVars,
} from "../../schema/api/mutation/Director";

import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { actions as directorActions } from "../stateManager/slice/async/director/directorSlice";

const useMutateDirector = () => {
  const dispatch = useStateDispatch();
  const { saveDirector, deleteDirector, updateDirector } = directorActions;

  const update = (vars: UpdateDirectorVars) =>
    dispatch(updateDirector({ vars }));
  const remove = (vars: DeleteDirectorVars) =>
    dispatch(deleteDirector({ vars }));
  const save = (vars: SaveDirectorVars) => dispatch(saveDirector({ vars }));

  return { save, update, remove };
};

export default useMutateDirector;
