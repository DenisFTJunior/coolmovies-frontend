import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { MovieSliceAction, actions } from "../movieSlice";
import updateMovie from "../../../../../api/mutations/movies/updateMovie";

export const epicUpdateMovie: Epic = (
  action$: Observable<MovieSliceAction["updateMovie"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.updateMovie.match),
    switchMap(async (action) => {
      const { vars } = action.payload;
      const update = () => updateMovie(vars);
      const { errors } = await update();
      if (errors)
        return actions.loadMovieError({
          error: "Sorry, cannot update item :(",
        });
      return actions.processedRequest()
    })
  );
