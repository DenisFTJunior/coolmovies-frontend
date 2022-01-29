import { Observable } from "rxjs";
import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import deleteComment from "../../../../../api/mutations/comment/deleteComment";
import { CommentSliceAction, actions } from "../commentSlice";
import { filter, switchMap } from "rxjs/operators";

export const epicDeleteComment: Epic = (
  action$: Observable<CommentSliceAction["deleteComment"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.deleteComment.match),
    switchMap(async (action) => {
      const { data } = action.payload;
      const [remove, { error }] = deleteComment(data);
      await remove();
      if (error)
        return actions.loadCommentError({
          error: "Sorry, cannot delete item :(",
        });
    })
  );
