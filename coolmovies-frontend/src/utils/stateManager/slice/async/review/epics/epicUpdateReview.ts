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
      const { vars } = action.payload;
      const update = () => updateReview(vars);
      const { errors } = await update();
      if (errors)
        return actions.loadReviewError({
          error: "Sorry, cannot update item :(",
        });
      return actions.processedRequest();
    })
  );
