import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { UserSliceAction, actions } from "../userSlice";
import useUserQuery from "../../../../../api/queries/user/useUserQuery";

export const epicFetchUser: Epic = (
  action$: Observable<UserSliceAction["fetchUser"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchUser.match),
    switchMap(async (action) => {
      const { data, error } = await useUserQuery(action.payload.vars);
      if (error)
        return actions.loadUserError({ error: "Sorry, cannot fetch data" });
      return actions.loadedUser({ data });
    })
  );
