import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { ReviewSliceAction, actions } from "../reviewSlice";
import saveReview from "../../../../../api/mutations/movieReview/saveReview";

export const epicSaveReview: Epic = (
  action$: Observable<ReviewSliceAction["saveReview"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.saveReview.match),
    switchMap(async (action) => {
      const { data } = action.payload;
      const [save, { error }] = saveReview(data);
      await save();
      if (error)
        return actions.loadReviewError({
          error: "Sorry, cannot save item :(",
        });
    })
  );
