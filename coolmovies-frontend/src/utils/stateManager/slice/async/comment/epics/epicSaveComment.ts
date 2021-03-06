import { Observable } from "rxjs";
import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import { CommentSliceAction, actions } from "../commentSlice";
import { filter, switchMap } from "rxjs/operators";
import saveComment from "../../../../../api/mutations/comment/saveComment";

export const epicSaveComment: Epic = (
  action$: Observable<CommentSliceAction["saveComment"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.saveComment.match),
    switchMap(async (action) => {
      const { vars } = action.payload;
      const save = () => saveComment(vars);
      const { errors } = await save();
      if (errors)
        return actions.loadCommentError({
          error: "Sorry, cannot save item :(",
        });
      return actions.processedRequest();
    })
  );
