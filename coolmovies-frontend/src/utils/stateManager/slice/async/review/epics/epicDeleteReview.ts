import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { ReviewSliceAction, actions } from "../reviewSlice";
import deleteReview from "../../../../../api/mutations/movieReview/deleteReview";

export const epicDeleteReview: Epic = (
  action$: Observable<ReviewSliceAction["deleteReview"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.deleteReview.match),
    switchMap(async (action) => {
      const { vars } = action.payload;
      const remove = () => deleteReview(vars);
      const { errors } = await remove();
      if (errors)
        return actions.loadReviewError({
          error: "Sorry, cannot delete item :(",
        });
    })
  );
