import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { MovieSliceAction, actions } from "../movieSlice";
import deleteMovie from "../../../../../api/mutations/movies/deleteMovie";

export const epicDeleteMovie: Epic = (
  action$: Observable<MovieSliceAction["deleteMovie"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.deleteMovie.match),
    switchMap(async (action) => {
      const { data } = action.payload;
      const [remove, { error }] = deleteMovie(data);
      await remove();
      if (error)
        return actions.loadMovieError({
          error: "Sorry, cannot delete item :(",
        });
    })
  );
