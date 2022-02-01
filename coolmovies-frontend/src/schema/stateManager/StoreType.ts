import movieStore from "../../utils/stateManager/movieStore";

export type StateDispatch = ReturnType<typeof movieStore>["dispatch"];
export type RootState = ReturnType<ReturnType<typeof movieStore>['getState']>;

