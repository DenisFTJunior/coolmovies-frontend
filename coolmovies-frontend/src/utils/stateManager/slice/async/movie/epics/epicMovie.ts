import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { MovieSliceAction, actions } from "../movieSlice";
import getMovieQuery from "../../../../../api/queries/movies/getMovieQuery";

export const epicFetchMovie: Epic = (
  action$: Observable<MovieSliceAction["fetchMovie"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchMovie.match),
    switchMap(async (action) => {
      const { data, error } = await getMovieQuery(action.payload.vars);
      if (error)
        return actions.loadMovieError({ error: "Sorry, cannot fetch data" });
      return actions.loadedMovie({ data });
    })
  );
