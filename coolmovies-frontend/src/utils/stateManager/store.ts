import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { CreateStoreOptions } from "../../schema/stateManager/StoreType";
// const rootEpic = combineEpics(exampleEpics);

export const createStore = ({ epicDependencies, reducers }: CreateStoreOptions) => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: epicDependencies,
  });

  const createdStore = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),
    reducer: reducers,
  });

//   epicMiddleware.run(rootEpic);

  return createdStore;
};





