import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as reviewActions } from "../stateManager/slice/async/review/reviewSlice";

const useFetchingReviews = (vars: any = {}) => {
  const dispatch = useStateDispatch();
  const { fetchReviews } = reviewActions;
  const stateReview = useStateSelector((state) => state.review);

  const action = (v: object) => dispatch(fetchReviews({ vars }));

  action(vars);

  return [stateReview.fetchedReview, action, stateReview];
};

export default useFetchingReviews;
