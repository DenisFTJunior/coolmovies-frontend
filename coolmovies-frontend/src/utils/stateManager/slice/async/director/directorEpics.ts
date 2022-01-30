import { combineEpics } from "redux-observable";

import { epicDeleteDirector } from "./epics/epicDeleteDirector";
import { epicFetchDirector } from "./epics/epicDirector";
import { epicFetchDirectors } from "./epics/epicDirectors";
import { epicUpdateDirector } from "./epics/epicUpdateDirector";
import { epicSaveDirector } from "./epics/epicSaveDirector";

const directorEpics = combineEpics(
  epicDeleteDirector,
  epicFetchDirector,
  epicUpdateDirector,
  epicFetchDirectors,
  epicSaveDirector
);

export default directorEpics;
