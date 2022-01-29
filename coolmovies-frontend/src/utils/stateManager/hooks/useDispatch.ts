import { useDispatch } from "react-redux";
import { StateDispatch } from "../../../schema/stateManager/StoreType";

export const useStateDispatch = () => useDispatch<StateDispatch>();
