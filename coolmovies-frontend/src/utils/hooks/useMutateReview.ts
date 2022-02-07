import {
  DeleteReviewVars,
  SaveReviewVars,
  UpdateReviewVars,
} from "../../schema/api/mutation/Review";
import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { actions as userActions } from "../stateManager/slice/async/review/reviewSlice";

const useMutateReview = () => {
  const dispatch = useStateDispatch();
  const { saveReview, deleteReview, updateReview } = userActions;

  const update = (vars: UpdateReviewVars) => dispatch(updateReview({ vars }));
  const remove = (vars: DeleteReviewVars) => dispatch(deleteReview({ vars }));
  const save = (vars: SaveReviewVars) => dispatch(saveReview({ vars }));

  return { save, update, remove };
};

export default useMutateReview;
