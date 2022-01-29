import { moviesClient } from "../api/client/movieClient";
import { createStore } from "./store";

const movieStore = createStore({
  epicDependencies: { client: moviesClient },
  reducers: {},
});

export default movieStore;
