import { Observable } from "rxjs";
import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import getCommentsQuery from "../../../../../api/queries/comment/getComments";
import { CommentSliceAction, actions } from "../commentSlice";
import { filter, switchMap } from "rxjs/operators";

export const epicFetchComments: Epic = (
  action$: Observable<CommentSliceAction["fetchComments"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchComments.match),
    switchMap(async () => {
      const { data, error } = await getCommentsQuery({});
      if (error) return actions.loadCommentError({error: "Sorry, cannot fetch data"});
      return actions.loadedComment({ data });
    })
  );
