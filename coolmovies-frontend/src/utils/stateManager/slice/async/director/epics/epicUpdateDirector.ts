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
      const { vars } = action.payload;
      const update = () => updateDirector(vars);
      const { errors } = await update();
      if (errors)
        return actions.loadDirectorError({
          error: "Sorry, cannot update item :(",
        });
      return actions.processedRequest();
    })
  );
