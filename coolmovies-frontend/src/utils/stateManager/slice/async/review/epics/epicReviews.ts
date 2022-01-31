import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { ReviewSliceAction, actions } from "../reviewSlice";
import getReviewsQuery from "../../../../../api/queries/movieReview/getReviewsQuery";

export const epicFetchReviews: Epic = (
  action$: Observable<ReviewSliceAction["fetchReviews"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchReviews.match),
    switchMap(async (action) => {
      const { data, error, fetchMore } = await getReviewsQuery(
        action.payload.vars
      );
      if (action.payload.fetchMore)
        fetchMore({
          variables: action.payload.vars,
        });
      if (error)
        return actions.loadReviewError({ error: "Sorry, cannot fetch data" });
      return actions.loadedReview({ data });
    })
  );
