import movieStore from "../../utils/stateManager/movieStore";

export type StateDispatch =
  | ReturnType<typeof movieStore>["dispatch"]
  | (() => void);
export type RootState = ReturnType<typeof movieStore>["getState"];
