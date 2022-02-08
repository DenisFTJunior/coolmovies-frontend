import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { UserSliceAction, actions } from "../userSlice";
import saveUser from "../../../../../api/mutations/users/saveUser";

export const epicSaveUser: Epic = (
  action$: Observable<UserSliceAction["saveUser"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.saveUser.match),
    switchMap(async (action) => {
      const { vars } = action.payload;
      const save = () => saveUser(vars);
      const { errors } = await save();
      if (errors)
        return actions.loadUserError({
          error: "Sorry, cannot save item :(",
        });
      return actions.processedRequest();
    })
  );
