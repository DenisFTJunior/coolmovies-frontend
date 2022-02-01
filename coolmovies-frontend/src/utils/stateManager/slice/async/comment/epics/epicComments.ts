import { Observable } from "rxjs";
import { Epic, StateObservable } from "redux-observable";
import { RootState } from "../../../../../../schema/stateManager/StoreType";
import useCommentsQuery from "../../../../../api/queries/comment/useCommentsQuery";
import { CommentSliceAction, actions } from "../commentSlice";
import { filter, switchMap } from "rxjs/operators";

export const epicFetchComments: Epic = (
  action$: Observable<CommentSliceAction["fetchComments"]>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.fetchComments.match),
    switchMap(async (action) => {
      const { data, error, fetchMore } = await useCommentsQuery(
        action.payload.vars
      );
      if (action.payload.fetchMore)
        fetchMore({
          variables: action.payload.vars,
        });
      if (error)
        return actions.loadCommentError({ error: "Sorry, cannot fetch data" });
      return actions.loadedComment({ data });
    })
  );
