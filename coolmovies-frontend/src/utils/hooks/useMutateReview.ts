import {
  DeleteReviewVars,
  SaveReviewVars,
  UpdateReviewVars,
} from "../../schema/api/mutation/Review";
import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { actions as userActions } from "../stateManager/slice/async/review/reviewSlice";

const useMutateReview = () => {
  const dispatch = useStateDispatch();
  const { saveReview, deleteReview, updateReview, fetchReviews } = userActions;
  const action = (v: object) => dispatch(fetchReviews({ vars: v }));

  const update = (vars: UpdateReviewVars) => {
    dispatch(updateReview({ vars }));
    action({});
  };
  const remove = (vars: DeleteReviewVars) => {
    dispatch(deleteReview({ vars }));
    action({});
  };
  const save = (vars: SaveReviewVars) => {
    dispatch(saveReview({ vars }));
    action({});
  };

  return { save, update, remove };
};

export default useMutateReview;
