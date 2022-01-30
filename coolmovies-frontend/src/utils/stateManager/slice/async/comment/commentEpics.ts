import { combineEpics } from "redux-observable";

import { epicDeleteComment } from "./epics/epicDeleteComment";
import { epicFetchComment } from "./epics/epicComment";
import { epicFetchComments } from "./epics/epicComments";
import { epicUpdateComment } from "./epics/epicUpdateComment";
import { epicSaveComment } from "./epics/epicSaveComment";

const commentEpics = combineEpics(
  epicDeleteComment,
  epicFetchComment,
  epicUpdateComment,
  epicFetchComments,
  epicSaveComment
);

export default commentEpics;
