import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { UserSliceAction, actions } from "../userSlice";
import deleteUser from "../../../../../api/mutations/users/deleteUser";

export const epicDeleteUser: Epic = (
  action$: Observable<UserSliceAction["deleteUser"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.deleteUser.match),
    switchMap(async (action) => {
      const { data } = action.payload;
      const [remove, { error }] = deleteUser(data);
      await remove();
      if (error)
        return actions.loadUserError({
          error: "Sorry, cannot delete item :(",
        });
    })
  );
