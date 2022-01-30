import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { ReviewSliceAction, actions } from "../reviewSlice";
import getReviewQuery from "../../../../../api/queries/movieReview/getReviewQuery";

export const epicFetchReview: Epic = (
  action$: Observable<ReviewSliceAction["fetchReview"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchReview.match),
    switchMap(async (action) => {
      const { data, error } = await getReviewQuery(action.payload.vars);
      if (error)
        return actions.loadReviewError({ error: "Sorry, cannot fetch data" });
      return actions.loadedReview({ data });
    })
  );
