import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { DirectorSliceAction, actions } from "../directorSlice";
import getDirectorQuery from "../../../../../api/queries/director/getDirectorQuery";

export const epicFetchDirector: Epic = (
  action$: Observable<DirectorSliceAction["fetchDirector"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchDirector.match),
    switchMap(async (action) => {
      const { data, error } = await getDirectorQuery(action.payload.vars);
      if (error)
        return actions.loadDirectorError({ error: "Sorry, cannot fetch data" });
      return actions.loadedDirector({ data });
    })
  );
