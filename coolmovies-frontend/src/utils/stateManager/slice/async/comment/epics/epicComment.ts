import { Observable } from "rxjs";
import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import useCommentQuery from "../../../../../api/queries/comment/useCommentQuery";
import { CommentSliceAction, actions } from "../commentSlice";
import { filter, switchMap } from "rxjs/operators";

export const epicFetchComment: Epic = (
  action$: Observable<CommentSliceAction["fetchComment"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchComment.match),
    switchMap(async (action) => {
      const { data, error } = await useCommentQuery(action.payload.vars);
      if (error) return actions.loadCommentError({error: "Sorry, cannot fetch data"});
      return actions.loadedComment({ data });
    })
  );
