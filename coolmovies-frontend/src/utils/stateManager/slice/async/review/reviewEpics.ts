import { combineEpics } from "redux-observable";

import { epicDeleteReview } from "./epics/epicDeleteReview";
import { epicFetchReview } from "./epics/epicReview";
import { epicFetchReviews } from "./epics/epicReviews";
import { epicSaveReview } from "./epics/epicSaveReview";
import { epicUpdateReview } from "./epics/epicUpdateReview";

const reviewEpics = combineEpics(
  epicDeleteReview,
  epicFetchReview,
  epicUpdateReview,
  epicSaveReview,
  epicFetchReviews
);

export default reviewEpics;
