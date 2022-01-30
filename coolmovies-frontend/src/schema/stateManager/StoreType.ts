import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { Reducer } from "@reduxjs/toolkit";
import { Epic } from "redux-observable";
import { createStore } from "../../utils/stateManager/store";

export type CreateStoreOptions = {
  epicDependencies?: EpicDependencies;
  reducers: any;
  epics: Epic[];
};

export type EpicDependencies = {
  client: ApolloClient<NormalizedCacheObject>;
};

export type StateDispatch = ReturnType<typeof createStore>["dispatch"];
export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;
