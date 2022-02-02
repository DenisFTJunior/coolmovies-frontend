import { useEffect } from "react";

import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as generalActions } from "../stateManager/slice/sync/generalSlice";

const useLocalValue = (data: object) => {
  const dispatch = useStateDispatch();
  const stateGeneral = useStateSelector((state) => state.general);
  const { setLocalValue } = generalActions;
  const action = (v: object) => dispatch(setLocalValue(v));

  useEffect(() => {
    action(data);
  }, []);

  return [stateGeneral.localValue, action, stateGeneral];
};

export default useLocalValue;
