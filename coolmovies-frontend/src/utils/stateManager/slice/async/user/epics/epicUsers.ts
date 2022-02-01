import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { UserSliceAction, actions } from "../userSlice";
import getUsersQuery from "../../../../../api/queries/user/getUsersQuery";

export const epicFetchUsers: Epic = (
  action$: Observable<UserSliceAction["fetchUsers"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchUsers.match),
    switchMap(async (action) => {
      const { data, error } = await getUsersQuery(
        action.payload.vars
      );
      if (error)
        return actions.loadUserError({ error: "Sorry, cannot fetch data" });
      return actions.loadedUser({ data });
    })
  );
