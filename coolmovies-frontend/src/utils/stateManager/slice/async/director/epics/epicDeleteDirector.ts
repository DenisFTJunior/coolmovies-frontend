import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { DirectorSliceAction, actions } from "../directorSlice";
import deleteDirector from "../../../../../api/mutations/director/deleteDirector";

export const epicDeleteDirector: Epic = (
  action$: Observable<DirectorSliceAction["deleteDirector"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.deleteDirector.match),
    switchMap(async (action) => {
      const { vars } = action.payload;
      const remove = () => deleteDirector(vars);
      const { errors } = await remove();
      if (errors)
        return actions.loadDirectorError({
          error: "Sorry, cannot delete item :(",
        });
    })
  );
