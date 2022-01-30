import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { DirectorSliceAction, actions } from "../directorSlice";
import updateDirector from "../../../../../api/mutations/director/updateDirector";

export const epicUpdateDirector: Epic = (
  action$: Observable<DirectorSliceAction["updateDirector"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.updateDirector.match),
    switchMap(async (action) => {
      const { data } = action.payload;
      const [update, { error }] = updateDirector(data);
      await update();
      if (error)
        return actions.loadDirectorError({
          error: "Sorry, cannot update item :(",
        });
    })
  );
