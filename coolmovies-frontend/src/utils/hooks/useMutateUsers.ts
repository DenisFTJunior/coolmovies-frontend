import {
  DeleteUserVars,
  SaveUserVars,
  UpdateUserVars,
} from "../../schema/api/mutation/User";
import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { actions as userActions } from "../stateManager/slice/async/user/userSlice";

const useMutateUsers = () => {
  const dispatch = useStateDispatch();
  const { saveUser, deleteUser, updateUser } = userActions;

  const update = (vars: UpdateUserVars) => dispatch(updateUser({ vars }));
  const remove = (vars: DeleteUserVars) => dispatch(deleteUser({ vars }));
  const save = (vars: SaveUserVars) => dispatch(saveUser({ vars }));

  return { save, update, remove };
};

export default useMutateUsers;
