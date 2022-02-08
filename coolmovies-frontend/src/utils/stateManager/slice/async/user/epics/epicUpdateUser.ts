import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { UserSliceAction, actions } from "../userSlice";
import updateUser from "../../../../../api/mutations/users/updateUser";

export const epicUpdateUser: Epic = (
  action$: Observable<UserSliceAction["updateUser"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.updateUser.match),
    switchMap(async (action) => {
      const { vars } = action.payload;
      const update = () => updateUser(vars);
      const { errors } = await update();
      if (errors)
        return actions.loadUserError({
          error: "Sorry, cannot update item :(",
        });
      return actions.processedRequest();
    })
  );
