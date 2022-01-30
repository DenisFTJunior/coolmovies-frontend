import { Observable } from "rxjs";
import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import getCommentQuery from "../../../../../api/queries/comment/getComment";
import { CommentSliceAction, actions } from "../commentSlice";
import { filter, switchMap } from "rxjs/operators";

export const epicFetchComment: Epic = (
  action$: Observable<CommentSliceAction["fetchComment"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchComment.match),
    switchMap(async (action) => {
      const { data, error } = await getCommentQuery(action.payload.data);
      if (error) return actions.loadCommentError({error: "Sorry, cannot fetch data"});
      return actions.loadedComment({ data });
    })
  );
