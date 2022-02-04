import { useEffect } from "react";

import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as modalActions } from "../stateManager/slice/sync/modalSlice";

const useModal = (name: string) => {
  const dispatch = useStateDispatch();
  const modalState = useStateSelector((state) => state.modal);
  const { closeModal, toogleModal } = modalActions;

  return [
    modalState.modal[name],
    {
      closeModal: () => dispatch(closeModal({ modal: name })),
      toogleModal: (data: Object) =>
        dispatch(toogleModal({ modal: name, data })),
    },
  ];
};

export default useModal;
