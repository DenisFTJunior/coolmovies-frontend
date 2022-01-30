import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { MovieSliceAction, actions } from "../directorSlice";
import saveMovie from "../../../../../api/mutations/movies/saveMovie";

export const epicSaveMovie: Epic = (
  action$: Observable<MovieSliceAction["saveMovie"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.saveMovie.match),
    switchMap(async (action) => {
      const { data } = action.payload;
      const [save, { error }] = saveMovie(data);
      await save();
      if (error)
        return actions.loadMovieError({
          error: "Sorry, cannot save item :(",
        });
    })
  );
