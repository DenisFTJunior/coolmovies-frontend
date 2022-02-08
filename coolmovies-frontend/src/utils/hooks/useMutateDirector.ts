import {
  UpdateDirectorVars,
  SaveDirectorVars,
  DeleteDirectorVars,
} from "../../schema/api/mutation/Director";

import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { actions as directorActions } from "../stateManager/slice/async/director/directorSlice";

const useMutateDirector = () => {
  const dispatch = useStateDispatch();
  const { saveDirector, deleteDirector, updateDirector, fetchDirectors } =
    directorActions;

  const action = (v: Object) => dispatch(fetchDirectors({ vars: v }));

  const update = (vars: UpdateDirectorVars) => {
    dispatch(updateDirector({ vars }));
    action({});
  };
  const remove = (vars: DeleteDirectorVars) => {
    dispatch(deleteDirector({ vars }));
    action({});
  };
  const save = (vars: SaveDirectorVars) => {
    dispatch(saveDirector({ vars }));
    action({});
  };

  return { save, update, remove };
};

export default useMutateDirector;
