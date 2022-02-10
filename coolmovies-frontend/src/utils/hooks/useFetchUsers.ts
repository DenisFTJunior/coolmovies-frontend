import { useEffect } from "react";
import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as userActions } from "../stateManager/slice/async/user/userSlice";
import { cleanRequest } from "./helpers/cleanRequest";

const useFetchingUsers = () => {
  const dispatch = useStateDispatch();
  const { fetchUsers } = userActions;
  const queryState = useStateSelector((state) => state.query);
  const stateUser = useStateSelector((state) => state.user);

  const queryVars = cleanRequest(queryState.user);
  const action = (v: object) =>
    dispatch(fetchUsers({ vars: { first: 20, ...v } }));

  action(queryVars);

  return [stateUser.fetchedUsers, action, stateUser];
};

export default useFetchingUsers;
