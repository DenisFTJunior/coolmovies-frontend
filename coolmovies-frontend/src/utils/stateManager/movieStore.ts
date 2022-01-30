import { moviesClient } from "../api/client/movieClient";
import { createStore } from "./store";

//Reducers
import userReducer from "./slice/async/user/userSlice";
import commentReducer from "./slice/async/comment/commentSlice";
import directorReducer from "./slice/async/director/directorSlice";
import movieReducer from "./slice/async/movie/movieSlice";
import reviewReducer from "./slice/async/review/reviewSlice";
import tempCommentReducer from "./slice/sync/tempCommentSlice";
import generalReducer from "./slice/sync/generalSlice";
import searchReducer from "./slice/sync/searchSlice";

//Epics
import userEpics from "./slice/async/user/userEpics";
import movieEpics from "./slice/async/movie/movieEpics";
import directorEpics from "./slice/async/director/directorEpics";
import reviewEpics from "./slice/async/review/reviewEpics";
import commentEpics from "./slice/async/comment/commentEpics";

const movieStore = createStore({
  epicDependencies: { client: moviesClient },
  reducers: {
    user: userReducer,
    comment: commentReducer,
    review: reviewReducer,
    movie: movieReducer,
    director: directorReducer,
    tempComment: tempCommentReducer,
    general: generalReducer,
    search: searchReducer,
  },
  epics: [userEpics, movieEpics, directorEpics, reviewEpics, commentEpics],
});

export default movieStore;
