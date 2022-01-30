import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { DirectorSliceAction, actions } from "../directorSlice";
import getDirectorsQuery from "../../../../../api/queries/director/getDirectorsQuery";

export const epicFetchDirectors: Epic = (
  action$: Observable<DirectorSliceAction["fetchDirectors"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchDirectors.match),
    switchMap(async (action) => {
      const { data, error, fetchMore } = await getDirectorsQuery(
        action.payload.data
      );
      if (action.payload.fetchMore)
        fetchMore({
          variables: action.payload.data,
        });
      if (error)
        return actions.loadDirectorError({ error: "Sorry, cannot fetch data" });
      return actions.loadedDirector({ data });
    })
  );
