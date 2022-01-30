import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { ReviewSliceAction, actions } from "../reviewSlice";
import updateReview from "../../../../../api/mutations/movieReview/updateReview";

export const epicUpdateReview: Epic = (
  action$: Observable<ReviewSliceAction["updateReview"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.updateReview.match),
    switchMap(async (action) => {
      const { data } = action.payload;
      const [update, { error }] = updateReview(data);
      await update();
      if (error)
        return actions.loadReviewError({
          error: "Sorry, cannot update item :(",
        });
    })
  );
