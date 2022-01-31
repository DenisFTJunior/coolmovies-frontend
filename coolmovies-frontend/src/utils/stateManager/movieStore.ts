import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";

import { moviesClient } from "../api/client/movieClient";

//Reducers
import userReducer from "./slice/async/user/userSlice";
import commentReducer from "./slice/async/comment/commentSlice";
import directorReducer from "./slice/async/director/directorSlice";
import movieReducer from "./slice/async/movie/movieSlice";
import reviewReducer from "./slice/async/review/reviewSlice";
import tempCommentReducer from "./slice/sync/tempCommentSlice";
import generalReducer from "./slice/sync/generalSlice";
import searchReducer from "./slice/sync/searchSlice";
import modalReducer from "./slice/sync/modalSlice";

//Epics
import userEpics from "./slice/async/user/userEpics";
import movieEpics from "./slice/async/movie/movieEpics";
import directorEpics from "./slice/async/director/directorEpics";
import reviewEpics from "./slice/async/review/reviewEpics";
import commentEpics from "./slice/async/comment/commentEpics";

const rootEpic = combineEpics(
  userEpics,
  movieEpics,
  directorEpics,
  reviewEpics,
  commentEpics
);

const movieStore = (): EnhancedStore => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: { client: moviesClient },
  });

  const store = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),

    reducer: {
      user: userReducer,
      comment: commentReducer,
      review: reviewReducer,
      movie: movieReducer,
      director: directorReducer,
      tempComment: tempCommentReducer,
      general: generalReducer,
      search: searchReducer,
      modal: modalReducer
    },
  });

  epicMiddleware.run(rootEpic);

  return store;
};

export default movieStore;
