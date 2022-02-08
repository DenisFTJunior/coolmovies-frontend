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
      const { vars } = action.payload;
      const update = () => updateComment(vars);
      const { errors } = await update();
      if (errors)
        return actions.loadCommentError({
          error: "Sorry, cannot update item :(",
        });
      return actions.processedRequest();
    })
  );
