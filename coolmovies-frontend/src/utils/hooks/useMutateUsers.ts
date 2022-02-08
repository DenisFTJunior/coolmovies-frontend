import {
  DeleteUserVars,
  SaveUserVars,
  UpdateUserVars,
} from "../../schema/api/mutation/User";
import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { actions as userActions } from "../stateManager/slice/async/user/userSlice";

const useMutateUsers = () => {
  const dispatch = useStateDispatch();
  const { saveUser, deleteUser, updateUser, fetchUsers } = userActions;

  const action = (v: object) => dispatch(fetchUsers({ vars: v }));

  const update = (vars: UpdateUserVars) => {
    dispatch(updateUser({ vars }));
    action({});
  };
  const remove = (vars: DeleteUserVars) => {
    dispatch(deleteUser({ vars }));
    action({});
  };
  const save = (vars: SaveUserVars) => {
    dispatch(saveUser({ vars }));
    action({});
  };

  return { save, update, remove };
};

export default useMutateUsers;
