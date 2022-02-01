import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../../schema/stateManager/StoreType";

export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
