import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { MovieSliceAction, actions } from "../movieSlice";
import saveMovie from "../../../../../api/mutations/movies/saveMovie";

export const epicSaveMovie: Epic = (
  action$: Observable<MovieSliceAction["saveMovie"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.saveMovie.match),
    switchMap(async (action) => {
      const { vars } = action.payload;
      const save = () => saveMovie(vars);
      const { errors } = await save();
      if (errors)
        return actions.loadMovieError({
          error: "Sorry, cannot save item :(",
        });
      return actions.processedRequest();
    })
  );
