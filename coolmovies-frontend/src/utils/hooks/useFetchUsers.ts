import { useEffect } from "react";
import { UsersVars } from "../../schema/api/Users";
import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as userActions } from "../stateManager/slice/async/user/userSlice";
import { cleanRequest } from "./helpers/cleanRequest";

const useFetchingUsers = (vars: UsersVars) => {
  const dispatch = useStateDispatch();
  const { fetchUsers } = userActions;
  const queryState = useStateSelector((state) => state.query);
  const stateUser = useStateSelector((state) => state.user);

  const queryVars = cleanRequest(queryState.queries.user);
  const action = (v: UsersVars = queryVars) =>
    dispatch(fetchUsers({ vars: { first: 20, ...v, ...vars } }));

  console.log("queryUsers", queryState);
  action();

  return [stateUser.fetchedUsers, action, stateUser];
};

export default useFetchingUsers;
