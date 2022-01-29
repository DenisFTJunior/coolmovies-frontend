import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../../../example/redux";

export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
