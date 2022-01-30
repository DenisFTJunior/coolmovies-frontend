import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { MovieSliceAction, actions } from "../movieSlice";
import getMoviesQuery from "../../../../../api/queries/movies/getMoviesQuery";

export const epicFetchMovies: Epic = (
  action$: Observable<MovieSliceAction["fetchMovies"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchMovies.match),
    switchMap(async (action) => {
      const { data, error, fetchMore } = await getMoviesQuery(
        action.payload.vars
      );
      if (action.payload.fetchMore)
        fetchMore({
          variables: action.payload.vars,
        });
      if (error)
        return actions.loadMovieError({ error: "Sorry, cannot fetch data" });
      return actions.loadedMovie({ data });
    })
  );