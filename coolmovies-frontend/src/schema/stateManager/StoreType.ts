import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { AnyAction } from "@reduxjs/toolkit";
import { createStore } from "../../utils/stateManager/store";

export type Reducer = (state: unknown, action: AnyAction) => unknown;

export type CreateStoreOptions = {
  epicDependencies?: EpicDependencies;
  reducers: {
    [key:string]: Reducer 
  }
};

export type EpicDependencies = {
  client: ApolloClient<NormalizedCacheObject>;
};

export type StateDispatch = ReturnType<typeof createStore>["dispatch"];
export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;