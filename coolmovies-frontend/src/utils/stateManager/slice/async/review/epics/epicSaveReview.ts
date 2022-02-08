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
      const { vars } = action.payload;
      const save = () => saveReview(vars);
      const { errors } = await save();
      if (errors)
        return actions.loadReviewError({
          error: "Sorry, cannot save item :(",
        });
      return actions.processedRequest();
    })
  );
