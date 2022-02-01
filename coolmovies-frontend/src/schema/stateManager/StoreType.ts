import movieStore from "../../utils/stateManager/movieStore";

export type StateDispatch = ReturnType<typeof movieStore>["dispatch"];
export type RootState = ReturnType<typeof movieStore>["getState"];
