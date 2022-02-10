import { ReviewsVars } from "../../schema/api/Reviews";
import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as reviewActions } from "../stateManager/slice/async/review/reviewSlice";
import { cleanRequest } from "./helpers/cleanRequest";

const useFetchingReviews = (vars: ReviewsVars) => {
  const dispatch = useStateDispatch();
  const { fetchReviews } = reviewActions;
  const queryState = useStateSelector((state) => state.query);
  const stateReview = useStateSelector((state) => state.review);

  const queryVars = cleanRequest(queryState.queries.review);

  const action = (v: ReviewsVars = queryVars) =>
    dispatch(fetchReviews({ vars: { first: 10, ...v, ...vars } }));

  action();

  return [stateReview.fetchedReview, action, stateReview];
};

export default useFetchingReviews;

export const useFetchingReview = (id: string) => {
  const dispatch = useStateDispatch();
  const { fetchReview } = reviewActions;
  const stateReview = useStateSelector((state) => state.review);

  const action = (v: string) => dispatch(fetchReview({ vars: { id: v } }));

  action(id);

  return [stateReview.fetchedReview, action, stateReview];
};
