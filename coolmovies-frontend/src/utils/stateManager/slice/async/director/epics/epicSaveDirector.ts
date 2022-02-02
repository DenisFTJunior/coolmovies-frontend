import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { DirectorSliceAction, actions } from "../directorSlice";
import saveDirector from "../../../../../api/mutations/director/saveDirector";

export const epicSaveDirector: Epic = (
  action$: Observable<DirectorSliceAction["saveDirector"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.saveDirector.match),
    switchMap(async (action) => {
      const { vars } = action.payload;
      const save = () => saveDirector(vars);
      const { errors } = await save();
      if (errors)
        return actions.loadDirectorError({
          error: "Sorry, cannot save item :(",
        });
    })
  );
