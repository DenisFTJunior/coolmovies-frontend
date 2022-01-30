import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { MovieSliceAction, actions } from "../directorSlice";
import updateDirector from "../../../../../api/mutations/director/updateDirector";
import updateMovie from "../../../../../api/mutations/movies/updateMovie";

export const epicUpdateMovie: Epic = (
  action$: Observable<MovieSliceAction["updateMovie"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.updateMovie.match),
    switchMap(async (action) => {
      const { data } = action.payload;
      const [update, { error }] = updateMovie(data);
      await update();
      if (error)
        return actions.loadMovieError({
          error: "Sorry, cannot update item :(",
        });
    })
  );
