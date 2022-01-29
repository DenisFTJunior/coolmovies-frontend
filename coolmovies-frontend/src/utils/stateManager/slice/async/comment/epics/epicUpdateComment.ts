import { Observable } from "rxjs";
import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { CommentSliceAction, actions } from "../commentSlice";
import { filter, switchMap } from "rxjs/operators";
import updateComment from "../../../../../api/mutations/comment/updateComment";

export const epicUpdateComment: Epic = (
  action$: Observable<CommentSliceAction["updateComment"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.updateComment.match),
    switchMap(async (action) => {
      const { data } = action.payload;
      const [update, { error }] = updateComment(data);
      await update();
      if (error)
        return actions.loadCommentError({
          error: "Sorry, cannot update item :(",
        });
    })
  );
