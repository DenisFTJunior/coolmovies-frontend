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
      const { data } = action.payload;
      const [save, { error }] = saveDirector(data);
      await save();
      if (error)
        return actions.loadDirectorError({
          error: "Sorry, cannot save item :(",
        });
    })
  );
