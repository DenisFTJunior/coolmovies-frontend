import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";

import { CreateStoreOptions } from "../../schema/stateManager/StoreType";

const rootEpic = (epics: Epic[]) => combineEpics(...epics);

export const createStore = ({
  epicDependencies,
  reducers,
  epics,
}: CreateStoreOptions) => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: epicDependencies,
  });

  const createdStore = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),
    reducer: reducers,
  });

  epicMiddleware.run(rootEpic(epics));

  return createdStore;
};
