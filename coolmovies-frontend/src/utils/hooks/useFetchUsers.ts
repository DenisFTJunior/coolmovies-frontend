import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as userActions } from "../stateManager/slice/async/user/userSlice";

const useFetchingUsers = (vars: any = {}) => {
  const dispatch = useStateDispatch();
  const { fetchUsers } = userActions;
  const stateUser = useStateSelector((state) => state.user);

  const action = (v: object) => dispatch(fetchUsers({ vars }));

  action(vars);

  return [stateUser.fetchedUsers, action, stateUser];
};

export default useFetchingUsers;
