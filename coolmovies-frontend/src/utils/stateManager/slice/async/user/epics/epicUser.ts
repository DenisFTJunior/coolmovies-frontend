import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { UserSliceAction, actions } from "../userSlice";
import getUserQuery from "../../../../../api/queries/user/getUserQuery";

export const epicFetchUser: Epic = (
  action$: Observable<UserSliceAction["fetchUser"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchUser.match),
    switchMap(async (action) => {
      const { data, error } = await getUserQuery(action.payload.data);
      if (error)
        return actions.loadUserError({ error: "Sorry, cannot fetch data" });
      return actions.loadedUser({ data });
    })
  );
