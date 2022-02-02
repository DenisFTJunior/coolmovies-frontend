import { useEffect } from "react";

import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as reviewActions } from "../stateManager/slice/async/review/reviewSlice";

const useFetchingReviews = (vars: any = {}) => {
  const dispatch = useStateDispatch();
  const { fetchReviews } = reviewActions;
  const stateMovie = useStateSelector((state) => state.movie);

  const action = (v: object) => dispatch(fetchReviews({ vars }));

  useEffect(() => {
    action(vars);
  }, []);

  return [stateMovie.fetchedReview, action];
};

export default useFetchingReviews;
