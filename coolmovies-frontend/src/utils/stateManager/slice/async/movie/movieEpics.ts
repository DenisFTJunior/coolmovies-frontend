import { combineEpics } from "redux-observable";

import { epicDeleteMovie } from "./epics/epicDeleteMovie";
import { epicFetchMovie } from "./epics/epicMovie";
import { epicFetchMovies } from "./epics/epicMovies";
import { epicUpdateMovie } from "./epics/epicUpdateMovie";
import { epicSaveMovie } from "./epics/epicSaveMovie";

const movieEpics = combineEpics(
  epicDeleteMovie,
  epicFetchMovie,
  epicUpdateMovie,
  epicFetchMovies,
  epicSaveMovie
);

export default movieEpics;
