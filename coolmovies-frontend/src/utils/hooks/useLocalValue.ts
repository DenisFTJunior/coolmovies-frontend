

import { useEffect } from "react";

import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as generalActions } from "../stateManager/slice/sync/generalSlice";

const useLocalValue = (data: object) => {
  const dispatch = useStateDispatch();
  const stateGeneral = useStateSelector((state) => state.general);
  const { setLocalValue } = generalActions;

  useEffect(() => {
    dispatch(setLocalValue(data));
  }, []);

  return stateGeneral.localValue;
};

export default useLocalValue;
